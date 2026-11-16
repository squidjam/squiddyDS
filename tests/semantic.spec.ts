import { test, expect } from '@playwright/test';

// sq-header tests
test.describe('sq-header', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/semantic/sq-header.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders header element', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-header><p>Header content</p></sq-header>';
    });
    await page.waitForTimeout(100);

    const header = page.locator('sq-header');
    await expect(header).toBeVisible();
  });

  test('supports title property', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-header title="Site Title"><p>Content</p></sq-header>';
    });
    await page.waitForTimeout(100);

    const header = page.locator('sq-header');
    await expect(header).toBeVisible();
  });

  test('supports subtitle property', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-header title="Title" subtitle="Subtitle"><p>Content</p></sq-header>';
    });
    await page.waitForTimeout(100);

    const header = page.locator('sq-header');
    await expect(header).toBeVisible();
  });
});

// sq-footer tests
test.describe('sq-footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/semantic/sq-footer.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders footer element', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-footer><p>Footer content</p></sq-footer>';
    });
    await page.waitForTimeout(100);

    const footer = page.locator('sq-footer');
    await expect(footer).toBeVisible();
  });
});

// sq-nav tests
test.describe('sq-nav', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/semantic/sq-nav.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders nav element', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-nav><a href="/">Home</a></sq-nav>';
    });
    await page.waitForTimeout(100);

    const nav = page.locator('sq-nav');
    await expect(nav).toBeVisible();
  });

  test('supports horizontal orientation', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-nav orientation="horizontal"><a href="/">Home</a></sq-nav>';
    });
    await page.waitForTimeout(100);

    const nav = page.locator('sq-nav');
    await expect(nav).toBeVisible();
    await expect(nav).toHaveAttribute('orientation', 'horizontal');
  });

  test('supports vertical orientation', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-nav orientation="vertical"><a href="/">Home</a></sq-nav>';
    });
    await page.waitForTimeout(100);

    const nav = page.locator('sq-nav');
    await expect(nav).toBeVisible();
    await expect(nav).toHaveAttribute('orientation', 'vertical');
  });

  test('supports different variants', async ({ page }) => {
    const variants = ['primary', 'subtle', 'underline'];
    
    for (const variant of variants) {
      await page.locator('#container').evaluate((v) => {
        document.querySelector('#container')!.innerHTML = `<sq-nav variant="${v}"><a href="/">Home</a></sq-nav>`;
      }, variant);
      await page.waitForTimeout(100);

      const nav = page.locator('sq-nav');
      await expect(nav).toBeVisible();
      await expect(nav).toHaveAttribute('variant', variant);
    }
  });
});

// sq-main tests
test.describe('sq-main', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/semantic/sq-main.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders main element', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-main><p>Main content</p></sq-main>';
    });
    await page.waitForTimeout(100);

    const main = page.locator('sq-main');
    await expect(main).toBeVisible();
  });
});

// sq-section tests
test.describe('sq-section', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/semantic/sq-section.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders section element', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-section><p>Section content</p></sq-section>';
    });
    await page.waitForTimeout(100);

    const section = page.locator('sq-section');
    await expect(section).toBeVisible();
  });

  test('supports label property', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-section label="Section Label"><p>Content</p></sq-section>';
    });
    await page.waitForTimeout(100);

    const section = page.locator('sq-section');
    await expect(section).toBeVisible();
  });
});

// sq-article tests
test.describe('sq-article', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/semantic/sq-article.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders article element', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-article><p>Article content</p></sq-article>';
    });
    await page.waitForTimeout(100);

    const article = page.locator('sq-article');
    await expect(article).toBeVisible();
  });
});

// sq-aside tests
test.describe('sq-aside', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/semantic/sq-aside.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders aside element', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-aside><p>Sidebar content</p></sq-aside>';
    });
    await page.waitForTimeout(100);

    const aside = page.locator('sq-aside');
    await expect(aside).toBeVisible();
  });
});

// sq-search tests
test.describe('sq-search', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/semantic/sq-search.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders search element', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-search><input type="search" placeholder="Search..."></sq-search>';
    });
    await page.waitForTimeout(100);

    const search = page.locator('sq-search');
    await expect(search).toBeVisible();
  });
});

// sq-hgroup tests
test.describe('sq-hgroup', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/semantic/sq-hgroup.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders hgroup element', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-hgroup><h1>Title</h1><h2>Subtitle</h2></sq-hgroup>';
    });
    await page.waitForTimeout(100);

    const hgroup = page.locator('sq-hgroup');
    await expect(hgroup).toBeVisible();
  });
});

// sq-list tests
test.describe('sq-list', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/list/sq-list.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders unordered list by default', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-list><li>Item 1</li><li>Item 2</li></sq-list>';
    });
    await page.waitForTimeout(100);

    const list = page.locator('sq-list');
    await expect(list).toBeVisible();
  });

  test('supports ordered list type', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-list type="ordered"><li>First</li><li>Second</li></sq-list>';
    });
    await page.waitForTimeout(100);

    const list = page.locator('sq-list');
    await expect(list).toBeVisible();
  });

  test('supports dense option', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-list dense><li>Item</li></sq-list>';
    });
    await page.waitForTimeout(100);

    const list = page.locator('sq-list');
    await expect(list).toBeVisible();
  });

  test('supports bordered option', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-list bordered><li>Item</li></sq-list>';
    });
    await page.waitForTimeout(100);

    const list = page.locator('sq-list');
    await expect(list).toBeVisible();
  });
});

// sq-table tests
test.describe('sq-table', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/table/sq-table.js';
        import '/src/components/table/sq-th.js';
        import '/src/components/table/sq-td.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders table element', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-table><sq-th>Header</sq-th><sq-td>Cell</sq-td></sq-table>';
    });
    await page.waitForTimeout(100);

    const table = page.locator('sq-table');
    await expect(table).toBeVisible();
  });
});

// sq-th tests
test.describe('sq-th', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/table/sq-table.js';
        import '/src/components/table/sq-th.js';
        import '/src/components/table/sq-td.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders inside th element', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <table sq-table>
          <thead>
            <tr><th><sq-th>Name</sq-th></th></tr>
          </thead>
        </table>
      `;
    });
    await page.waitForTimeout(100);

    const th = page.locator('sq-th');
    await expect(th).toBeVisible();
    await expect(th).toContainText('Name');
  });

  test('supports align center', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <table sq-table>
          <thead>
            <tr><th><sq-th align="center">Centered</sq-th></th></tr>
          </thead>
        </table>
      `;
    });
    await page.waitForTimeout(100);

    const th = page.locator('sq-th');
    await expect(th).toBeVisible();
    const align = await th.getAttribute('align');
    expect(align).toBe('center');
  });

  test('supports align right', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <table sq-table>
          <thead>
            <tr><th><sq-th align="right">Right</sq-th></th></tr>
          </thead>
        </table>
      `;
    });
    await page.waitForTimeout(100);

    const th = page.locator('sq-th');
    const align = await th.getAttribute('align');
    expect(align).toBe('right');
  });

  test('supports sort asc indicator', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <table sq-table>
          <thead>
            <tr><th><sq-th sort="asc">Name</sq-th></th></tr>
          </thead>
        </table>
      `;
    });
    await page.waitForTimeout(100);

    const th = page.locator('sq-th');
    const sort = await th.getAttribute('sort');
    expect(sort).toBe('asc');
  });

  test('supports sort desc indicator', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <table sq-table>
          <thead>
            <tr><th><sq-th sort="desc">Name</sq-th></th></tr>
          </thead>
        </table>
      `;
    });
    await page.waitForTimeout(100);

    const th = page.locator('sq-th');
    const sort = await th.getAttribute('sort');
    expect(sort).toBe('desc');
  });

  test('supports vertical alignment', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <table sq-table>
          <thead>
            <tr><th><sq-th align-vertical="top">Top</sq-th></th></tr>
          </thead>
        </table>
      `;
    });
    await page.waitForTimeout(100);

    const th = page.locator('sq-th');
    const alignVertical = await th.getAttribute('align-vertical');
    expect(alignVertical).toBe('top');
  });

  test('sets programmatic align property', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <table sq-table>
          <thead>
            <tr><th><sq-th>Name</sq-th></th></tr>
          </thead>
        </table>
      `;
    });
    await page.waitForTimeout(100);

    const th = page.locator('sq-th');
    await th.evaluate(el => { el.align = 'right'; });
    const align = await th.getAttribute('align');
    expect(align).toBe('right');
  });

  test('sets programmatic sort property', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <table sq-table>
          <thead>
            <tr><th><sq-th>Name</sq-th></th></tr>
          </thead>
        </table>
      `;
    });
    await page.waitForTimeout(100);

    const th = page.locator('sq-th');
    await th.evaluate(el => { el.sort = 'desc'; });
    const sort = await th.getAttribute('sort');
    expect(sort).toBe('desc');
  });
});

// sq-td tests
test.describe('sq-td', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/table/sq-table.js';
        import '/src/components/table/sq-th.js';
        import '/src/components/table/sq-td.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders inside td element', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <table sq-table>
          <tbody>
            <tr><td><sq-td>Alice</sq-td></td></tr>
          </tbody>
        </table>
      `;
    });
    await page.waitForTimeout(100);

    const td = page.locator('sq-td');
    await expect(td).toBeVisible();
    await expect(td).toContainText('Alice');
  });

  test('supports align center', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <table sq-table>
          <tbody>
            <tr><td><sq-td align="center">Centered</sq-td></td></tr>
          </tbody>
        </table>
      `;
    });
    await page.waitForTimeout(100);

    const td = page.locator('sq-td');
    const align = await td.getAttribute('align');
    expect(align).toBe('center');
  });

  test('supports align right', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <table sq-table>
          <tbody>
            <tr><td><sq-td align="right">$1,234</sq-td></td></tr>
          </tbody>
        </table>
      `;
    });
    await page.waitForTimeout(100);

    const td = page.locator('sq-td');
    const align = await td.getAttribute('align');
    expect(align).toBe('right');
  });

  test('supports truncate attribute', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <table sq-table>
          <tbody>
            <tr><td><sq-td truncate>Very long text that should be truncated</sq-td></td></tr>
          </tbody>
        </table>
      `;
    });
    await page.waitForTimeout(100);

    const td = page.locator('sq-td');
    const hasTruncate = await td.evaluate(el => el.hasAttribute('truncate'));
    expect(hasTruncate).toBe(true);
  });

  test('supports vertical alignment', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <table sq-table>
          <tbody>
            <tr><td><sq-td align-vertical="top">Top</sq-td></td></tr>
          </tbody>
        </table>
      `;
    });
    await page.waitForTimeout(100);

    const td = page.locator('sq-td');
    const alignVertical = await td.getAttribute('align-vertical');
    expect(alignVertical).toBe('top');
  });

  test('sets programmatic align property', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <table sq-table>
          <tbody>
            <tr><td><sq-td>Data</sq-td></td></tr>
          </tbody>
        </table>
      `;
    });
    await page.waitForTimeout(100);

    const td = page.locator('sq-td');
    await td.evaluate(el => { el.align = 'center'; });
    const align = await td.getAttribute('align');
    expect(align).toBe('center');
  });

  test('sets programmatic truncate property', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <table sq-table>
          <tbody>
            <tr><td><sq-td>Data</sq-td></td></tr>
          </tbody>
        </table>
      `;
    });
    await page.waitForTimeout(100);

    const td = page.locator('sq-td');
    await td.evaluate(el => { el.truncate = true; });
    const hasTruncate = await td.evaluate(el => el.hasAttribute('truncate'));
    expect(hasTruncate).toBe(true);
  });

  test('renders in complete table with sq-th', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <table sq-table>
          <thead>
            <tr>
              <th><sq-th>Name</sq-th></th>
              <th><sq-th align="right">Price</sq-th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><sq-td>Alice</sq-td></td>
              <td><sq-td align="right">$100</sq-td></td>
            </tr>
          </tbody>
        </table>
      `;
    });
    await page.waitForTimeout(100);

    const ths = page.locator('sq-th');
    const tds = page.locator('sq-td');
    await expect(ths).toHaveCount(2);
    await expect(tds).toHaveCount(2);
  });
});
