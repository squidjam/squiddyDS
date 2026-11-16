import { test, expect } from '@playwright/test';

test('diagnose storybook theme switching', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Collect all console messages
  const consoleLogs: string[] = [];
  page.on('console', (msg) => consoleLogs.push(`[${msg.type()}] ${msg.text()}`));
  
  await page.goto('http://127.0.0.1:6006/');
  await page.waitForTimeout(4000); // Wait for Storybook to fully load
  
  console.log('=== PAGE LOAD ===');
  console.log('URL:', page.url());
  
  // List all iframes
  const frames = page.frames();
  console.log('\n=== FRAMES ===');
  frames.forEach((frame, i) => {
    console.log(`Frame ${i}: "${frame.name()}" - ${frame.url()}`);
  });
  
  // The main page IS the manager UI in Storybook 10
  console.log('\n=== MAIN PAGE (Manager UI) ===');
  const mainHtmlTheme = await page.evaluate(() => document.documentElement.getAttribute('sq-mode'));
  const mainBodyTheme = await page.evaluate(() => document.body?.getAttribute('sq-mode'));
  console.log('Main HTML sq-mode:', mainHtmlTheme);
  console.log('Main BODY sq-mode:', mainBodyTheme);
  
  // Check sidebar background on main page (this IS the manager)
  const sidebarBg = await page.evaluate(() => {
    // Try various selectors for the sidebar
    const selectors = [
      '[class*="sidebar"]', '[class*="Sidebar"]',
      '[class*="side-bar"]', '[class*="SideBar"]',
      'nav', 'aside'
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el) {
        const style = window.getComputedStyle(el);
        return { selector: sel, tag: el.tagName, className: el.className.substring(0, 60), bg: style.backgroundColor, height: el.clientHeight };
      }
    }
    return 'No sidebar-like element found';
  });
  console.log('Sidebar element:', JSON.stringify(sidebarBg));
  
  // Check header/toolbar on main page
  const headerBg = await page.evaluate(() => {
    const selectors = [
      '[class*="header"]', '[class*="Header"]',
      '[class*="topbar"]', '[class*="Topbar"]',
      '[class*="toolbar"]', '[class*="Toolbar"]'
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el) {
        const style = window.getComputedStyle(el);
        return { selector: sel, tag: el.tagName, className: el.className.substring(0, 60), bg: style.backgroundColor };
      }
    }
    return 'No header-like element found';
  });
  console.log('Header element:', JSON.stringify(headerBg));
  
  // Find all elements with dark backgrounds on the main page
  const darkElements = await page.evaluate(() => {
    const elements = document.querySelectorAll('*');
    const darks = [];
    for (let i = 0; i < Math.min(elements.length, 200); i++) {
      const el = elements[i];
      const style = window.getComputedStyle(el);
      const bg = style.backgroundColor;
      // Check if it's a dark color
      if (bg && bg.startsWith('rgb')) {
        const match = bg.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (match) {
          const r = parseInt(match[1]), g = parseInt(match[2]), b = parseInt(match[3]);
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          if (brightness < 80 && el.clientHeight > 50) { // Dark and reasonably sized
            darks.push({ tag: el.tagName, class: el.className.substring(0, 60), bg, size: `${el.clientWidth}x${el.clientHeight}` });
          }
        }
      }
    }
    return darks.slice(0, 15);
  });
  console.log('Dark elements on main page:', JSON.stringify(darkElements, null, 2));
  
  // Check preview iframe
  console.log('\n=== PREVIEW IFRAME ===');
  const previewFrame = frames.find(f => f.url().includes('preview') || f.name().includes('preview'));
  if (previewFrame) {
    try {
      const previewHtmlTheme = await previewFrame.evaluate(() => document.documentElement.getAttribute('sq-mode'));
      const previewBodyTheme = await previewFrame.evaluate(() => document.body?.getAttribute('sq-mode'));
      const previewBodyClass = await previewFrame.evaluate(() => document.body?.className);
      console.log('Preview HTML sq-mode:', previewHtmlTheme);
      console.log('Preview BODY sq-mode:', previewBodyTheme);
      console.log('Preview BODY class:', previewBodyClass);
      
      const cssVars = await previewFrame.evaluate(() => {
        const style = getComputedStyle(document.documentElement);
        return {
          bgDefault: style.getPropertyValue('--sq-bg-default').trim(),
          accentPrimary: style.getPropertyValue('--sq-accent-primary').trim(),
        };
      }).catch(e => e.message);
      console.log('Preview CSS variables:', cssVars);
    } catch (e: any) {
      console.log('Error reading preview frame:', e.message);
    }
  }
  
  // Take initial screenshot
  await page.screenshot({ path: 'screenshots/storybook-initial.png', fullPage: false });
  console.log('\n=== Screenshot saved: screenshots/storybook-initial.png ===');
  
  // Find the theme selector in the toolbar
  console.log('\n=== FINDING THEME SELECTOR ===');
  
  // Look for select elements on the main page (toolbar is on main page)
  const selects = await page.evaluate(() => {
    const allSelects = document.querySelectorAll('select');
    return Array.from(allSelects).map(s => ({
      id: s.id,
      name: s.name,
      className: s.className.substring(0, 80),
      value: s.value,
      options: Array.from(s.options).map(o => ({ value: o.value, text: o.text }))
    }));
  });
  console.log('Select elements:', JSON.stringify(selects, null, 2));
  
  // The theme switcher is a button, not a select
  console.log('\n=== THEME BUTTON ===');
  const themeButton = page.locator('button').filter({ hasText: /light|dark|Light|Dark/i }).first();
  const buttonCount = await themeButton.count();
  console.log(`Theme button found: ${buttonCount > 0}`);
  
  // Test 1: Navigate to dark theme via URL globals parameter
  console.log('\n=== TEST 1: URL-based dark theme ===');
  await page.goto('http://127.0.0.1:6006/?path=/story/interactive-all--details&globals=theme:dark');
  await page.waitForTimeout(3000);
  
  const darkSidebarBg = await page.evaluate(() => {
    const sidebar = document.querySelector('[class*="sidebar"]');
    if (sidebar) {
      const style = window.getComputedStyle(sidebar);
      return style.backgroundColor;
    }
    return 'not found';
  });
  console.log('Dark URL - sidebar bg:', darkSidebarBg);
  
  const darkPreview = await page.evaluate(() => {
    const frames = window.parent?.frames || [];
    return { url: window.location.href };
  });
  console.log('Dark URL - page:', JSON.stringify(darkPreview));
  
  // Check preview iframe
  const framesDark = page.frames();
  const previewFrameDark = framesDark.find(f => f.url().includes('preview') || f.name().includes('preview'));
  if (previewFrameDark) {
    const darkPreviewData = await previewFrameDark.evaluate(() => {
      const htmlTheme = document.documentElement.getAttribute('sq-mode');
      const bodyClass = document.body?.className;
      const style = getComputedStyle(document.documentElement);
      return {
        htmlTheme,
        bodyClass: bodyClass?.substring(0, 80),
        bgDefault: style.getPropertyValue('--sq-bg-default').trim(),
      };
    }).catch(e => e.message);
    console.log('Dark URL - preview:', JSON.stringify(darkPreviewData));
  }
  
  // Check the theme button text
  const darkThemeButton = page.locator('button').filter({ hasText: /light|dark|Light|Dark/i }).first();
  if (await darkThemeButton.count() > 0) {
    const darkButtonText = await darkThemeButton.textContent();
    console.log('Dark URL - theme button text:', darkButtonText?.trim());
  }
  
  await page.screenshot({ path: 'screenshots/storybook-dark-url.png', fullPage: false });
  console.log('Screenshot saved: screenshots/storybook-dark-url.png');
  
  // Test 2: Navigate to light theme via URL
  console.log('\n=== TEST 2: URL-based light theme ===');
  await page.goto('http://127.0.0.1:6006/?path=/story/interactive-all--details&globals=theme:light');
  await page.waitForTimeout(3000);
  
  const lightSidebarBg = await page.evaluate(() => {
    const sidebar = document.querySelector('[class*="sidebar"]');
    if (sidebar) {
      const style = window.getComputedStyle(sidebar);
      return style.backgroundColor;
    }
    return 'not found';
  });
  console.log('Light URL - sidebar bg:', lightSidebarBg);
  
  const framesLight = page.frames();
  const previewFrameLight = framesLight.find(f => f.url().includes('preview') || f.name().includes('preview'));
  if (previewFrameLight) {
    const lightPreviewData = await previewFrameLight.evaluate(() => {
      const htmlTheme = document.documentElement.getAttribute('sq-mode');
      const bodyClass = document.body?.className;
      const style = getComputedStyle(document.documentElement);
      return {
        htmlTheme,
        bodyClass: bodyClass?.substring(0, 80),
        bgDefault: style.getPropertyValue('--sq-bg-default').trim(),
      };
    }).catch(e => e.message);
    console.log('Light URL - preview:', JSON.stringify(lightPreviewData));
  }
  
  await page.screenshot({ path: 'screenshots/storybook-light-url.png', fullPage: false });
  console.log('Screenshot saved: screenshots/storybook-light-url.png');
  
  // Test 3: Try clicking the theme button and look for popup/portal
  console.log('\n=== TEST 3: Click theme button ===');
  await page.goto('http://127.0.0.1:6006/?path=/story/interactive-all--details&globals=theme:light');
  await page.waitForTimeout(3000);
  
  const clickBtn = page.locator('button').filter({ hasText: /light|dark|Light|Dark/i }).first();
  if (await clickBtn.count() > 0) {
    await clickBtn.click();
    await page.waitForTimeout(1500);
    
    // Look for any popup, dialog, or portal elements
    const popups = await page.evaluate(() => {
      const results = [];
      // Check for fixed/absolute positioned elements that might be dropdowns
      const allElements = document.querySelectorAll('*');
      for (const el of allElements) {
        const style = window.getComputedStyle(el);
        if ((style.position === 'fixed' || style.position === 'absolute') && 
            style.display !== 'none' && 
            (el as HTMLElement).offsetParent !== null &&
            el.clientHeight > 0 && el.clientWidth > 0) {
          results.push({
            tag: el.tagName,
            text: el.textContent?.trim().substring(0, 50),
            className: el.className.substring(0, 60),
            position: style.position,
            size: `${el.clientWidth}x${el.clientHeight}`
          });
        }
      }
      return results.slice(0, 15);
    });
    console.log('Popups/portals after click:', JSON.stringify(popups, null, 2));
    
    // Also check if there's a new element with "dark" text
    const darkElements = page.locator('text=/dark|Dark/i').count();
    console.log(`Elements with "dark" text: ${darkElements}`);
    
    await page.screenshot({ path: 'screenshots/storybook-after-click.png', fullPage: false });
    console.log('Screenshot saved: screenshots/storybook-after-click.png');
  }
  
  // Check URL for globals
  console.log('\n=== URL ===');
  console.log('Final URL:', page.url());
  
  // Check console errors
  const errors = consoleLogs.filter(l => l.startsWith('[error]'));
  if (errors.length) {
    console.log('\n=== ERRORS ===');
    errors.forEach(e => console.log(e));
  }
  
  await context.close();
});
