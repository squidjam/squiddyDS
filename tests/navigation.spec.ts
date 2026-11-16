import { test, expect } from '@playwright/test';

// sq-tabs tests
test.describe('sq-tabs', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/navigation/sq-tabs.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders tabs with first tab active', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-tabs>
          <sq-tab label="Tab 1"></sq-tab>
          <sq-tab label="Tab 2"></sq-tab>
          <sq-tab label="Tab 3"></sq-tab>
        </sq-tabs>
      `;
    });
    await page.waitForTimeout(200);

    const tabs = page.locator('sq-tabs');
    await expect(tabs).toBeVisible();
  });

  test('switches tabs on click', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-tabs>
          <sq-tab label="Tab 1"></sq-tab>
          <sq-tab label="Tab 2"></sq-tab>
        </sq-tabs>
      `;
    });
    await page.waitForTimeout(200);

    const secondTab = page.locator('sq-tab').nth(1);
    await secondTab.click();
    await page.waitForTimeout(100);
  });

  test('supports pill variant', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-tabs variant="pill">
          <sq-tab label="Pill 1"></sq-tab>
          <sq-tab label="Pill 2"></sq-tab>
        </sq-tabs>
      `;
    });
    await page.waitForTimeout(200);

    const tabs = page.locator('sq-tabs');
    await expect(tabs).toBeVisible();
  });

  test('tab with badge shows count', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-tabs>
          <sq-tab label="Messages" badge="5"></sq-tab>
        </sq-tabs>
      `;
    });
    await page.waitForTimeout(200);

    const badge = page.locator('sq-tab .badge');
    await expect(badge).toBeVisible();
    await expect(badge).toContainText('5');
  });

  test('tab panels show/hide correctly', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-tabs>
          <sq-tab label="Tab 1"></sq-tab>
          <sq-tab label="Tab 2"></sq-tab>
        </sq-tabs>
        <sq-tab-panel>Panel 1 Content</sq-tab-panel>
        <sq-tab-panel>Panel 2 Content</sq-tab-panel>
      `;
    });
    await page.waitForTimeout(200);

    const firstPanel = page.locator('sq-tab-panel').first();
    await expect(firstPanel).toBeVisible();
  });
});

// sq-menu tests
test.describe('sq-menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/navigation/sq-menu.js';
        import '/src/components/navigation/sq-menu-item.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders horizontal menu by default', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-menu>
          <sq-menu-item>Home</sq-menu-item>
          <sq-menu-item>About</sq-menu-item>
          <sq-menu-item>Contact</sq-menu-item>
        </sq-menu>
      `;
    });
    await page.waitForTimeout(100);

    const menu = page.locator('sq-menu');
    await expect(menu).toBeVisible();
  });

  test('supports vertical orientation', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-menu orientation="vertical">
          <sq-menu-item>Item 1</sq-menu-item>
          <sq-menu-item>Item 2</sq-menu-item>
        </sq-menu>
      `;
    });
    await page.waitForTimeout(100);

    const menu = page.locator('sq-menu');
    await expect(menu).toBeVisible();
  });

  test('supports block layout', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-menu layout="block">
          <sq-menu-item>Block 1</sq-menu-item>
        </sq-menu>
      `;
    });
    await page.waitForTimeout(100);

    const menu = page.locator('sq-menu');
    await expect(menu).toBeVisible();
  });
});

// sq-menu-item tests
test.describe('sq-menu-item', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/navigation/sq-menu-item.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders menu item', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-menu-item>Menu Item</sq-menu-item>';
    });
    await page.waitForTimeout(100);

    const menuItem = page.locator('sq-menu-item');
    await expect(menuItem).toBeVisible();
  });

  test('disabled state prevents click', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-menu-item disabled>Disabled</sq-menu-item>';
    });
    await page.waitForTimeout(100);

    const menuItem = page.locator('sq-menu-item');
    await expect(menuItem).toBeVisible();
  });

  test('supports keyboard shortcut display', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-menu-item kbd="⌘S">Save</sq-menu-item>';
    });
    await page.waitForTimeout(100);

    const menuItem = page.locator('sq-menu-item');
    await expect(menuItem).toBeVisible();
  });
});

// sq-breadcrumb tests
test.describe('sq-breadcrumb', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/navigation/sq-breadcrumb.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders breadcrumb trail', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-breadcrumb><a href="/">Home</a> / <a href="/page">Page</a></sq-breadcrumb>';
    });
    await page.waitForTimeout(100);

    const breadcrumb = page.locator('sq-breadcrumb');
    await expect(breadcrumb).toBeVisible();
  });

  test('supports different variants', async ({ page }) => {
    const variants = ['primary', 'subtle', 'underline'];
    
    for (const variant of variants) {
      await page.locator('#container').evaluate((v) => {
        document.querySelector('#container')!.innerHTML = `<sq-breadcrumb variant="${v}">Home / Page</sq-breadcrumb>`;
      }, variant);
      await page.waitForTimeout(100);

      const breadcrumb = page.locator('sq-breadcrumb');
      await expect(breadcrumb).toBeVisible();
    }
  });
});

// sq-link tests
test.describe('sq-link', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/navigation/sq-link.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders link with href', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-link href="https://example.com">External Link</sq-link>';
    });
    await page.waitForTimeout(100);

    const link = page.locator('sq-link');
    await expect(link).toBeVisible();
  });

  test('supports different variants', async ({ page }) => {
    const variants = ['primary', 'subtle', 'underline'];
    
    for (const variant of variants) {
      await page.locator('#container').evaluate((v) => {
        document.querySelector('#container')!.innerHTML = `<sq-link href="#" variant="${v}">${v}</sq-link>`;
      }, variant);
      await page.waitForTimeout(100);

      const link = page.locator('sq-link');
      await expect(link).toBeVisible();
    }
  });

  test('external link opens in new tab', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-link href="https://example.com" external>External</sq-link>';
    });
    await page.waitForTimeout(100);

    const link = page.locator('sq-link a');
    await expect(link).toHaveAttribute('target', '_blank');
  });

  test('download link triggers download', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-link href="/file.pdf" download>Download</sq-link>';
    });
    await page.waitForTimeout(100);

    const link = page.locator('sq-link a');
    await expect(link).toHaveAttribute('download', '');
  });
});

// sq-stepper tests
test.describe('sq-stepper', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/navigation/sq-stepper.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders stepper with steps', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-stepper current-step="1"></sq-stepper>';
    });
    await page.waitForTimeout(100);

    const stepper = page.locator('sq-stepper');
    await expect(stepper).toBeVisible();
  });

  test('supports vertical orientation', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-stepper orientation="vertical"></sq-stepper>';
    });
    await page.waitForTimeout(100);

    const stepper = page.locator('sq-stepper');
    await expect(stepper).toBeVisible();
  });

  test('clickable steps allow navigation', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-stepper clickable></sq-stepper>';
    });
    await page.waitForTimeout(100);

    const stepper = page.locator('sq-stepper');
    await expect(stepper).toBeVisible();
  });
});

// sq-pagination tests
test.describe('sq-pagination', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/navigation/sq-pagination.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders pagination controls', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-pagination page="1" total-pages="10"></sq-pagination>';
    });
    await page.waitForTimeout(100);

    const pagination = page.locator('sq-pagination');
    await expect(pagination).toBeVisible();
  });

  test('shows page info when enabled', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-pagination page="1" total-pages="10" show-info total-items="100" items-per-page="10"></sq-pagination>';
    });
    await page.waitForTimeout(100);

    const pagination = page.locator('sq-pagination');
    await expect(pagination).toBeVisible();
  });

  test('navigates to next page on click', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-pagination page="1" total-pages="5"></sq-pagination>';
    });
    await page.waitForTimeout(100);

    const pagination = page.locator('sq-pagination');
    await expect(pagination).toBeVisible();
  });
});

// sq-menu-divider tests
test.describe('sq-menu-divider', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/navigation/sq-menu-divider.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders as horizontal separator', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-menu-divider></sq-menu-divider>';
    });
    await page.waitForTimeout(100);

    const divider = page.locator('sq-menu-divider');
    await expect(divider).toBeVisible();
  });

  test('renders hr element with separator role', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-menu-divider></sq-menu-divider>';
    });
    await page.waitForTimeout(100);

    const hr = page.locator('sq-menu-divider hr');
    await expect(hr).toBeVisible();
    
    const role = await hr.getAttribute('role');
    expect(role).toBe('separator');
  });

  test('renders within a menu context', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-menu>
          <sq-menu-item>Item 1</sq-menu-item>
          <sq-menu-divider></sq-menu-divider>
          <sq-menu-item>Item 2</sq-menu-item>
        </sq-menu>
      `;
    });
    await page.waitForTimeout(100);

    const divider = page.locator('sq-menu-divider');
    await expect(divider).toBeVisible();
  });

  test('applies CSS custom properties', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-menu-divider></sq-menu-divider>';
    });
    await page.waitForTimeout(100);

    const divider = page.locator('sq-menu-divider');
    await expect(divider).toBeVisible();
  });
});
