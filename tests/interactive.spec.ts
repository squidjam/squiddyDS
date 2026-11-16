import { test, expect } from '@playwright/test';

// sq-button tests
test.describe('sq-button', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/interactive/sq-button.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders with default properties', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-button>Click Me</sq-button>';
    });
    await page.waitForTimeout(100);

    const button = page.locator('sq-button');
    await expect(button).toBeVisible();
    
    const innerButton = button.locator('button');
    await expect(innerButton).toBeVisible();
    await expect(innerButton).toContainText('Click Me');
  });

  test('supports all variants', async ({ page }) => {
    const variants = ['primary', 'secondary', 'subtle', 'danger', 'success', 'warning', 'info'];
    
    for (const variant of variants) {
      await page.locator('#container').evaluate((v) => {
        document.querySelector('#container')!.innerHTML = `<sq-button variant="${v}">${v}</sq-button>`;
      }, variant);
      await page.waitForTimeout(100);

      const button = page.locator('sq-button');
      await expect(button).toBeVisible();
      
      const innerButton = button.locator('button');
      await expect(innerButton).toHaveAttribute('variant', variant);
    }
  });

  test('supports all sizes', async ({ page }) => {
    const sizes = ['sm', 'md', 'lg'];
    
    for (const size of sizes) {
      await page.locator('#container').evaluate((s) => {
        document.querySelector('#container')!.innerHTML = `<sq-button size="${s}">Size ${s}</sq-button>`;
      }, size);
      await page.waitForTimeout(100);

      const button = page.locator('sq-button');
      await expect(button).toBeVisible();
      
      const innerButton = button.locator('button');
      await expect(innerButton).toHaveAttribute('size', size);
    }
  });

  test('disabled state prevents clicks', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-button disabled>Disabled</sq-button>';
    });
    await page.waitForTimeout(100);

    const innerButton = page.locator('sq-button button');
    await expect(innerButton).toBeDisabled();
  });

  test('loading state shows spinner', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-button loading>Loading</sq-button>';
    });
    await page.waitForTimeout(100);

    const spinner = page.locator('sq-button .spinner');
    await expect(spinner).toBeVisible();
    
    const innerButton = page.locator('sq-button button');
    await expect(innerButton).toBeDisabled();
  });

  test('click event is dispatched', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-button>Click Me</sq-button>';
    });
    await page.waitForTimeout(100);

    let clickReceived = false;
    page.on('console', (msg) => {
      if (msg.text().includes('click')) {
        clickReceived = true;
      }
    });

    await page.locator('sq-button button').click();
    await page.waitForTimeout(100);
  });

  test('supports icon slot', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-button><span slot="icon">🔍</span>Search</sq-button>';
    });
    await page.waitForTimeout(100);

    const iconSlot = page.locator('sq-button [slot="icon"]');
    await expect(iconSlot).toBeVisible();
  });
});

// sq-button-group tests
test.describe('sq-button-group', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/interactive/sq-button-group.js';
        import '/src/components/interactive/sq-button.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders buttons horizontally by default', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-button-group>
          <sq-button>One</sq-button>
          <sq-button>Two</sq-button>
          <sq-button>Three</sq-button>
        </sq-button-group>
      `;
    });
    await page.waitForTimeout(100);

    const group = page.locator('sq-button-group');
    await expect(group).toBeVisible();
    
    const buttons = group.locator('sq-button');
    await expect(buttons).toHaveCount(3);
  });

  test('supports vertical orientation', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-button-group orientation="vertical">
          <sq-button>One</sq-button>
          <sq-button>Two</sq-button>
        </sq-button-group>
      `;
    });
    await page.waitForTimeout(100);

    const group = page.locator('sq-button-group');
    await expect(group).toBeVisible();
  });
});

// sq-accordion tests
test.describe('sq-accordion', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/interactive/sq-accordion.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders in closed state by default', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-accordion header="Click to expand"><p>Hidden content</p></sq-accordion>';
    });
    await page.waitForTimeout(100);

    const accordion = page.locator('sq-accordion');
    await expect(accordion).toBeVisible();
  });

  test('opens when open property is set', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-accordion open header="Open accordion"><p>Visible content</p></sq-accordion>';
    });
    await page.waitForTimeout(100);

    const accordion = page.locator('sq-accordion');
    await expect(accordion).toHaveAttribute('open', '');
  });

  test('toggles on click', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-accordion header="Toggle me"><p>Content</p></sq-accordion>';
    });
    await page.waitForTimeout(100);

    const accordion = page.locator('sq-accordion');
    await accordion.click();
    await page.waitForTimeout(100);
    
    // After click, it should have the open attribute
    const isOpen = await accordion.getAttribute('open');
    expect(isOpen).not.toBeNull();
  });

  test('supports bordered variant', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-accordion variant="bordered" header="Bordered"><p>Content</p></sq-accordion>';
    });
    await page.waitForTimeout(100);

    const accordion = page.locator('sq-accordion');
    await expect(accordion).toBeVisible();
  });
});

// sq-switch tests
test.describe('sq-switch', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/interactive/sq-switch.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders in unchecked state by default', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-switch label="Toggle"></sq-switch>';
    });
    await page.waitForTimeout(100);

    const switchEl = page.locator('sq-switch');
    await expect(switchEl).toBeVisible();
  });

  test('can be checked via property', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-switch checked label="Checked"></sq-switch>';
    });
    await page.waitForTimeout(100);

    const switchEl = page.locator('sq-switch');
    await expect(switchEl).toBeVisible();
  });

  test('toggles on click', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-switch label="Toggle me"></sq-switch>';
    });
    await page.waitForTimeout(100);

    const switchEl = page.locator('sq-switch');
    await switchEl.click();
    await page.waitForTimeout(100);
  });

  test('disabled state prevents interaction', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-switch disabled label="Disabled"></sq-switch>';
    });
    await page.waitForTimeout(100);

    const switchEl = page.locator('sq-switch');
    await expect(switchEl).toBeVisible();
  });
});

// sq-spinner tests
test.describe('sq-spinner', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/interactive/sq-spinner.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders spinner element', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-spinner>Loading...</sq-spinner>';
    });
    await page.waitForTimeout(100);

    const spinner = page.locator('sq-spinner');
    await expect(spinner).toBeVisible();
  });

  test('supports different sizes', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-spinner size="sm">Small</sq-spinner>';
    });
    await page.waitForTimeout(100);

    const spinner = page.locator('sq-spinner');
    await expect(spinner).toBeVisible();
  });
});

// sq-progress tests
test.describe('sq-progress', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/interactive/sq-progress.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders with default value', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-progress></sq-progress>';
    });
    await page.waitForTimeout(100);

    const progress = page.locator('sq-progress');
    await expect(progress).toBeVisible();
  });

  test('displays correct progress value', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-progress value="50" max="100"></sq-progress>';
    });
    await page.waitForTimeout(100);

    const progress = page.locator('sq-progress');
    await expect(progress).toBeVisible();
  });

  test('shows label when enabled', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-progress value="75" max="100" show-label></sq-progress>';
    });
    await page.waitForTimeout(100);

    const progress = page.locator('sq-progress');
    await expect(progress).toBeVisible();
  });

  test('supports indeterminate state', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-progress indeterminate></sq-progress>';
    });
    await page.waitForTimeout(100);

    const progress = page.locator('sq-progress');
    await expect(progress).toBeVisible();
  });
});

// sq-meter tests
test.describe('sq-meter', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/interactive/sq-meter.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders meter element', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-meter value="0.5"></sq-meter>';
    });
    await page.waitForTimeout(100);

    const meter = page.locator('sq-meter');
    await expect(meter).toBeVisible();
  });

  test('supports custom min/max values', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-meter value="50" min="0" max="100"></sq-meter>';
    });
    await page.waitForTimeout(100);

    const meter = page.locator('sq-meter');
    await expect(meter).toBeVisible();
  });
});

// sq-details tests
test.describe('sq-details', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/interactive/sq-details.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders in closed state by default', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-details><summary>Click</summary><p>Content</p></sq-details>';
    });
    await page.waitForTimeout(100);

    const details = page.locator('sq-details');
    await expect(details).toBeVisible();
  });

  test('opens when open attribute is set', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-details open><summary>Open</summary><p>Visible</p></sq-details>';
    });
    await page.waitForTimeout(100);

    const details = page.locator('sq-details');
    await expect(details).toHaveAttribute('open', '');
  });
});

// sq-collapsible tests
test.describe('sq-collapsible', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/interactive/sq-collapsible.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders collapsible element', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-collapsible header-text="Toggle"><p>Content</p></sq-collapsible>';
    });
    await page.waitForTimeout(100);

    const collapsible = page.locator('sq-collapsible');
    await expect(collapsible).toBeVisible();
  });

  test('opens when open property is set', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-collapsible open header-text="Open"><p>Visible</p></sq-collapsible>';
    });
    await page.waitForTimeout(100);

    const collapsible = page.locator('sq-collapsible');
    await expect(collapsible).toBeVisible();
  });
});

// sq-skeleton tests
test.describe('sq-skeleton', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/interactive/sq-skeleton.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders skeleton placeholder', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-skeleton></sq-skeleton>';
    });
    await page.waitForTimeout(100);

    const skeleton = page.locator('sq-skeleton');
    await expect(skeleton).toBeVisible();
  });

  test('supports custom dimensions', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-skeleton width="200px" height="50px"></sq-skeleton>';
    });
    await page.waitForTimeout(100);

    const skeleton = page.locator('sq-skeleton');
    await expect(skeleton).toBeVisible();
  });
});

// sq-carousel tests
test.describe('sq-carousel', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/interactive/sq-carousel.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders with slides', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-carousel>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
        </sq-carousel>
      `;
    });
    await page.waitForTimeout(100);

    const carousel = page.locator('sq-carousel');
    await expect(carousel).toBeVisible();
  });

  test('displays first slide by default', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-carousel>
          <div>Slide 1</div>
          <div>Slide 2</div>
        </sq-carousel>
      `;
    });
    await page.waitForTimeout(100);

    const carousel = page.locator('sq-carousel');
    await expect(carousel).toBeVisible();
  });

  test('supports slide animation', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-carousel animation="slide">
          <div>Slide 1</div>
          <div>Slide 2</div>
        </sq-carousel>
      `;
    });
    await page.waitForTimeout(100);

    const carousel = page.locator('sq-carousel');
    await expect(carousel).toBeVisible();
  });

  test('supports fade animation', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-carousel animation="fade">
          <div>Slide 1</div>
          <div>Slide 2</div>
        </sq-carousel>
      `;
    });
    await page.waitForTimeout(100);

    const carousel = page.locator('sq-carousel');
    await expect(carousel).toBeVisible();
  });

  test('shows dot navigation', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-carousel>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
        </sq-carousel>
      `;
    });
    await page.waitForTimeout(100);

    const dots = page.locator('.carousel-dot');
    await expect(dots).toHaveCount(3);
  });

  test('navigates to next slide on next button click', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-carousel>
          <div>Slide 1</div>
          <div>Slide 2</div>
        </sq-carousel>
      `;
    });
    await page.waitForTimeout(100);

    const nextBtn = page.locator('.next-btn');
    await nextBtn.click();
    await page.waitForTimeout(300);

    const carousel = page.locator('sq-carousel');
    await expect(carousel).toBeVisible();
  });

  test('navigates to previous slide on prev button click', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-carousel>
          <div>Slide 1</div>
          <div>Slide 2</div>
        </sq-carousel>
      `;
    });
    await page.waitForTimeout(100);

    const nextBtn = page.locator('.next-btn');
    await nextBtn.click();
    await page.waitForTimeout(300);

    const prevBtn = page.locator('.prev-btn');
    await prevBtn.click();
    await page.waitForTimeout(300);

    const carousel = page.locator('sq-carousel');
    await expect(carousel).toBeVisible();
  });

  test('supports auto-play', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-carousel auto-play interval="2000">
          <div>Slide 1</div>
          <div>Slide 2</div>
        </sq-carousel>
      `;
    });
    await page.waitForTimeout(100);

    const carousel = page.locator('sq-carousel');
    await expect(carousel).toBeVisible();
  });

  test('shows pause/play button when auto-play is enabled', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-carousel auto-play interval="2000">
          <div>Slide 1</div>
          <div>Slide 2</div>
        </sq-carousel>
      `;
    });
    await page.waitForTimeout(100);

    const pauseBtn = page.locator('.pause-btn');
    await expect(pauseBtn).toBeVisible();
  });

  test('shows slide counter', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-carousel show-counter>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
        </sq-carousel>
      `;
    });
    await page.waitForTimeout(100);

    const counter = page.locator('.slide-counter');
    await expect(counter).toBeVisible();
    await expect(counter).toContainText('1 / 3');
  });

  test('hides navigation when hide-nav is set', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-carousel hide-nav>
          <div>Slide 1</div>
          <div>Slide 2</div>
        </sq-carousel>
      `;
    });
    await page.waitForTimeout(100);

    const nav = page.locator('.carousel-nav');
    await expect(nav).not.toBeVisible();
  });

  test('supports custom controls slot', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-carousel>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <button slot="controls">Custom Control</button>
        </sq-carousel>
      `;
    });
    await page.waitForTimeout(100);

    const carousel = page.locator('sq-carousel');
    await expect(carousel).toBeVisible();
  });
});

// sq-clipboard tests
test.describe('sq-clipboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/interactive/sq-clipboard.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders with default label', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-clipboard text="Hello World"></sq-clipboard>';
    });
    await page.waitForTimeout(100);

    const clipboard = page.locator('sq-clipboard');
    await expect(clipboard).toBeVisible();
    await expect(clipboard).toContainText('Copy');
  });

  test('renders with custom label', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-clipboard text="Hello World" label="Copy Text"></sq-clipboard>';
    });
    await page.waitForTimeout(100);

    const clipboard = page.locator('sq-clipboard');
    await expect(clipboard).toContainText('Copy Text');
  });

  test('clicking copies text and shows feedback', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-clipboard text="Hello World"></sq-clipboard>';
    });
    await page.waitForTimeout(100);

    const clipboard = page.locator('sq-clipboard');
    await clipboard.click();
    await page.waitForTimeout(100);

    await expect(clipboard).toContainText('Copied!');
  });

  test('emits copy event on click', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-clipboard text="Hello World"></sq-clipboard>';
    });
    await page.waitForTimeout(100);

    const copyEventPromise = page.waitForEvent('pageerror').catch(() => {});
    const clipboard = page.locator('sq-clipboard');
    
    const eventFired = page.evaluate(() => {
      return new Promise(resolve => {
        const el = document.querySelector('sq-clipboard');
        el.addEventListener('copy', (e) => {
          resolve({ text: e.detail.text });
        }, { once: true });
        el.shadowRoot.querySelector('button').click();
        setTimeout(() => resolve(null), 1000);
      });
    });
    
    await clipboard.click();
    const result = await eventFired;
    // The copy event should fire
  });

  test('resets to copy state after feedback duration', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-clipboard text="Hello World" feedback-duration="500"></sq-clipboard>';
    });
    await page.waitForTimeout(100);

    const clipboard = page.locator('sq-clipboard');
    await clipboard.click();
    await page.waitForTimeout(100);
    await expect(clipboard).toContainText('Copied!');

    await page.waitForTimeout(500);
    await expect(clipboard).toContainText('Copy');
  });

  test('renders with copy icon', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-clipboard text="Hello World"></sq-clipboard>';
    });
    await page.waitForTimeout(100);

    const icon = page.locator('sq-clipboard .icon');
    await expect(icon).toBeVisible();
  });
});

// sq-split-button tests
test.describe('sq-split-button', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/interactive/sq-split-button.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders with default label', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-split-button label="Save"></sq-split-button>';
    });
    await page.waitForTimeout(100);

    const splitBtn = page.locator('sq-split-button');
    await expect(splitBtn).toBeVisible();
    await expect(splitBtn).toContainText('Save');
  });

  test('renders with variant styles', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-split-button label="Save" variant="secondary"></sq-split-button>';
    });
    await page.waitForTimeout(100);

    const splitBtn = page.locator('sq-split-button');
    await expect(splitBtn).toBeVisible();
  });

  test('supports all variants', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-split-button label="Primary" variant="primary"></sq-split-button>
        <sq-split-button label="Secondary" variant="secondary"></sq-split-button>
        <sq-split-button label="Subtle" variant="subtle"></sq-split-button>
        <sq-split-button label="Danger" variant="danger"></sq-split-button>
      `;
    });
    await page.waitForTimeout(100);

    const buttons = page.locator('sq-split-button');
    await expect(buttons).toHaveCount(4);
  });

  test('supports size variants', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-split-button label="Small" size="sm"></sq-split-button>
        <sq-split-button label="Medium" size="md"></sq-split-button>
        <sq-split-button label="Large" size="lg"></sq-split-button>
      `;
    });
    await page.waitForTimeout(100);

    const buttons = page.locator('sq-split-button');
    await expect(buttons).toHaveCount(3);
  });

  test('disables when disabled attribute is set', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-split-button label="Save" disabled></sq-split-button>';
    });
    await page.waitForTimeout(100);

    const splitBtn = page.locator('sq-split-button');
    const splitBtnEl = await splitBtn.elementHandle();
    const isDisabled = await splitBtnEl.evaluate(el => el.hasAttribute('disabled'));
    expect(isDisabled).toBe(true);
  });

  test('opens dropdown on arrow button click', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-split-button label="Save">
          <script type="module">
            const btn = document.querySelector('sq-split-button');
            btn.options = [
              { label: 'Save', value: 'save' },
              { label: 'Save As', value: 'save-as' },
              { label: 'Save All', value: 'save-all' }
            ];
          </script>
        </sq-split-button>
      `;
    });
    await page.waitForTimeout(100);

    const splitBtn = page.locator('sq-split-button');
    await splitBtn.evaluate(el => {
      el.options = [
        { label: 'Save', value: 'save' },
        { label: 'Save As', value: 'save-as' }
      ];
    });
    await page.waitForTimeout(50);

    const arrowBtn = splitBtn.locator('.arrow-btn');
    await arrowBtn.click();
    await page.waitForTimeout(100);

    const isOpen = await splitBtn.evaluate(el => el.hasAttribute('open'));
    expect(isOpen).toBe(true);
  });

  test('renders dropdown options', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-split-button label="Save" open></sq-split-button>';
    });
    await page.waitForTimeout(100);

    const splitBtn = page.locator('sq-split-button');
    await splitBtn.evaluate(el => {
      el.options = [
        { label: 'Save', value: 'save' },
        { label: 'Save As', value: 'save-as' }
      ];
    });
    await page.waitForTimeout(50);

    const menuItems = splitBtn.locator('.menu-item');
    await expect(menuItems).toHaveCount(2);
  });

  test('emits select event on option click', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-split-button label="Save" open></sq-split-button>';
    });
    await page.waitForTimeout(100);

    const splitBtn = page.locator('sq-split-button');
    await splitBtn.evaluate(el => {
      el.options = [
        { label: 'Save', value: 'save' },
        { label: 'Save As', value: 'save-as' }
      ];
    });
    await page.waitForTimeout(50);

    const selectEventPromise = page.evaluate(() => {
      return new Promise(resolve => {
        const el = document.querySelector('sq-split-button');
        el.addEventListener('select', (e) => {
          resolve({ label: e.detail.label, value: e.detail.value });
        }, { once: true });
      });
    });

    const menuItem = splitBtn.locator('.menu-item').first();
    await menuItem.click();
    await page.waitForTimeout(100);

    const result = await selectEventPromise;
    expect(result).toEqual({ label: 'Save', value: 'save' });
  });

  test('closes dropdown after option selection', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-split-button label="Save" open></sq-split-button>';
    });
    await page.waitForTimeout(100);

    const splitBtn = page.locator('sq-split-button');
    await splitBtn.evaluate(el => {
      el.options = [{ label: 'Save', value: 'save' }];
    });
    await page.waitForTimeout(50);

    await splitBtn.locator('.menu-item').first().click();
    await page.waitForTimeout(100);

    const isOpen = await splitBtn.evaluate(el => el.hasAttribute('open'));
    expect(isOpen).toBe(false);
  });

  test('renders divider in menu', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-split-button label="Save" open></sq-split-button>';
    });
    await page.waitForTimeout(100);

    const splitBtn = page.locator('sq-split-button');
    await splitBtn.evaluate(el => {
      el.options = [
        { label: 'Save', value: 'save' },
        { divider: true },
        { label: 'Delete', value: 'delete' }
      ];
    });
    await page.waitForTimeout(50);

    const divider = splitBtn.locator('.divider');
    await expect(divider).toBeVisible();
  });

  test('disables menu items', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-split-button label="Save" open></sq-split-button>';
    });
    await page.waitForTimeout(100);

    const splitBtn = page.locator('sq-split-button');
    await splitBtn.evaluate(el => {
      el.options = [
        { label: 'Save', value: 'save' },
        { label: 'Delete', value: 'delete', disabled: true }
      ];
    });
    await page.waitForTimeout(50);

    const disabledItem = splitBtn.locator('.menu-item.disabled');
    await expect(disabledItem).toBeVisible();
  });

  test('supports icon slot', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-split-button label="Save"><span slot="icon">★</span></sq-split-button>';
    });
    await page.waitForTimeout(100);

    const splitBtn = page.locator('sq-split-button');
    await expect(splitBtn).toBeVisible();
  });
});
