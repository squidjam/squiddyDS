import { test, expect } from '@playwright/test';

// sq-tooltip tests
test.describe('sq-tooltip', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/overlay/sq-tooltip.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders tooltip with content', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-tooltip content="Tooltip text"><button>Hover me</button></sq-tooltip>';
    });
    await page.waitForTimeout(100);

    const tooltip = page.locator('sq-tooltip');
    await expect(tooltip).toBeVisible();
  });

  test('supports different positions', async ({ page }) => {
    const positions = ['top', 'bottom', 'left', 'right'];
    
    for (const position of positions) {
      await page.locator('#container').evaluate((p) => {
        document.querySelector('#container')!.innerHTML = `<sq-tooltip content="Tip" position="${p}"><button>Btn</button></sq-tooltip>`;
      }, position);
      await page.waitForTimeout(100);

      const tooltip = page.locator('sq-tooltip');
      await expect(tooltip).toBeVisible();
    }
  });

  test('supports different variants', async ({ page }) => {
    const variants = ['default', 'info', 'success', 'warning', 'error'];
    
    for (const variant of variants) {
      await page.locator('#container').evaluate((v) => {
        document.querySelector('#container')!.innerHTML = `<sq-tooltip content="Tip" variant="${v}"><button>Btn</button></sq-tooltip>`;
      }, variant);
      await page.waitForTimeout(100);

      const tooltip = page.locator('sq-tooltip');
      await expect(tooltip).toBeVisible();
    }
  });

  test('opens on hover when enabled', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-tooltip content="Hover tip" hover><button>Hover</button></sq-tooltip>';
    });
    await page.waitForTimeout(100);

    const tooltip = page.locator('sq-tooltip');
    await expect(tooltip).toBeVisible();
  });

  test('opens when open property is set', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-tooltip content="Open tip" open><button>Btn</button></sq-tooltip>';
    });
    await page.waitForTimeout(100);

    const tooltip = page.locator('sq-tooltip');
    await expect(tooltip).toHaveAttribute('open', '');
  });
});

// sq-dropdown tests
test.describe('sq-dropdown', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/overlay/sq-dropdown.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders dropdown', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-dropdown trigger-label="Select"></sq-dropdown>';
    });
    await page.waitForTimeout(100);

    const dropdown = page.locator('sq-dropdown');
    await expect(dropdown).toBeVisible();
  });

  test('opens when open property is set', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-dropdown open trigger-label="Open"></sq-dropdown>';
    });
    await page.waitForTimeout(100);

    const dropdown = page.locator('sq-dropdown');
    await expect(dropdown).toHaveAttribute('open', '');
  });

  test('supports custom dimensions', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-dropdown min-width="300px" max-height="400px"></sq-dropdown>';
    });
    await page.waitForTimeout(100);

    const dropdown = page.locator('sq-dropdown');
    await expect(dropdown).toBeVisible();
  });

  test('disabled state prevents interaction', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-dropdown disabled trigger-label="Disabled"></sq-dropdown>';
    });
    await page.waitForTimeout(100);

    const dropdown = page.locator('sq-dropdown');
    await expect(dropdown).toBeVisible();
  });
});

// sq-dialog tests
test.describe('sq-dialog', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/interactive/sq-dialog.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders dialog', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-dialog label="Dialog Title"><p>Content</p></sq-dialog>';
    });
    await page.waitForTimeout(100);

    const dialog = page.locator('sq-dialog');
    await expect(dialog).toBeVisible();
  });

  test('opens when open property is set', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-dialog open label="Open Dialog"><p>Visible</p></sq-dialog>';
    });
    await page.waitForTimeout(100);

    const dialog = page.locator('sq-dialog');
    await expect(dialog).toHaveAttribute('open', '');
  });
});

// sq-drawer tests
test.describe('sq-drawer', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/overlay/sq-drawer.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders drawer', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-drawer title="Drawer"><p>Content</p></sq-drawer>';
    });
    await page.waitForTimeout(100);

    const drawer = page.locator('sq-drawer');
    await expect(drawer).toBeVisible();
  });

  test('supports different positions', async ({ page }) => {
    const positions = ['left', 'right', 'top', 'bottom'];
    
    for (const position of positions) {
      await page.locator('#container').evaluate((p) => {
        document.querySelector('#container')!.innerHTML = `<sq-drawer position="${p}" title="Drawer"><p>Content</p></sq-drawer>`;
      }, position);
      await page.waitForTimeout(100);

      const drawer = page.locator('sq-drawer');
      await expect(drawer).toBeVisible();
      await expect(drawer).toHaveAttribute('position', position);
    }
  });

  test('opens when open property is set', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-drawer open title="Open Drawer"><p>Visible</p></sq-drawer>';
    });
    await page.waitForTimeout(100);

    const drawer = page.locator('sq-drawer');
    await expect(drawer).toHaveAttribute('open', '');
  });

  test('closable option shows close button', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-drawer closable title="Closable"><p>Content</p></sq-drawer>';
    });
    await page.waitForTimeout(100);

    const drawer = page.locator('sq-drawer');
    await expect(drawer).toBeVisible();
  });
});
