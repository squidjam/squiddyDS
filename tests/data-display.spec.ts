import { test, expect } from '@playwright/test';

// sq-tag tests
test.describe('sq-tag', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/data-display/sq-tag.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders tag with label', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-tag label="Label"></sq-tag>';
    });
    await page.waitForTimeout(100);

    const tag = page.locator('sq-tag');
    await expect(tag).toBeVisible();
    await expect(tag).toContainText('Label');
  });

  test('supports all variants', async ({ page }) => {
    const variants = ['default', 'primary', 'success', 'warning', 'error', 'info'];
    
    for (const variant of variants) {
      await page.locator('#container').evaluate((v) => {
        document.querySelector('#container')!.innerHTML = `<sq-tag variant="${v}" label="${v}"></sq-tag>`;
      }, variant);
      await page.waitForTimeout(100);

      const tag = page.locator('sq-tag');
      await expect(tag).toBeVisible();
      await expect(tag).toHaveAttribute('variant', variant);
    }
  });

  test('supports all sizes', async ({ page }) => {
    const sizes = ['sm', 'md', 'lg'];
    
    for (const size of sizes) {
      await page.locator('#container').evaluate((s) => {
        document.querySelector('#container')!.innerHTML = `<sq-tag size="${s}" label="${s}"></sq-tag>`;
      }, size);
      await page.waitForTimeout(100);

      const tag = page.locator('sq-tag');
      await expect(tag).toBeVisible();
      await expect(tag).toHaveAttribute('size', size);
    }
  });

  test('removable tag shows close button', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-tag removable label="Removable"></sq-tag>';
    });
    await page.waitForTimeout(100);

    const tag = page.locator('sq-tag');
    await expect(tag).toBeVisible();
    await expect(tag).toHaveAttribute('removable', '');
  });

  test('clickable tag fires click event', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-tag clickable label="Click me"></sq-tag>';
    });
    await page.waitForTimeout(100);

    const tag = page.locator('sq-tag');
    await expect(tag).toBeVisible();
    await expect(tag).toHaveAttribute('clickable', '');
  });

  test('disabled tag is not interactive', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-tag disabled label="Disabled"></sq-tag>';
    });
    await page.waitForTimeout(100);

    const tag = page.locator('sq-tag');
    await expect(tag).toBeVisible();
    await expect(tag).toHaveAttribute('disabled', '');
  });
});

// sq-badge tests
test.describe('sq-badge', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/data-display/sq-badge.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders badge with content', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-badge>Badge</sq-badge>';
    });
    await page.waitForTimeout(100);

    const badge = page.locator('sq-badge');
    await expect(badge).toBeVisible();
  });

  test('supports all variants', async ({ page }) => {
    const variants = ['default', 'primary', 'success', 'warning', 'danger', 'info'];
    
    for (const variant of variants) {
      await page.locator('#container').evaluate((v) => {
        document.querySelector('#container')!.innerHTML = `<sq-badge variant="${v}">${v}</sq-badge>`;
      }, variant);
      await page.waitForTimeout(100);

      const badge = page.locator('sq-badge');
      await expect(badge).toBeVisible();
    }
  });

  test('supports all sizes', async ({ page }) => {
    const sizes = ['sm', 'md', 'lg'];
    
    for (const size of sizes) {
      await page.locator('#container').evaluate((s) => {
        document.querySelector('#container')!.innerHTML = `<sq-badge size="${s}">${s}</sq-badge>`;
      }, size);
      await page.waitForTimeout(100);

      const badge = page.locator('sq-badge');
      await expect(badge).toBeVisible();
    }
  });

  test('dot variant shows dot', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-badge dot></sq-badge>';
    });
    await page.waitForTimeout(100);

    const badge = page.locator('sq-badge');
    await expect(badge).toBeVisible();
  });

  test('outlined variant shows outline', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-badge outlined>Outlined</sq-badge>';
    });
    await page.waitForTimeout(100);

    const badge = page.locator('sq-badge');
    await expect(badge).toBeVisible();
  });

  test('count property displays number', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-badge count="5"></sq-badge>';
    });
    await page.waitForTimeout(100);

    const badge = page.locator('sq-badge');
    await expect(badge).toBeVisible();
  });
});

// sq-avatar tests
test.describe('sq-avatar', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/data-display/sq-avatar.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders avatar with initials', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-avatar initials="JD"></sq-avatar>';
    });
    await page.waitForTimeout(100);

    const avatar = page.locator('sq-avatar');
    await expect(avatar).toBeVisible();
    await expect(avatar).toContainText('JD');
  });

  test('supports different sizes', async ({ page }) => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
    
    for (const size of sizes) {
      await page.locator('#container').evaluate((s) => {
        document.querySelector('#container')!.innerHTML = `<sq-avatar size="${s}" initials="${s}"></sq-avatar>`;
      }, size);
      await page.waitForTimeout(100);

      const avatar = page.locator('sq-avatar');
      await expect(avatar).toBeVisible();
    }
  });

  test('supports different shapes', async ({ page }) => {
    const shapes = ['circle', 'rounded', 'square'];
    
    for (const shape of shapes) {
      await page.locator('#container').evaluate((s) => {
        document.querySelector('#container')!.innerHTML = `<sq-avatar shape="${s}" initials="${s}"></sq-avatar>`;
      }, shape);
      await page.waitForTimeout(100);

      const avatar = page.locator('sq-avatar');
      await expect(avatar).toBeVisible();
    }
  });

  test('supports different variants', async ({ page }) => {
    const variants = ['default', 'success', 'warning', 'danger', 'info'];
    
    for (const variant of variants) {
      await page.locator('#container').evaluate((v) => {
        document.querySelector('#container')!.innerHTML = `<sq-avatar variant="${v}" initials="${v}"></sq-avatar>`;
      }, variant);
      await page.waitForTimeout(100);

      const avatar = page.locator('sq-avatar');
      await expect(avatar).toBeVisible();
    }
  });
});

// sq-timeline tests
test.describe('sq-timeline', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/data-display/sq-timeline.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders timeline', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-timeline></sq-timeline>';
    });
    await page.waitForTimeout(100);

    const timeline = page.locator('sq-timeline');
    await expect(timeline).toBeVisible();
  });

  test('supports vertical orientation', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-timeline orientation="vertical"></sq-timeline>';
    });
    await page.waitForTimeout(100);

    const timeline = page.locator('sq-timeline');
    await expect(timeline).toHaveAttribute('orientation', 'vertical');
  });

  test('supports horizontal orientation', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-timeline orientation="horizontal"></sq-timeline>';
    });
    await page.waitForTimeout(100);

    const timeline = page.locator('sq-timeline');
    await expect(timeline).toHaveAttribute('orientation', 'horizontal');
  });
});

// sq-tree tests
test.describe('sq-tree', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/data-display/sq-tree.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders tree component', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-tree></sq-tree>';
    });
    await page.waitForTimeout(100);

    const tree = page.locator('sq-tree');
    await expect(tree).toBeVisible();
  });

  test('supports selection modes', async ({ page }) => {
    const modes = ['none', 'single', 'multiple'];
    
    for (const mode of modes) {
      await page.locator('#container').evaluate((m) => {
        document.querySelector('#container')!.innerHTML = `<sq-tree selection-mode="${m}"></sq-tree>`;
      }, mode);
      await page.waitForTimeout(100);

      const tree = page.locator('sq-tree');
      await expect(tree).toBeVisible();
    }
  });

  test('shows checkboxes when enabled', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-tree show-checkboxes></sq-tree>';
    });
    await page.waitForTimeout(100);

    const tree = page.locator('sq-tree');
    await expect(tree).toBeVisible();
    await expect(tree).toHaveAttribute('show-checkboxes', '');
  });

  test('shows search when enabled', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-tree show-search></sq-tree>';
    });
    await page.waitForTimeout(100);

    const tree = page.locator('sq-tree');
    await expect(tree).toBeVisible();
    await expect(tree).toHaveAttribute('show-search', '');
  });

  test('expand-all expands all nodes', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-tree expand-all></sq-tree>';
    });
    await page.waitForTimeout(100);

    const tree = page.locator('sq-tree');
    await expect(tree).toBeVisible();
    await expect(tree).toHaveAttribute('expand-all', '');
  });
});

// sq-definition-list tests
test.describe('sq-definition-list', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/data-display/sq-definition-list.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders definition list', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-definition-list><dt>Term</dt><dd>Definition</dd></sq-definition-list>';
    });
    await page.waitForTimeout(100);

    const dl = page.locator('sq-definition-list');
    await expect(dl).toBeVisible();
  });

  test('supports horizontal layout', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-definition-list horizontal><dt>Term</dt><dd>Definition</dd></sq-definition-list>';
    });
    await page.waitForTimeout(100);

    const dl = page.locator('sq-definition-list');
    await expect(dl).toBeVisible();
  });
});

// sq-timetree tests
test.describe('sq-timetree', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/data-display/sq-timetree.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders with nodes', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-timetree></sq-timetree>';
    });
    await page.waitForTimeout(100);

    const timetree = page.locator('sq-timetree');
    await expect(timetree).toBeVisible();
  });

  test('renders with nodes array', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-timetree></sq-timetree>';
    });
    await page.waitForTimeout(100);

    const timetree = page.locator('sq-timetree');
    await timetree.evaluate(component => {
      component.nodes = [
        { id: '1', label: 'Commit 1', date: '2024-01-01' },
        { id: '2', label: 'Commit 2', date: '2024-01-02' }
      ];
    });
    await page.waitForTimeout(100);

    await expect(timetree).toBeVisible();
  });

  test('renders with branches', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-timetree></sq-timetree>';
    });
    await page.waitForTimeout(100);

    const timetree = page.locator('sq-timetree');
    await timetree.evaluate(component => {
      component.branches = [
        { name: 'main', color: '#3b82f6' },
        { name: 'feature', color: '#10b981' }
      ];
      component.nodes = [
        { id: '1', label: 'Main Commit', date: '2024-01-01', branch: 'main' },
        { id: '2', label: 'Feature Commit', date: '2024-01-02', branch: 'feature' }
      ];
    });
    await page.waitForTimeout(100);

    await expect(timetree).toBeVisible();
  });

  test('shows branch legend', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-timetree></sq-timetree>';
    });
    await page.waitForTimeout(100);

    const timetree = page.locator('sq-timetree');
    await timetree.evaluate(component => {
      component.branches = [
        { name: 'main', color: '#3b82f6' }
      ];
      component.nodes = [
        { id: '1', label: 'Commit', date: '2024-01-01', branch: 'main' }
      ];
    });
    await page.waitForTimeout(100);

    const legend = page.locator('.legend');
    await expect(legend).toBeVisible();
  });

  test('supports node variants', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-timetree></sq-timetree>';
    });
    await page.waitForTimeout(100);

    const timetree = page.locator('sq-timetree');
    await timetree.evaluate(component => {
      component.nodes = [
        { id: '1', label: 'Success', date: '2024-01-01', variant: 'success' },
        { id: '2', label: 'Error', date: '2024-01-02', variant: 'error' },
        { id: '3', label: 'Warning', date: '2024-01-03', variant: 'warning' }
      ];
    });
    await page.waitForTimeout(100);

    await expect(timetree).toBeVisible();
  });

  test('renders node with description', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-timetree></sq-timetree>';
    });
    await page.waitForTimeout(100);

    const timetree = page.locator('sq-timetree');
    await timetree.evaluate(component => {
      component.nodes = [
        { id: '1', label: 'Commit', date: '2024-01-01', description: 'Initial commit' }
      ];
    });
    await page.waitForTimeout(100);

    await expect(timetree).toBeVisible();
  });

  test('supports dense mode', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-timetree dense></sq-timetree>';
    });
    await page.waitForTimeout(100);

    const timetree = page.locator('sq-timetree');
    await expect(timetree).toBeVisible();
  });

  test('renders header slot', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-timetree>
          <div slot="header">Timeline Header</div>
        </sq-timetree>
      `;
    });
    await page.waitForTimeout(100);

    const timetree = page.locator('sq-timetree');
    await expect(timetree).toBeVisible();
  });

  test('renders SVG connectors between nodes', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-timetree></sq-timetree>';
    });
    await page.waitForTimeout(100);

    const timetree = page.locator('sq-timetree');
    await timetree.evaluate(component => {
      component.nodes = [
        { id: '1', label: 'First', date: '2024-01-01' },
        { id: '2', label: 'Second', date: '2024-01-02', parentId: '1' }
      ];
    });
    await page.waitForTimeout(200);

    await expect(timetree).toBeVisible();
  });

  test('supports merge target nodes', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-timetree></sq-timetree>';
    });
    await page.waitForTimeout(100);

    const timetree = page.locator('sq-timetree');
    await timetree.evaluate(component => {
      component.nodes = [
        { id: '1', label: 'Main', date: '2024-01-01', branch: 'main' },
        { id: '2', label: 'Feature', date: '2024-01-02', branch: 'feature' },
        { id: '3', label: 'Merge', date: '2024-01-03', branch: 'main', mergeTargetId: '2' }
      ];
      component.branches = [
        { name: 'main', color: '#3b82f6' },
        { name: 'feature', color: '#10b981' }
      ];
    });
    await page.waitForTimeout(100);

    await expect(timetree).toBeVisible();
  });
});
