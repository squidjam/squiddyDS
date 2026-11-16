import { test, expect } from '@playwright/test';

// sq-head-elements tests
test.describe('sq-head-elements', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/head/sq-head-elements.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders documentation card', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-head-elements></sq-head-elements>';
    });
    await page.waitForTimeout(100);

    const headElements = page.locator('sq-head-elements');
    await expect(headElements).toBeVisible();
  });

  test('displays heading', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-head-elements></sq-head-elements>';
    });
    await page.waitForTimeout(100);

    const heading = page.locator('sq-head-elements h2');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Head & Native HTML Elements');
  });

  test('displays description paragraph', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-head-elements></sq-head-elements>';
    });
    await page.waitForTimeout(100);

    const paragraph = page.locator('sq-head-elements p');
    await expect(paragraph).toBeVisible();
  });

  test('displays document structure category', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-head-elements></sq-head-elements>';
    });
    await page.waitForTimeout(100);

    const category = page.locator('sq-head-elements .category h3').nth(0);
    await expect(category).toBeVisible();
    await expect(category).toContainText('Document Structure');
  });

  test('displays metadata category', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-head-elements></sq-head-elements>';
    });
    await page.waitForTimeout(100);

    const category = page.locator('sq-head-elements .category h3').nth(1);
    await expect(category).toBeVisible();
    await expect(category).toContainText('Metadata & Resources');
  });

  test('displays element tags', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-head-elements></sq-head-elements>';
    });
    await page.waitForTimeout(100);

    const elements = page.locator('sq-head-elements .element');
    await expect(elements.first()).toBeVisible();
  });

  test('displays all categories', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-head-elements></sq-head-elements>';
    });
    await page.waitForTimeout(100);

    const categories = page.locator('sq-head-elements .category');
    await expect(categories).toHaveCount(6);
  });

  test('supports default slot', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-head-elements>
          <p>Custom additional content</p>
        </sq-head-elements>
      `;
    });
    await page.waitForTimeout(100);

    const headElements = page.locator('sq-head-elements');
    await expect(headElements).toBeVisible();
  });

  test('renders with CSS custom properties', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-head-elements></sq-head-elements>';
    });
    await page.waitForTimeout(100);

    const docCard = page.locator('sq-head-elements .doc-card');
    await expect(docCard).toBeVisible();
  });
});
