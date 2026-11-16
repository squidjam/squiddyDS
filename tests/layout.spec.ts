import { test, expect } from '@playwright/test';

// sq-card tests
test.describe('sq-card', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/layout/sq-card.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders card with content', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-card><p>Card content</p></sq-card>';
    });
    await page.waitForTimeout(100);

    const card = page.locator('sq-card');
    await expect(card).toBeVisible();
  });

  test('supports elevated variant', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-card variant="elevated"><p>Elevated</p></sq-card>';
    });
    await page.waitForTimeout(100);

    const card = page.locator('sq-card');
    await expect(card).toBeVisible();
  });

  test('supports outlined variant', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-card variant="outlined"><p>Outlined</p></sq-card>';
    });
    await page.waitForTimeout(100);

    const card = page.locator('sq-card');
    await expect(card).toBeVisible();
  });

  test('supports filled variant', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-card variant="filled"><p>Filled</p></sq-card>';
    });
    await page.waitForTimeout(100);

    const card = page.locator('sq-card');
    await expect(card).toBeVisible();
  });

  test('interactive card has hover effect', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-card interactive><p>Click me</p></sq-card>';
    });
    await page.waitForTimeout(100);

    const card = page.locator('sq-card');
    await expect(card).toBeVisible();
  });
});

// sq-container tests
test.describe('sq-container', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/layout/sq-container.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders container with content', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-container><p>Content</p></sq-container>';
    });
    await page.waitForTimeout(100);

    const container = page.locator('sq-container');
    await expect(container).toBeVisible();
  });

  test('supports different sizes', async ({ page }) => {
    const sizes = ['sm', 'md', 'lg', 'xl', 'full'];
    
    for (const size of sizes) {
      await page.locator('#container').evaluate((s) => {
        document.querySelector('#container')!.innerHTML = `<sq-container size="${s}"><p>${s}</p></sq-container>`;
      }, size);
      await page.waitForTimeout(100);

      const container = page.locator('sq-container');
      await expect(container).toBeVisible();
    }
  });

  test('padded option adds padding', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-container padded><p>Padded</p></sq-container>';
    });
    await page.waitForTimeout(100);

    const container = page.locator('sq-container');
    await expect(container).toBeVisible();
  });
});

// sq-divider tests
test.describe('sq-divider', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/layout/sq-divider.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders horizontal divider by default', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-divider></sq-divider>';
    });
    await page.waitForTimeout(100);

    const divider = page.locator('sq-divider');
    await expect(divider).toBeVisible();
  });

  test('supports vertical orientation', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-divider orientation="vertical"></sq-divider>';
    });
    await page.waitForTimeout(100);

    const divider = page.locator('sq-divider');
    await expect(divider).toBeVisible();
  });

  test('inset option adds margin', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-divider inset></sq-divider>';
    });
    await page.waitForTimeout(100);

    const divider = page.locator('sq-divider');
    await expect(divider).toBeVisible();
  });
});

// sq-flex tests
test.describe('sq-flex', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/layout/sq-flex.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders flex container', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-flex><div>Item 1</div><div>Item 2</div></sq-flex>';
    });
    await page.waitForTimeout(100);

    const flex = page.locator('sq-flex');
    await expect(flex).toBeVisible();
  });

  test('supports different directions', async ({ page }) => {
    const directions = ['row', 'column', 'row-reverse', 'column-reverse'];
    
    for (const direction of directions) {
      await page.locator('#container').evaluate((d) => {
        document.querySelector('#container')!.innerHTML = `<sq-flex direction="${d}"><div>Item</div></sq-flex>`;
      }, direction);
      await page.waitForTimeout(100);

      const flex = page.locator('sq-flex');
      await expect(flex).toBeVisible();
    }
  });

  test('supports wrap option', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-flex wrap="wrap"><div>Item 1</div><div>Item 2</div></sq-flex>';
    });
    await page.waitForTimeout(100);

    const flex = page.locator('sq-flex');
    await expect(flex).toBeVisible();
  });

  test('supports custom gap', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-flex gap="32px"><div>Item 1</div><div>Item 2</div></sq-flex>';
    });
    await page.waitForTimeout(100);

    const flex = page.locator('sq-flex');
    await expect(flex).toBeVisible();
  });
});

// sq-grid tests
test.describe('sq-grid', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/layout/sq-grid.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders grid container', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-grid><div>Item 1</div><div>Item 2</div><div>Item 3</div></sq-grid>';
    });
    await page.waitForTimeout(100);

    const grid = page.locator('sq-grid');
    await expect(grid).toBeVisible();
  });

  test('supports custom columns', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-grid columns="repeat(4, 1fr)"><div>1</div><div>2</div></sq-grid>';
    });
    await page.waitForTimeout(100);

    const grid = page.locator('sq-grid');
    await expect(grid).toBeVisible();
  });

  test('supports custom gap', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-grid gap="24px"><div>Item</div></sq-grid>';
    });
    await page.waitForTimeout(100);

    const grid = page.locator('sq-grid');
    await expect(grid).toBeVisible();
  });
});

// sq-stack tests
test.describe('sq-stack', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/layout/sq-stack.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders stack container', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-stack><div>Item 1</div><div>Item 2</div></sq-stack>';
    });
    await page.waitForTimeout(100);

    const stack = page.locator('sq-stack');
    await expect(stack).toBeVisible();
  });

  test('supports different directions', async ({ page }) => {
    const directions = ['column', 'row'];
    
    for (const direction of directions) {
      await page.locator('#container').evaluate((d) => {
        document.querySelector('#container')!.innerHTML = `<sq-stack direction="${d}"><div>Item</div></sq-stack>`;
      }, direction);
      await page.waitForTimeout(100);

      const stack = page.locator('sq-stack');
      await expect(stack).toBeVisible();
    }
  });
});

// sq-masonry tests
test.describe('sq-masonry', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/layout/sq-masonry.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders masonry layout', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-masonry><div>Item 1</div><div>Item 2</div><div>Item 3</div></sq-masonry>';
    });
    await page.waitForTimeout(100);

    const masonry = page.locator('sq-masonry');
    await expect(masonry).toBeVisible();
  });

  test('supports custom columns', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-masonry columns="4"><div>Item</div></sq-masonry>';
    });
    await page.waitForTimeout(100);

    const masonry = page.locator('sq-masonry');
    await expect(masonry).toBeVisible();
  });
});

// sq-theme tests
test.describe('sq-theme', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/layout/sq-theme.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders theme wrapper', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-theme sq-theme="red"><p>Themed content</p></sq-theme>';
    });
    await page.waitForTimeout(100);

    const theme = page.locator('sq-theme');
    await expect(theme).toBeVisible();
  });

  test('applies theme attribute', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-theme sq-theme="blue"><p>Blue theme</p></sq-theme>';
    });
    await page.waitForTimeout(100);

    const theme = page.locator('sq-theme');
    await expect(theme).toHaveAttribute('sq-theme', 'blue');
  });
});
