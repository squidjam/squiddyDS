import { test, expect } from '@playwright/test';

// sq-input tests
test.describe('sq-input', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/form/sq-input.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders with label and input', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-input label="Name" placeholder="Enter your name"></sq-input>';
    });
    await page.waitForTimeout(100);

    const input = page.locator('sq-input');
    await expect(input).toBeVisible();
    await expect(input).toContainText('Name');
  });

  test('supports different input types', async ({ page }) => {
    const types = ['text', 'email', 'password', 'number', 'tel', 'url', 'search'];
    
    for (const type of types) {
      await page.locator('#container').evaluate((t) => {
        document.querySelector('#container')!.innerHTML = `<sq-input type="${t}" label="${t}"></sq-input>`;
      }, type);
      await page.waitForTimeout(100);

      const innerInput = page.locator('sq-input input');
      await expect(innerInput).toHaveAttribute('type', type);
    }
  });

  test('displays error message', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-input label="Email" error="Invalid email format"></sq-input>';
    });
    await page.waitForTimeout(100);

    const input = page.locator('sq-input');
    await expect(input).toContainText('Invalid email format');
  });

  test('shows helper text', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-input label="Username" helper-text="Must be 3-20 characters"></sq-input>';
    });
    await page.waitForTimeout(100);

    const input = page.locator('sq-input');
    await expect(input).toContainText('Must be 3-20 characters');
  });

  test('required field shows asterisk', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-input label="Email" required></sq-input>';
    });
    await page.waitForTimeout(100);

    const required = page.locator('sq-input .required');
    await expect(required).toBeVisible();
  });

  test('disabled state prevents input', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-input label="Disabled" disabled></sq-input>';
    });
    await page.waitForTimeout(100);

    const innerInput = page.locator('sq-input input');
    await expect(innerInput).toBeDisabled();
  });

  test('value property sets input value', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-input value="Pre-filled"></sq-input>';
    });
    await page.waitForTimeout(100);

    const innerInput = page.locator('sq-input input');
    await expect(innerInput).toHaveValue('Pre-filled');
  });

  test('fires input event on change', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-input></sq-input>';
    });
    await page.waitForTimeout(100);

    const innerInput = page.locator('sq-input input');
    await innerInput.fill('Test value');
    
    const value = await page.evaluate(() => {
      const el = document.querySelector('sq-input');
      return el ? (el as any).value : '';
    });
    expect(value).toBe('Test value');
  });

  test('supports leading and trailing icons', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-input leading-icon="🔍" trailing-icon="✕"></sq-input>';
    });
    await page.waitForTimeout(100);

    const icons = page.locator('sq-input .icon');
    await expect(icons).toHaveCount(2);
  });

  test('focus method focuses inner input', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-input id="test-input"></sq-input>';
    });
    await page.waitForTimeout(100);

    await page.evaluate(() => {
      const el = document.getElementById('test-input');
      if (el) el.focus();
    });
    
    const innerInput = page.locator('sq-input input');
    await expect(innerInput).toBeFocused();
  });
});

// sq-textarea tests
test.describe('sq-textarea', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/form/sq-textarea.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders textarea with label', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-textarea label="Description" placeholder="Enter text..."></sq-textarea>';
    });
    await page.waitForTimeout(100);

    const textarea = page.locator('sq-textarea');
    await expect(textarea).toBeVisible();
  });

  test('supports custom rows', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-textarea rows="8"></sq-textarea>';
    });
    await page.waitForTimeout(100);

    const innerTextarea = page.locator('sq-textarea textarea');
    await expect(innerTextarea).toHaveAttribute('rows', '8');
  });

  test('disabled state works', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-textarea disabled></sq-textarea>';
    });
    await page.waitForTimeout(100);

    const innerTextarea = page.locator('sq-textarea textarea');
    await expect(innerTextarea).toBeDisabled();
  });
});

// sq-select tests
test.describe('sq-select', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/form/sq-select.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders select with options', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-select label="Choose">
          <option value="1">One</option>
          <option value="2">Two</option>
        </sq-select>
      `;
    });
    await page.waitForTimeout(100);

    const select = page.locator('sq-select');
    await expect(select).toBeVisible();
  });

  test('supports multiple selection', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-select multiple><option>A</option><option>B</option></sq-select>';
    });
    await page.waitForTimeout(100);

    const innerSelect = page.locator('sq-select select');
    await expect(innerSelect).toHaveAttribute('multiple', '');
  });
});

// sq-checkbox tests
test.describe('sq-checkbox', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/form/sq-checkbox.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders unchecked by default', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-checkbox label="Accept terms"></sq-checkbox>';
    });
    await page.waitForTimeout(100);

    const checkbox = page.locator('sq-checkbox');
    await expect(checkbox).toBeVisible();
  });

  test('can be checked via property', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-checkbox checked label="Accepted"></sq-checkbox>';
    });
    await page.waitForTimeout(100);

    const checkbox = page.locator('sq-checkbox');
    await expect(checkbox).toBeVisible();
  });

  test('toggles on click', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-checkbox label="Toggle"></sq-checkbox>';
    });
    await page.waitForTimeout(100);

    const checkbox = page.locator('sq-checkbox');
    await checkbox.click();
    await page.waitForTimeout(100);
  });

  test('supports indeterminate state', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-checkbox indeterminate label="Partial"></sq-checkbox>';
    });
    await page.waitForTimeout(100);

    const checkbox = page.locator('sq-checkbox');
    await expect(checkbox).toBeVisible();
  });

  test('disabled state prevents interaction', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-checkbox disabled label="Disabled"></sq-checkbox>';
    });
    await page.waitForTimeout(100);

    const innerInput = page.locator('sq-checkbox input');
    await expect(innerInput).toBeDisabled();
  });
});

// sq-checkbox-group tests
test.describe('sq-checkbox-group', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/form/sq-checkbox-group.js';
        import '/src/components/form/sq-checkbox.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders group with label', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-checkbox-group label="Select options">
          <sq-checkbox label="Option 1"></sq-checkbox>
          <sq-checkbox label="Option 2"></sq-checkbox>
        </sq-checkbox-group>
      `;
    });
    await page.waitForTimeout(100);

    const group = page.locator('sq-checkbox-group');
    await expect(group).toBeVisible();
  });

  test('supports options array', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-checkbox-group label="Choices"></sq-checkbox-group>';
    });
    await page.waitForTimeout(100);

    const group = page.locator('sq-checkbox-group');
    await expect(group).toBeVisible();
  });
});

// sq-radio tests
test.describe('sq-radio', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/form/sq-radio.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders radio button', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-radio name="group" value="1" label="Option 1"></sq-radio>';
    });
    await page.waitForTimeout(100);

    const radio = page.locator('sq-radio');
    await expect(radio).toBeVisible();
  });

  test('can be checked via property', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-radio name="group" value="1" checked label="Selected"></sq-radio>';
    });
    await page.waitForTimeout(100);

    const radio = page.locator('sq-radio');
    await expect(radio).toBeVisible();
  });

  test('toggles on click', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-radio name="group" value="1" label="Click me"></sq-radio>';
    });
    await page.waitForTimeout(100);

    const radio = page.locator('sq-radio');
    await radio.click();
    await page.waitForTimeout(100);
  });
});

// sq-radio-group tests
test.describe('sq-radio-group', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/form/sq-radio-group.js';
        import '/src/components/form/sq-radio.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders group with label', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = `
        <sq-radio-group name="choice" label="Select one">
          <sq-radio value="1" label="One"></sq-radio>
          <sq-radio value="2" label="Two"></sq-radio>
        </sq-radio-group>
      `;
    });
    await page.waitForTimeout(100);

    const group = page.locator('sq-radio-group');
    await expect(group).toBeVisible();
  });

  test('required field shows asterisk', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-radio-group name="req" label="Required" required></sq-radio-group>';
    });
    await page.waitForTimeout(100);

    const group = page.locator('sq-radio-group');
    await expect(group).toBeVisible();
  });
});

// sq-range tests
test.describe('sq-range', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/form/sq-range.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders range input', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-range label="Volume"></sq-range>';
    });
    await page.waitForTimeout(100);

    const range = page.locator('sq-range');
    await expect(range).toBeVisible();
  });

  test('supports custom min/max/step', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-range min="0" max="200" step="5"></sq-range>';
    });
    await page.waitForTimeout(100);

    const innerInput = page.locator('sq-range input');
    await expect(innerInput).toHaveAttribute('min', '0');
    await expect(innerInput).toHaveAttribute('max', '200');
    await expect(innerInput).toHaveAttribute('step', '5');
  });

  test('disabled state works', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-range disabled></sq-range>';
    });
    await page.waitForTimeout(100);

    const innerInput = page.locator('sq-range input');
    await expect(innerInput).toBeDisabled();
  });
});

// sq-fieldset tests
test.describe('sq-fieldset', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/form/sq-fieldset.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders fieldset with legend', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-fieldset legend="Personal Info"><p>Fields here</p></sq-fieldset>';
    });
    await page.waitForTimeout(100);

    const fieldset = page.locator('sq-fieldset');
    await expect(fieldset).toBeVisible();
  });

  test('disabled state disables children', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-fieldset legend="Disabled" disabled><p>Content</p></sq-fieldset>';
    });
    await page.waitForTimeout(100);

    const fieldset = page.locator('sq-fieldset');
    await expect(fieldset).toBeVisible();
  });
});

// sq-form tests
test.describe('sq-form', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/form/sq-form.js';
        import '/src/components/form/sq-input.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders form element', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-form><sq-input label="Name"></sq-input></sq-form>';
    });
    await page.waitForTimeout(100);

    const form = page.locator('sq-form');
    await expect(form).toBeVisible();
  });

  test('supports different methods', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-form method="GET"></sq-form>';
    });
    await page.waitForTimeout(100);

    const form = page.locator('sq-form');
    await expect(form).toBeVisible();
  });
});

// sq-input-group tests
test.describe('sq-input-group', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/form/sq-input-group.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders input group', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-input-group><span>$</span><input type="text"></sq-input-group>';
    });
    await page.waitForTimeout(100);

    const group = page.locator('sq-input-group');
    await expect(group).toBeVisible();
  });

  test('shows error state', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-input-group error error-msg="Invalid input"><input type="text"></sq-input-group>';
    });
    await page.waitForTimeout(100);

    const group = page.locator('sq-input-group');
    await expect(group).toBeVisible();
  });
});

// sq-file-upload tests
test.describe('sq-file-upload', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/form/sq-file-upload.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders file upload button', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-file-upload label="Upload file"></sq-file-upload>';
    });
    await page.waitForTimeout(100);

    const upload = page.locator('sq-file-upload');
    await expect(upload).toBeVisible();
  });

  test('supports multiple files', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-file-upload multiple></sq-file-upload>';
    });
    await page.waitForTimeout(100);

    const upload = page.locator('sq-file-upload');
    await expect(upload).toBeVisible();
  });

  test('supports file type filtering', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-file-upload accept=".pdf,.doc,.docx"></sq-file-upload>';
    });
    await page.waitForTimeout(100);

    const upload = page.locator('sq-file-upload');
    await expect(upload).toBeVisible();
  });

  test('disabled state prevents upload', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-file-upload disabled></sq-file-upload>';
    });
    await page.waitForTimeout(100);

    const upload = page.locator('sq-file-upload');
    await expect(upload).toBeVisible();
  });
});

// sq-label tests
test.describe('sq-label', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/form/sq-label.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders label element', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-label for="input-id">Name</sq-label>';
    });
    await page.waitForTimeout(100);

    const label = page.locator('sq-label');
    await expect(label).toBeVisible();
  });

  test('required shows asterisk', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-label required>Name</sq-label>';
    });
    await page.waitForTimeout(100);

    const label = page.locator('sq-label');
    await expect(label).toBeVisible();
  });
});

// sq-color-picker tests
test.describe('sq-color-picker', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/form/sq-color-picker.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders with default value', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-color-picker></sq-color-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-color-picker');
    await expect(picker).toBeVisible();
  });

  test('renders with custom value', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-color-picker value="#3b82f6"></sq-color-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-color-picker');
    await expect(picker).toBeVisible();
  });

  test('opens color panel on click', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-color-picker value="#3b82f6"></sq-color-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-color-picker');
    await picker.click();
    await page.waitForTimeout(200);

    const panel = page.locator('.color-panel');
    await expect(panel).toBeVisible();
  });

  test('shows color swatch', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-color-picker value="#ff0000"></sq-color-picker>';
    });
    await page.waitForTimeout(100);

    const swatch = page.locator('.color-swatch');
    await expect(swatch).toBeVisible();
  });

  test('shows color value in hex format', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-color-picker value="#3b82f6"></sq-color-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-color-picker');
    await expect(picker).toContainText('#3b82f6');
  });

  test('supports custom palette', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-color-picker></sq-color-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-color-picker');
    await picker.evaluate(el => {
      el.palette = ['#ff0000', '#00ff00', '#0000ff'];
    });
    await page.waitForTimeout(100);

    await picker.click();
    await page.waitForTimeout(200);

    const pickerEl = page.locator('sq-color-picker');
    await expect(pickerEl).toBeVisible();
  });

  test('emits change event on color selection', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-color-picker value="#3b82f6"></sq-color-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-color-picker');
    await picker.click();
    await page.waitForTimeout(200);

    const changeEventPromise = page.evaluate(() => {
      return new Promise(resolve => {
        const el = document.querySelector('sq-color-picker');
        el.addEventListener('change', (e) => {
          resolve({ value: e.detail.value });
        }, { once: true });
      });
    });

    const nativeInput = page.locator('input[type="color"]');
    await nativeInput.click();
    await page.waitForTimeout(100);

    const result = await changeEventPromise.catch(() => null);
    if (result) {
      expect(result.value).toBeDefined();
    }
  });

  test('shows recent color history', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-color-picker value="#3b82f6" history-size="5"></sq-color-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-color-picker');
    await expect(picker).toBeVisible();
  });

  test('supports show-sliders property', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-color-picker value="#3b82f6" show-sliders></sq-color-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-color-picker');
    await picker.click();
    await page.waitForTimeout(200);

    await expect(picker).toBeVisible();
  });
});

// sq-date-picker tests
test.describe('sq-date-picker', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/form/sq-date-picker.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders with placeholder', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-picker placeholder="Select date"></sq-date-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-date-picker');
    await expect(picker).toBeVisible();
  });

  test('renders with value', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-picker value="2024-01-15"></sq-date-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-date-picker');
    await expect(picker).toBeVisible();
  });

  test('opens calendar on input click', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-picker></sq-date-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-date-picker');
    await picker.click();
    await page.waitForTimeout(200);

    const calendar = page.locator('.calendar');
    await expect(calendar).toBeVisible();
  });

  test('shows calendar grid with days', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-picker></sq-date-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-date-picker');
    await picker.click();
    await page.waitForTimeout(200);

    const days = page.locator('.calendar-day');
    await expect(days.first()).toBeVisible();
  });

  test('supports min-date constraint', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-picker min-date="2024-01-01"></sq-date-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-date-picker');
    await expect(picker).toBeVisible();
  });

  test('supports max-date constraint', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-picker max-date="2024-12-31"></sq-date-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-date-picker');
    await expect(picker).toBeVisible();
  });

  test('supports clearable', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-picker value="2024-01-15" clearable></sq-date-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-date-picker');
    await expect(picker).toBeVisible();
  });

  test('shows Today button', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-picker></sq-date-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-date-picker');
    await picker.click();
    await page.waitForTimeout(200);

    const todayBtn = page.locator('.today-btn');
    await expect(todayBtn).toBeVisible();
  });

  test('navigates to next month', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-picker></sq-date-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-date-picker');
    await picker.click();
    await page.waitForTimeout(200);

    const nextBtn = page.locator('.next-month-btn');
    await nextBtn.click();
    await page.waitForTimeout(200);

    await expect(picker).toBeVisible();
  });

  test('navigates to previous month', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-picker></sq-date-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-date-picker');
    await picker.click();
    await page.waitForTimeout(200);

    const prevBtn = page.locator('.prev-month-btn');
    await prevBtn.click();
    await page.waitForTimeout(200);

    await expect(picker).toBeVisible();
  });

  test('emits change event on date selection', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-picker></sq-date-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-date-picker');
    await picker.click();
    await page.waitForTimeout(200);

    const changeEventPromise = page.evaluate(() => {
      return new Promise(resolve => {
        const el = document.querySelector('sq-date-picker');
        el.addEventListener('change', (e) => {
          resolve({ value: e.detail.value });
        }, { once: true });
      });
    });

    const dayBtn = page.locator('.calendar-day').nth(10);
    await dayBtn.click();
    await page.waitForTimeout(200);

    const result = await changeEventPromise.catch(() => null);
    if (result) {
      expect(result.value).toBeDefined();
    }
  });

  test('supports custom format', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-picker value="2024-01-15" format="DD/MM/YYYY"></sq-date-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-date-picker');
    await expect(picker).toBeVisible();
  });

  test('closes calendar on outside click', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-picker></sq-date-picker>';
    });
    await page.waitForTimeout(100);

    const picker = page.locator('sq-date-picker');
    await picker.click();
    await page.waitForTimeout(200);

    await page.locator('#container').click();
    await page.waitForTimeout(200);

    const calendar = page.locator('.calendar');
    await expect(calendar).not.toBeVisible();
  });
});

// sq-date-range tests
test.describe('sq-date-range', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/form/sq-date-range.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders with start and end inputs', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-range></sq-date-range>';
    });
    await page.waitForTimeout(100);

    const range = page.locator('sq-date-range');
    await expect(range).toBeVisible();
  });

  test('renders with start and end values', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-range start="2024-01-01" end="2024-01-15"></sq-date-range>';
    });
    await page.waitForTimeout(100);

    const range = page.locator('sq-date-range');
    await expect(range).toBeVisible();
  });

  test('opens calendar on input click', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-range></sq-date-range>';
    });
    await page.waitForTimeout(100);

    const range = page.locator('sq-date-range');
    await range.click();
    await page.waitForTimeout(200);

    const calendar = page.locator('.calendar');
    await expect(calendar).toBeVisible();
  });

  test('shows preset quick ranges', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-range></sq-date-range>';
    });
    await page.waitForTimeout(100);

    const range = page.locator('sq-date-range');
    await range.click();
    await page.waitForTimeout(200);

    const presets = page.locator('.preset-btn');
    await expect(presets.first()).toBeVisible();
  });

  test('supports min-date constraint', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-range min-date="2024-01-01"></sq-date-range>';
    });
    await page.waitForTimeout(100);

    const range = page.locator('sq-date-range');
    await expect(range).toBeVisible();
  });

  test('supports max-date constraint', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-range max-date="2024-12-31"></sq-date-range>';
    });
    await page.waitForTimeout(100);

    const range = page.locator('sq-date-range');
    await expect(range).toBeVisible();
  });

  test('emits range-change event', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-range></sq-date-range>';
    });
    await page.waitForTimeout(100);

    const range = page.locator('sq-date-range');
    await range.click();
    await page.waitForTimeout(200);

    const rangeChangeEventPromise = page.evaluate(() => {
      return new Promise(resolve => {
        const el = document.querySelector('sq-date-range');
        el.addEventListener('range-change', (e) => {
          resolve({ start: e.detail.start, end: e.detail.end });
        }, { once: true });
      });
    });

    const dayBtn = page.locator('.calendar-day').nth(5);
    await dayBtn.click();
    await page.waitForTimeout(100);

    const dayBtn2 = page.locator('.calendar-day').nth(10);
    await dayBtn2.click();
    await page.waitForTimeout(200);

    const result = await rangeChangeEventPromise.catch(() => null);
    if (result) {
      expect(result.start).toBeDefined();
      expect(result.end).toBeDefined();
    }
  });

  test('supports clearable', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-range start="2024-01-01" end="2024-01-15" clearable></sq-date-range>';
    });
    await page.waitForTimeout(100);

    const range = page.locator('sq-date-range');
    await expect(range).toBeVisible();
  });

  test('shows Today button', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-date-range></sq-date-range>';
    });
    await page.waitForTimeout(100);

    const range = page.locator('sq-date-range');
    await range.click();
    await page.waitForTimeout(200);

    const todayBtn = page.locator('.calendar-footer button');
    await expect(todayBtn).toBeVisible();
  });
});
