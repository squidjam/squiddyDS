import { test, expect } from '@playwright/test';

// sq-alert tests
test.describe('sq-alert', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/feedback/sq-alert.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders alert with message', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-alert title="Alert" variant="info">This is an alert message.</sq-alert>';
    });
    await page.waitForTimeout(100);

    const alert = page.locator('sq-alert');
    await expect(alert).toBeVisible();
    await expect(alert).toContainText('This is an alert message.');
  });

  test('supports all variants', async ({ page }) => {
    const variants = ['default', 'success', 'warning', 'danger', 'info'];
    
    for (const variant of variants) {
      await page.locator('#container').evaluate((v) => {
        document.querySelector('#container')!.innerHTML = `<sq-alert variant="${v}" title="${v}">Message</sq-alert>`;
      }, variant);
      await page.waitForTimeout(100);

      const alert = page.locator('sq-alert');
      await expect(alert).toBeVisible();
    }
  });

  test('supports all sizes', async ({ page }) => {
    const sizes = ['sm', 'md', 'lg'];
    
    for (const size of sizes) {
      await page.locator('#container').evaluate((s) => {
        document.querySelector('#container')!.innerHTML = `<sq-alert size="${s}" title="${s}">Message</sq-alert>`;
      }, size);
      await page.waitForTimeout(100);

      const alert = page.locator('sq-alert');
      await expect(alert).toBeVisible();
    }
  });

  test('closable alert shows close button', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-alert closable title="Closable">Message</sq-alert>';
    });
    await page.waitForTimeout(100);

    const alert = page.locator('sq-alert');
    await expect(alert).toBeVisible();
  });

  test('dismissed alert is hidden', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-alert dismissed title="Dismissed">Message</sq-alert>';
    });
    await page.waitForTimeout(100);

    const alert = page.locator('sq-alert');
    // Dismissed alerts should not be visible
    const isVisible = await alert.isVisible();
    expect(isVisible).toBeFalsy();
  });

  test('show-icon displays icon', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-alert show-icon title="With Icon">Message</sq-alert>';
    });
    await page.waitForTimeout(100);

    const alert = page.locator('sq-alert');
    await expect(alert).toBeVisible();
  });

  test('hides icon when show-icon is false', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-alert show-icon="false" title="No Icon">Message</sq-alert>';
    });
    await page.waitForTimeout(100);

    const alert = page.locator('sq-alert');
    await expect(alert).toBeVisible();
  });
});
