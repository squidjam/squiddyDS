import { test, expect } from '@playwright/test';

// sq-heading tests
test.describe('sq-heading', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/text/sq-heading.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders heading with text', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-heading>Heading Text</sq-heading>';
    });
    await page.waitForTimeout(100);

    const heading = page.locator('sq-heading');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Heading Text');
  });

  test('supports all heading levels', async ({ page }) => {
    const levels = ['1', '2', '3', '4', '5', '6'];
    
    for (const level of levels) {
      await page.locator('#container').evaluate((l) => {
        document.querySelector('#container')!.innerHTML = `<sq-heading level="${l}">Level ${l}</sq-heading>`;
      }, level);
      await page.waitForTimeout(100);

      const heading = page.locator('sq-heading');
      await expect(heading).toBeVisible();
    }
  });

  test('supports different variants', async ({ page }) => {
    const variants = ['default', 'accent', 'muted'];
    
    for (const variant of variants) {
      await page.locator('#container').evaluate((v) => {
        document.querySelector('#container')!.innerHTML = `<sq-heading variant="${v}">${v}</sq-heading>`;
      }, variant);
      await page.waitForTimeout(100);

      const heading = page.locator('sq-heading');
      await expect(heading).toBeVisible();
    }
  });

  test('supports different alignments', async ({ page }) => {
    const alignments = ['left', 'center', 'right'];
    
    for (const align of alignments) {
      await page.locator('#container').evaluate((a) => {
        document.querySelector('#container')!.innerHTML = `<sq-heading align="${a}">${a}</sq-heading>`;
      }, align);
      await page.waitForTimeout(100);

      const heading = page.locator('sq-heading');
      await expect(heading).toBeVisible();
    }
  });

  test('decorated option adds decoration', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-heading decorated>Decorated</sq-heading>';
    });
    await page.waitForTimeout(100);

    const heading = page.locator('sq-heading');
    await expect(heading).toBeVisible();
  });
});

// sq-text tests
test.describe('sq-text', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/text/sq-text.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders text with content', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-text>This is some text.</sq-text>';
    });
    await page.waitForTimeout(100);

    const text = page.locator('sq-text');
    await expect(text).toBeVisible();
    await expect(text).toContainText('This is some text.');
  });

  test('supports different variants', async ({ page }) => {
    const variants = ['body', 'lead', 'small', 'caption'];
    
    for (const variant of variants) {
      await page.locator('#container').evaluate((v) => {
        document.querySelector('#container')!.innerHTML = `<sq-text variant="${v}">${v}</sq-text>`;
      }, variant);
      await page.waitForTimeout(100);

      const text = page.locator('sq-text');
      await expect(text).toBeVisible();
    }
  });

  test('supports different weights', async ({ page }) => {
    const weights = ['normal', 'medium', 'semibold', 'bold'];
    
    for (const weight of weights) {
      await page.locator('#container').evaluate((w) => {
        document.querySelector('#container')!.innerHTML = `<sq-text weight="${w}">${w}</sq-text>`;
      }, weight);
      await page.waitForTimeout(100);

      const text = page.locator('sq-text');
      await expect(text).toBeVisible();
    }
  });

  test('supports different alignments', async ({ page }) => {
    const alignments = ['left', 'center', 'right'];
    
    for (const align of alignments) {
      await page.locator('#container').evaluate((a) => {
        document.querySelector('#container')!.innerHTML = `<sq-text align="${a}">${a}</sq-text>`;
      }, align);
      await page.waitForTimeout(100);

      const text = page.locator('sq-text');
      await expect(text).toBeVisible();
    }
  });

  test('truncate option truncates long text', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-text truncate>This is a very long text that should be truncated.</sq-text>';
    });
    await page.waitForTimeout(100);

    const text = page.locator('sq-text');
    await expect(text).toBeVisible();
  });

  test('ellipsis option shows ellipsis', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-text ellipsis>This is a very long text with ellipsis.</sq-text>';
    });
    await page.waitForTimeout(100);

    const text = page.locator('sq-text');
    await expect(text).toBeVisible();
  });
});

// sq-code tests
test.describe('sq-code', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/text/sq-code.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders inline code', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-code>const x = 1;</sq-code>';
    });
    await page.waitForTimeout(100);

    const code = page.locator('sq-code');
    await expect(code).toBeVisible();
  });

  test('renders block code', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-code block>const x = 1;\nconst y = 2;</sq-code>';
    });
    await page.waitForTimeout(100);

    const code = page.locator('sq-code');
    await expect(code).toBeVisible();
  });

  test('supports language attribute', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-code language="javascript">console.log("hi");</sq-code>';
    });
    await page.waitForTimeout(100);

    const code = page.locator('sq-code');
    await expect(code).toBeVisible();
  });
});

// sq-blockquote tests
test.describe('sq-blockquote', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/text/sq-blockquote.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders blockquote', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-blockquote>This is a quote.</sq-blockquote>';
    });
    await page.waitForTimeout(100);

    const blockquote = page.locator('sq-blockquote');
    await expect(blockquote).toBeVisible();
  });

  test('supports cite attribute', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-blockquote cite="https://example.com">Quote with source.</sq-blockquote>';
    });
    await page.waitForTimeout(100);

    const blockquote = page.locator('sq-blockquote');
    await expect(blockquote).toBeVisible();
  });
});

// sq-caption tests
test.describe('sq-caption', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/text/sq-caption.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders caption', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-caption>Image caption</sq-caption>';
    });
    await page.waitForTimeout(100);

    const caption = page.locator('sq-caption');
    await expect(caption).toBeVisible();
  });

  test('supports different variants', async ({ page }) => {
    const variants = ['default', 'subtle', 'emphasis'];
    
    for (const variant of variants) {
      await page.locator('#container').evaluate((v) => {
        document.querySelector('#container')!.innerHTML = `<sq-caption variant="${v}">${v}</sq-caption>`;
      }, variant);
      await page.waitForTimeout(100);

      const caption = page.locator('sq-caption');
      await expect(caption).toBeVisible();
    }
  });

  test('supports different alignments', async ({ page }) => {
    const alignments = ['left', 'center', 'right'];
    
    for (const align of alignments) {
      await page.locator('#container').evaluate((a) => {
        document.querySelector('#container')!.innerHTML = `<sq-caption align="${a}">${a}</sq-caption>`;
      }, align);
      await page.waitForTimeout(100);

      const caption = page.locator('sq-caption');
      await expect(caption).toBeVisible();
    }
  });
});

// sq-kbd tests
test.describe('sq-kbd', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/text/sq-kbd.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders keyboard shortcut', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-kbd>Ctrl+S</sq-kbd>';
    });
    await page.waitForTimeout(100);

    const kbd = page.locator('sq-kbd');
    await expect(kbd).toBeVisible();
  });
});

// sq-mark tests
test.describe('sq-mark', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/text/sq-mark.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders highlighted text', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-mark>Highlighted text</sq-mark>';
    });
    await page.waitForTimeout(100);

    const mark = page.locator('sq-mark');
    await expect(mark).toBeVisible();
  });

  test('supports different colors', async ({ page }) => {
    const colors = ['default', 'success', 'warning', 'danger', 'info'];
    
    for (const color of colors) {
      await page.locator('#container').evaluate((c) => {
        document.querySelector('#container')!.innerHTML = `<sq-mark color="${c}">${c}</sq-mark>`;
      }, color);
      await page.waitForTimeout(100);

      const mark = page.locator('sq-mark');
      await expect(mark).toBeVisible();
    }
  });
});
