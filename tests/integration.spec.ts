import { test, expect } from '@playwright/test';

test.describe('Integration Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/interactive/sq-button.js';
        import '/src/components/interactive/sq-button-group.js';
        import '/src/components/interactive/sq-dialog.js';
        import '/src/components/interactive/sq-spinner.js';
        import '/src/components/interactive/sq-progress.js';
        import '/src/components/form/sq-input.js';
        import '/src/components/form/sq-textarea.js';
        import '/src/components/form/sq-select.js';
        import '/src/components/form/sq-checkbox.js';
        import '/src/components/form/sq-radio.js';
        import '/src/components/form/sq-radio-group.js';
        import '/src/components/form/sq-fieldset.js';
        import '/src/components/form/sq-form.js';
        import '/src/components/form/sq-label.js';
        import '/src/components/navigation/sq-tabs.js';
        import '/src/components/navigation/sq-menu.js';
        import '/src/components/navigation/sq-menu-item.js';
        import '/src/components/navigation/sq-breadcrumb.js';
        import '/src/components/navigation/sq-pagination.js';
        import '/src/components/layout/sq-card.js';
        import '/src/components/layout/sq-grid.js';
        import '/src/components/layout/sq-flex.js';
        import '/src/components/layout/sq-container.js';
        import '/src/components/layout/sq-divider.js';
        import '/src/components/data-display/sq-tag.js';
        import '/src/components/data-display/sq-badge.js';
        import '/src/components/data-display/sq-avatar.js';
        import '/src/components/feedback/sq-alert.js';
        import '/src/components/text/sq-heading.js';
        import '/src/components/text/sq-text.js';
        import '/src/components/table/sq-table.js';
        import '/src/components/table/sq-th.js';
        import '/src/components/table/sq-td.js';
        import '/src/components/overlay/sq-tooltip.js';
        import '/src/components/semantic/sq-header.js';
        import '/src/components/semantic/sq-footer.js';
        import '/src/components/semantic/sq-nav.js';
        import '/src/components/semantic/sq-main.js';
        import '/src/components/semantic/sq-section.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(1000);
  });

  test('complete form with validation and submission', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-form>
          <sq-fieldset legend="User Registration">
            <sq-input label="Full Name" name="name" required placeholder="Enter your name"></sq-input>
            <sq-input label="Email" name="email" type="email" required placeholder="Enter your email"></sq-input>
            <sq-select label="Role" name="role">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </sq-select>
            <sq-textarea label="Bio" name="bio" placeholder="Tell us about yourself"></sq-textarea>
            <sq-checkbox name="terms" label="I agree to the terms"></sq-checkbox>
            <sq-button type="submit">Register</sq-button>
          </sq-fieldset>
        </sq-form>
      `;
    });
    await page.waitForTimeout(200);

    const form = page.locator('sq-form');
    await expect(form).toBeVisible();

    const inputs = page.locator('sq-input');
    await expect(inputs).toHaveCount(2);

    const select = page.locator('sq-select');
    await expect(select).toBeVisible();

    const textarea = page.locator('sq-textarea');
    await expect(textarea).toBeVisible();

    const checkbox = page.locator('sq-checkbox');
    await expect(checkbox).toBeVisible();

    const button = page.locator('sq-button');
    await expect(button).toBeVisible();
    await expect(button).toContainText('Register');
  });

  test('dashboard layout with cards and grid', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-container>
          <sq-heading level="1">Dashboard</sq-heading>
          <sq-grid columns="3" gap="md">
            <sq-card>
              <sq-heading level="3">Total Users</sq-heading>
              <sq-text variant="large">1,234</sq-text>
            </sq-card>
            <sq-card>
              <sq-heading level="3">Revenue</sq-heading>
              <sq-text variant="large">$5,678</sq-text>
            </sq-card>
            <sq-card>
              <sq-heading level="3">Orders</sq-heading>
              <sq-text variant="large">89</sq-text>
            </sq-card>
          </sq-grid>
        </sq-container>
      `;
    });
    await page.waitForTimeout(200);

    const container = page.locator('sq-container');
    await expect(container).toBeVisible();

    const grid = page.locator('sq-grid');
    await expect(grid).toBeVisible();

    const cards = page.locator('sq-card');
    await expect(cards).toHaveCount(3);

    const headings = page.locator('sq-heading');
    await expect(headings).toHaveCount(4);
  });

  test('data table with pagination', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-section>
          <sq-heading level="2">User Management</sq-heading>
          <table sq-table>
            <thead>
              <tr>
                <th><sq-th>Name</sq-th></th>
                <th><sq-th>Email</sq-th></th>
                <th><sq-th align="right">Status</sq-th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><sq-td>Alice Johnson</sq-td></td>
                <td><sq-td>alice@example.com</sq-td></td>
                <td><sq-td align="right"><sq-tag variant="success">Active</sq-tag></sq-td></td>
              </tr>
              <tr>
                <td><sq-td>Bob Smith</sq-td></td>
                <td><sq-td>bob@example.com</sq-td></td>
                <td><sq-td align="right"><sq-tag variant="warning">Pending</sq-tag></sq-td></td>
              </tr>
            </tbody>
          </table>
          <sq-pagination page="1" total-pages="10"></sq-pagination>
        </sq-section>
      `;
    });
    await page.waitForTimeout(200);

    const table = page.locator('sq-table');
    await expect(table).toBeVisible();

    const ths = page.locator('sq-th');
    await expect(ths).toHaveCount(3);

    const tds = page.locator('sq-td');
    await expect(tds).toHaveCount(6);

    const tags = page.locator('sq-tag');
    await expect(tags).toHaveCount(2);

    const pagination = page.locator('sq-pagination');
    await expect(pagination).toBeVisible();
  });

  test('navigation with breadcrumb and menu', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-header>
          <sq-nav>
            <sq-breadcrumb>
              <sq-menu-item>Home</sq-menu-item>
              <sq-menu-item>Products</sq-menu-item>
              <sq-menu-item>Details</sq-menu-item>
            </sq-breadcrumb>
          </sq-nav>
        </sq-header>
        <sq-main>
          <sq-section>
            <sq-heading level="1">Product Details</sq-heading>
            <sq-text>This is the product details page.</sq-text>
          </sq-section>
        </sq-main>
        <sq-footer>
          <sq-text>© 2024 Squiddy</sq-text>
        </sq-footer>
      `;
    });
    await page.waitForTimeout(200);

    const header = page.locator('sq-header');
    await expect(header).toBeVisible();

    const nav = page.locator('sq-nav');
    await expect(nav).toBeVisible();

    const breadcrumb = page.locator('sq-breadcrumb');
    await expect(breadcrumb).toBeVisible();

    const main = page.locator('sq-main');
    await expect(main).toBeVisible();

    const footer = page.locator('sq-footer');
    await expect(footer).toBeVisible();
  });

  test('tabs with card content', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-tabs>
          <sq-tab-panel name="overview" label="Overview">
            <sq-card>
              <sq-heading level="3">Overview</sq-heading>
              <sq-text>Product overview content.</sq-text>
            </sq-card>
          </sq-tab-panel>
          <sq-tab-panel name="specs" label="Specifications">
            <sq-card>
              <sq-heading level="3">Specifications</sq-heading>
              <sq-text>Technical specifications.</sq-text>
            </sq-card>
          </sq-tab-panel>
        </sq-tabs>
      `;
    });
    await page.waitForTimeout(200);

    const tabs = page.locator('sq-tabs');
    await expect(tabs).toBeVisible();

    const cards = page.locator('sq-card');
    await expect(cards).toHaveCount(2);
  });

  test('alert with button interaction', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-alert variant="info" dismissible>
          <sq-heading level="4">Notification</sq-heading>
          <sq-text>Your session will expire soon.</sq-text>
          <sq-button variant="subtle">Extend Session</sq-button>
        </sq-alert>
      `;
    });
    await page.waitForTimeout(200);

    const alert = page.locator('sq-alert');
    await expect(alert).toBeVisible();

    const heading = alert.locator('sq-heading');
    await expect(heading).toBeVisible();

    const button = alert.locator('sq-button');
    await expect(button).toBeVisible();
  });

  test('flex layout with badges and avatars', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-flex justify="space-between" align="center">
          <sq-flex gap="sm" align="center">
            <sq-avatar name="John Doe"></sq-avatar>
            <sq-text>John Doe</sq-text>
            <sq-badge variant="primary">Admin</sq-badge>
          </sq-flex>
          <sq-button-group>
            <sq-button variant="subtle">Edit</sq-button>
            <sq-button variant="danger">Delete</sq-button>
          </sq-button-group>
        </sq-flex>
        <sq-divider></sq-divider>
        <sq-flex gap="sm" align="center">
          <sq-avatar name="Jane Smith"></sq-avatar>
          <sq-text>Jane Smith</sq-text>
          <sq-badge variant="secondary">User</sq-badge>
        </sq-flex>
      `;
    });
    await page.waitForTimeout(200);

    const avatars = page.locator('sq-avatar');
    await expect(avatars).toHaveCount(2);

    const badges = page.locator('sq-badge');
    await expect(badges).toHaveCount(2);

    const divider = page.locator('sq-divider');
    await expect(divider).toBeVisible();

    const buttonGroup = page.locator('sq-button-group');
    await expect(buttonGroup).toBeVisible();
  });

  test('progress and spinner loading states', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-card>
          <sq-heading level="3">Upload Progress</sq-heading>
          <sq-progress value="65" max="100"></sq-progress>
          <sq-flex gap="sm" align="center">
            <sq-spinner size="sm"></sq-spinner>
            <sq-text>Uploading file...</sq-text>
          </sq-flex>
        </sq-card>
      `;
    });
    await page.waitForTimeout(200);

    const progress = page.locator('sq-progress');
    await expect(progress).toBeVisible();

    const spinner = page.locator('sq-spinner');
    await expect(spinner).toBeVisible();
  });

  test('dialog with form content', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-button id="open-dialog">Open Dialog</sq-button>
        <sq-dialog id="test-dialog" open>
          <sq-heading level="3">Confirm Action</sq-heading>
          <sq-text>Are you sure you want to proceed?</sq-text>
          <sq-flex gap="sm" justify="end">
            <sq-button variant="subtle">Cancel</sq-button>
            <sq-button variant="primary">Confirm</sq-button>
          </sq-flex>
        </sq-dialog>
      `;
    });
    await page.waitForTimeout(200);

    const dialog = page.locator('sq-dialog');
    await expect(dialog).toBeVisible();

    const buttons = dialog.locator('sq-button');
    await expect(buttons).toHaveCount(2);
  });

  test('semantic page structure', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-header>
          <sq-flex justify="space-between" align="center">
            <sq-heading level="1">My App</sq-heading>
            <sq-nav>
              <sq-button variant="subtle">Home</sq-button>
              <sq-button variant="subtle">About</sq-button>
              <sq-button variant="subtle">Contact</sq-button>
            </sq-nav>
          </sq-flex>
        </sq-header>
        <sq-main>
          <sq-section>
            <sq-heading level="2">Welcome</sq-heading>
            <sq-text>This is the main content area.</sq-text>
            <sq-grid columns="2" gap="lg">
              <sq-card>
                <sq-heading level="3">Feature 1</sq-heading>
                <sq-text>Description of feature 1.</sq-text>
              </sq-card>
              <sq-card>
                <sq-heading level="3">Feature 2</sq-heading>
                <sq-text>Description of feature 2.</sq-text>
              </sq-card>
            </sq-grid>
          </sq-section>
        </sq-main>
        <sq-footer>
          <sq-divider></sq-divider>
          <sq-flex justify="center">
            <sq-text>© 2024 My App. All rights reserved.</sq-text>
          </sq-flex>
        </sq-footer>
      `;
    });
    await page.waitForTimeout(300);

    const header = page.locator('sq-header');
    await expect(header).toBeVisible();

    const main = page.locator('sq-main');
    await expect(main).toBeVisible();

    const footer = page.locator('sq-footer');
    await expect(footer).toBeVisible();

    const section = page.locator('sq-section');
    await expect(section).toBeVisible();

    const cards = page.locator('sq-card');
    await expect(cards).toHaveCount(2);
  });
});
