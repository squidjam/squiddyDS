import { html } from 'lit';

const meta = {
  title: 'Layout/sq-theme',
  tags: ['autodocs'],
};

export default meta;

export const Default = () => html`
  <div style="display: flex; gap: 2rem; align-items: flex-start;">
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Default theme</h3>
      <sq-card padded>
        <p>This card uses the default border-radius values.</p>
        <sq-button variant="primary">Primary Button</sq-button>
      </sq-card>
    </div>
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Blue theme (border-radius=0)</h3>
      <sq-theme sq-theme="blue">
        <sq-card padded>
          <p>This card uses the blue theme with zero border-radius.</p>
          <sq-button variant="primary">Primary Button</sq-button>
        </sq-card>
      </sq-theme>
    </div>
  </div>
`;

export const BlueThemeDarkMode = () => html`
  <div style="display: flex; gap: 2rem; align-items: flex-start;">
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Blue theme + Dark mode</h3>
      <sq-theme sq-theme="blue" sq-mode="dark">
        <sq-card padded>
          <p>This card uses the blue theme with dark mode and zero border-radius.</p>
          <sq-button variant="primary">Primary Button</sq-button>
        </sq-card>
      </sq-theme>
    </div>
  </div>
`;

export const NestedComponents = () => html`
  <sq-theme sq-theme="blue">
    <sq-container size="md" padded>
      <sq-card padded>
        <sq-heading level="3">Themed Container</sq-heading>
        <p>All components inside this theme provider inherit the blue theme overrides.</p>
        <sq-flex gap="2" wrap>
          <sq-button variant="primary">Primary</sq-button>
          <sq-button variant="secondary">Secondary</sq-button>
          <sq-button variant="outline">Outline</sq-button>
        </sq-flex>
        <sq-divider></sq-divider>
        <sq-input placeholder="Themed input field"></sq-input>
      </sq-card>
    </sq-container>
  </sq-theme>
`;

/* ======================================================================
   COLOR THEMES — Showcase each palette color
   ====================================================================== */

export const RedTheme = () => html`
  <div style="display: flex; gap: 2rem; align-items: flex-start;">
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Red theme (light)</h3>
      <sq-theme sq-theme="red">
        <sq-card padded>
          <p>Based on Hair Red #EE2E31</p>
          <sq-flex gap="2" wrap>
            <sq-button variant="primary">Primary</sq-button>
            <sq-button variant="secondary">Secondary</sq-button>
            <sq-button variant="outline">Outline</sq-button>
          </sq-flex>
        </sq-card>
      </sq-theme>
    </div>
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Red theme (dark)</h3>
      <sq-theme sq-theme="red" sq-mode="dark">
        <sq-card padded>
          <p>Based on Hair Red #EE2E31</p>
          <sq-flex gap="2" wrap>
            <sq-button variant="primary">Primary</sq-button>
            <sq-button variant="secondary">Secondary</sq-button>
            <sq-button variant="outline">Outline</sq-button>
          </sq-flex>
        </sq-card>
      </sq-theme>
    </div>
  </div>
`;

export const LimeTheme = () => html`
  <div style="display: flex; gap: 2rem; align-items: flex-start;">
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Lime theme (light)</h3>
      <sq-theme sq-theme="lime">
        <sq-card padded>
          <p>Based on Lime Jacket #A8E400</p>
          <sq-flex gap="2" wrap>
            <sq-button variant="primary">Primary</sq-button>
            <sq-button variant="secondary">Secondary</sq-button>
            <sq-button variant="outline">Outline</sq-button>
          </sq-flex>
        </sq-card>
      </sq-theme>
    </div>
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Lime theme (dark)</h3>
      <sq-theme sq-theme="lime" sq-mode="dark">
        <sq-card padded>
          <p>Based on Lime Jacket #A8E400</p>
          <sq-flex gap="2" wrap>
            <sq-button variant="primary">Primary</sq-button>
            <sq-button variant="secondary">Secondary</sq-button>
            <sq-button variant="outline">Outline</sq-button>
          </sq-flex>
        </sq-card>
      </sq-theme>
    </div>
  </div>
`;

export const CyanTheme = () => html`
  <div style="display: flex; gap: 2rem; align-items: flex-start;">
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Cyan theme (light)</h3>
      <sq-theme sq-theme="cyan">
        <sq-card padded>
          <p>Based on Cyan #00B4D8 — darkened for WCAG AA 4.5:1 contrast</p>
          <sq-flex gap="2" wrap>
            <sq-button variant="primary">Primary</sq-button>
            <sq-button variant="secondary">Secondary</sq-button>
            <sq-button variant="outline">Outline</sq-button>
          </sq-flex>
        </sq-card>
      </sq-theme>
    </div>
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Cyan theme (dark)</h3>
      <sq-theme sq-theme="cyan" sq-mode="dark">
        <sq-card padded>
          <p>Based on Cyan #00B4D8 — darkened for WCAG AA 4.5:1 contrast</p>
          <sq-flex gap="2" wrap>
            <sq-button variant="primary">Primary</sq-button>
            <sq-button variant="secondary">Secondary</sq-button>
            <sq-button variant="outline">Outline</sq-button>
          </sq-flex>
        </sq-card>
      </sq-theme>
    </div>
  </div>
`;

export const GreenTheme = () => html`
  <div style="display: flex; gap: 2rem; align-items: flex-start;">
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Green theme (light)</h3>
      <sq-theme sq-theme="green">
        <sq-card padded>
          <p>Based on Star Green #32CD32</p>
          <sq-flex gap="2" wrap>
            <sq-button variant="primary">Primary</sq-button>
            <sq-button variant="secondary">Secondary</sq-button>
            <sq-button variant="outline">Outline</sq-button>
          </sq-flex>
        </sq-card>
      </sq-theme>
    </div>
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Green theme (dark)</h3>
      <sq-theme sq-theme="green" sq-mode="dark">
        <sq-card padded>
          <p>Based on Star Green #32CD32</p>
          <sq-flex gap="2" wrap>
            <sq-button variant="primary">Primary</sq-button>
            <sq-button variant="secondary">Secondary</sq-button>
            <sq-button variant="outline">Outline</sq-button>
          </sq-flex>
        </sq-card>
      </sq-theme>
    </div>
  </div>
`;

export const GoldTheme = () => html`
  <div style="display: flex; gap: 2rem; align-items: flex-start;">
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Gold theme (light)</h3>
      <sq-theme sq-theme="gold">
        <sq-card padded>
          <p>Based on Gold Accessory #FFD700</p>
          <sq-flex gap="2" wrap>
            <sq-button variant="primary">Primary</sq-button>
            <sq-button variant="secondary">Secondary</sq-button>
            <sq-button variant="outline">Outline</sq-button>
          </sq-flex>
        </sq-card>
      </sq-theme>
    </div>
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Gold theme (dark)</h3>
      <sq-theme sq-theme="gold" sq-mode="dark">
        <sq-card padded>
          <p>Based on Gold Accessory #FFD700</p>
          <sq-flex gap="2" wrap>
            <sq-button variant="primary">Primary</sq-button>
            <sq-button variant="secondary">Secondary</sq-button>
            <sq-button variant="outline">Outline</sq-button>
          </sq-flex>
        </sq-card>
      </sq-theme>
    </div>
  </div>
`;

export const PinkTheme = () => html`
  <div style="display: flex; gap: 2rem; align-items: flex-start;">
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Pink theme (light)</h3>
      <sq-theme sq-theme="pink">
        <sq-card padded>
          <p>Based on Heart Pink #FF69B4</p>
          <sq-flex gap="2" wrap>
            <sq-button variant="primary">Primary</sq-button>
            <sq-button variant="secondary">Secondary</sq-button>
            <sq-button variant="outline">Outline</sq-button>
          </sq-flex>
        </sq-card>
      </sq-theme>
    </div>
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Pink theme (dark)</h3>
      <sq-theme sq-theme="pink" sq-mode="dark">
        <sq-card padded>
          <p>Based on Heart Pink #FF69B4</p>
          <sq-flex gap="2" wrap>
            <sq-button variant="primary">Primary</sq-button>
            <sq-button variant="secondary">Secondary</sq-button>
            <sq-button variant="outline">Outline</sq-button>
          </sq-flex>
        </sq-card>
      </sq-theme>
    </div>
  </div>
`;

export const FuchsiaTheme = () => html`
  <div style="display: flex; gap: 2rem; align-items: flex-start;">
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Fuchsia theme (light)</h3>
      <sq-theme sq-theme="fuchsia">
        <sq-card padded>
          <p>Based on Fuchsia Top #E318A9</p>
          <sq-flex gap="2" wrap>
            <sq-button variant="primary">Primary</sq-button>
            <sq-button variant="secondary">Secondary</sq-button>
            <sq-button variant="outline">Outline</sq-button>
          </sq-flex>
        </sq-card>
      </sq-theme>
    </div>
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Fuchsia theme (dark)</h3>
      <sq-theme sq-theme="fuchsia" sq-mode="dark">
        <sq-card padded>
          <p>Based on Fuchsia Top #E318A9</p>
          <sq-flex gap="2" wrap>
            <sq-button variant="primary">Primary</sq-button>
            <sq-button variant="secondary">Secondary</sq-button>
            <sq-button variant="outline">Outline</sq-button>
          </sq-flex>
        </sq-card>
      </sq-theme>
    </div>
  </div>
`;

export const MagentaTheme = () => html`
  <div style="display: flex; gap: 2rem; align-items: flex-start;">
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Magenta theme (light)</h3>
      <sq-theme sq-theme="magenta">
        <sq-card padded>
          <p>Based on Eye Magenta #C71585</p>
          <sq-flex gap="2" wrap>
            <sq-button variant="primary">Primary</sq-button>
            <sq-button variant="secondary">Secondary</sq-button>
            <sq-button variant="outline">Outline</sq-button>
          </sq-flex>
        </sq-card>
      </sq-theme>
    </div>
    <div style="flex: 1;">
      <h3 style="margin-bottom: 0.5rem;">Magenta theme (dark)</h3>
      <sq-theme sq-theme="magenta" sq-mode="dark">
        <sq-card padded>
          <p>Based on Eye Magenta #C71585</p>
          <sq-flex gap="2" wrap>
            <sq-button variant="primary">Primary</sq-button>
            <sq-button variant="secondary">Secondary</sq-button>
            <sq-button variant="outline">Outline</sq-button>
          </sq-flex>
        </sq-card>
      </sq-theme>
    </div>
  </div>
`;

/* ======================================================================
   RAINBOW THEME — Global color cycle
   ====================================================================== */

export const RainbowTheme = () => html`
  <sq-theme sq-theme="rainbow">
    <sq-container size="lg" padded>
      <sq-heading level="3">Rainbow Theme</sq-heading>
      <p>Each child element cycles through the 8 palette colors globally.</p>
      <sq-divider></sq-divider>
      <sq-flex gap="2" wrap>
        <sq-button variant="primary">Button 1 (Red)</sq-button>
        <sq-button variant="primary">Button 2 (Lime)</sq-button>
        <sq-button variant="primary">Button 3 (Cyan)</sq-button>
        <sq-button variant="primary">Button 4 (Green)</sq-button>
        <sq-button variant="primary">Button 5 (Gold)</sq-button>
        <sq-button variant="primary">Button 6 (Pink)</sq-button>
        <sq-button variant="primary">Button 7 (Fuchsia)</sq-button>
        <sq-button variant="primary">Button 8 (Magenta)</sq-button>
      </sq-flex>
      <sq-divider></sq-divider>
      <sq-flex gap="2" wrap>
        <sq-card padded>Card 1 (Red cycle)</sq-card>
        <sq-card padded>Card 2 (Lime cycle)</sq-card>
        <sq-card padded>Card 3 (Cyan cycle)</sq-card>
      </sq-flex>
    </sq-container>
  </sq-theme>
`;

export const RainbowThemeDark = () => html`
  <sq-theme sq-theme="rainbow" sq-mode="dark">
    <sq-container size="lg" padded>
      <sq-heading level="3">Rainbow Theme — Dark Mode</sq-heading>
      <p>Each child element cycles through the 8 palette colors in dark mode.</p>
      <sq-divider></sq-divider>
      <sq-flex gap="2" wrap>
        <sq-button variant="primary">Button 1 (Red)</sq-button>
        <sq-button variant="primary">Button 2 (Lime)</sq-button>
        <sq-button variant="primary">Button 3 (Cyan)</sq-button>
        <sq-button variant="primary">Button 4 (Green)</sq-button>
        <sq-button variant="primary">Button 5 (Gold)</sq-button>
        <sq-button variant="primary">Button 6 (Pink)</sq-button>
        <sq-button variant="primary">Button 7 (Fuchsia)</sq-button>
        <sq-button variant="primary">Button 8 (Magenta)</sq-button>
      </sq-flex>
    </sq-container>
  </sq-theme>
`;

/* ======================================================================
   SQ-THEME — The signature SQ rainbow theme
   Accessible via sq-theme="sq-theme" attribute
   ====================================================================== */

export const SqTheme = () => html`
  <sq-theme sq-theme="sq-theme">
    <sq-container size="lg" padded>
      <sq-heading level="3">SQ Theme — Signature Rainbow</sq-heading>
      <p>The signature SQ theme where each child element cycles through the 8 palette colors globally.</p>
      <sq-divider></sq-divider>
      <sq-flex gap="2" wrap>
        <sq-button variant="primary">Button 1 (Red)</sq-button>
        <sq-button variant="primary">Button 2 (Lime)</sq-button>
        <sq-button variant="primary">Button 3 (Cyan)</sq-button>
        <sq-button variant="primary">Button 4 (Green)</sq-button>
        <sq-button variant="primary">Button 5 (Gold)</sq-button>
        <sq-button variant="primary">Button 6 (Pink)</sq-button>
        <sq-button variant="primary">Button 7 (Fuchsia)</sq-button>
        <sq-button variant="primary">Button 8 (Magenta)</sq-button>
      </sq-flex>
      <sq-divider></sq-divider>
      <sq-flex gap="2" wrap>
        <sq-card padded>Card 1 (Red cycle)</sq-card>
        <sq-card padded>Card 2 (Lime cycle)</sq-card>
        <sq-card padded>Card 3 (Cyan cycle)</sq-card>
        <sq-card padded>Card 4 (Green cycle)</sq-card>
      </sq-flex>
      <sq-divider></sq-divider>
      <sq-flex gap="2" wrap>
        <sq-tag variant="primary">Tag 1</sq-tag>
        <sq-tag variant="primary">Tag 2</sq-tag>
        <sq-tag variant="primary">Tag 3</sq-tag>
        <sq-tag variant="primary">Tag 4</sq-tag>
        <sq-tag variant="primary">Tag 5</sq-tag>
      </sq-flex>
    </sq-container>
  </sq-theme>
`;

export const SqThemeDark = () => html`
  <sq-theme sq-theme="sq-theme" sq-mode="dark">
    <sq-container size="lg" padded>
      <sq-heading level="3">SQ Theme — Dark Mode</sq-heading>
      <p>The signature SQ theme in dark mode, each element cycles through the 8 palette colors.</p>
      <sq-divider></sq-divider>
      <sq-flex gap="2" wrap>
        <sq-button variant="primary">Button 1 (Red)</sq-button>
        <sq-button variant="primary">Button 2 (Lime)</sq-button>
        <sq-button variant="primary">Button 3 (Cyan)</sq-button>
        <sq-button variant="primary">Button 4 (Green)</sq-button>
        <sq-button variant="primary">Button 5 (Gold)</sq-button>
        <sq-button variant="primary">Button 6 (Pink)</sq-button>
        <sq-button variant="primary">Button 7 (Fuchsia)</sq-button>
        <sq-button variant="primary">Button 8 (Magenta)</sq-button>
      </sq-flex>
      <sq-divider></sq-divider>
      <sq-flex gap="2" wrap>
        <sq-card padded>Card 1 (Red cycle)</sq-card>
        <sq-card padded>Card 2 (Lime cycle)</sq-card>
        <sq-card padded>Card 3 (Cyan cycle)</sq-card>
      </sq-flex>
    </sq-container>
  </sq-theme>
`;

/* ======================================================================
   ALL THEMES COMPARISON
   ====================================================================== */

export const AllThemesComparison = () => html`
  <sq-heading level="3">All Color Themes</sq-heading>
  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
    <sq-theme sq-theme="red">
      <sq-card padded>
        <sq-heading level="4">Red</sq-heading>
        <sq-button variant="primary">Action</sq-button>
      </sq-card>
    </sq-theme>
    <sq-theme sq-theme="lime">
      <sq-card padded>
        <sq-heading level="4">Lime</sq-heading>
        <sq-button variant="primary">Action</sq-button>
      </sq-card>
    </sq-theme>
    <sq-theme sq-theme="cyan">
      <sq-card padded>
        <sq-heading level="4">Cyan</sq-heading>
        <sq-button variant="primary">Action</sq-button>
      </sq-card>
    </sq-theme>
    <sq-theme sq-theme="green">
      <sq-card padded>
        <sq-heading level="4">Green</sq-heading>
        <sq-button variant="primary">Action</sq-button>
      </sq-card>
    </sq-theme>
    <sq-theme sq-theme="gold">
      <sq-card padded>
        <sq-heading level="4">Gold</sq-heading>
        <sq-button variant="primary">Action</sq-button>
      </sq-card>
    </sq-theme>
    <sq-theme sq-theme="pink">
      <sq-card padded>
        <sq-heading level="4">Pink</sq-heading>
        <sq-button variant="primary">Action</sq-button>
      </sq-card>
    </sq-theme>
    <sq-theme sq-theme="fuchsia">
      <sq-card padded>
        <sq-heading level="4">Fuchsia</sq-heading>
        <sq-button variant="primary">Action</sq-button>
      </sq-card>
    </sq-theme>
    <sq-theme sq-theme="magenta">
      <sq-card padded>
        <sq-heading level="4">Magenta</sq-heading>
        <sq-button variant="primary">Action</sq-button>
      </sq-card>
    </sq-theme>
  </div>
`;

/* ======================================================================
   FORM THEME SHOWCASE
   Demonstrates how form components adapt to different themes
   ====================================================================== */

export const FormThemeShowcase = () => html`
  <sq-heading level="3">Form Components — Theme Showcase</sq-heading>
  <p>How form components adapt to different color themes.</p>
  <sq-divider></sq-divider>

  <sq-heading level="4">Red Theme</sq-heading>
  <sq-theme sq-theme="red">
    <sq-card padded>
      <sq-flex gap="3" wrap>
        <div style="flex: 1; min-width: 200px;">
          <sq-label for="input-red">Text Input</sq-label>
          <sq-input id="input-red" placeholder="Enter text..."></sq-input>
        </div>
        <div style="flex: 1; min-width: 200px;">
          <sq-label for="select-red">Select</sq-label>
          <sq-select id="select-red">
            <option value="">Choose an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </sq-select>
        </div>
      </sq-flex>
      <sq-flex gap="3" wrap>
        <div style="flex: 1; min-width: 200px;">
          <sq-label>Textarea</sq-label>
          <sq-textarea placeholder="Enter multiple lines..."></sq-textarea>
        </div>
        <div style="flex: 1; min-width: 200px;">
          <sq-label>Range Slider</sq-label>
          <sq-range min="0" max="100" value="50"></sq-range>
        </div>
      </sq-flex>
      <sq-flex gap="3" wrap>
        <sq-checkbox>Checkbox Option 1</sq-checkbox>
        <sq-checkbox checked>Checkbox Option 2</sq-checkbox>
        <sq-radio name="theme-radio">Radio Option 1</sq-radio>
        <sq-radio name="theme-radio" checked>Radio Option 2</sq-radio>
        <sq-switch>Toggle Switch</sq-switch>
      </sq-flex>
      <sq-flex gap="2" wrap>
        <sq-button variant="primary">Submit</sq-button>
        <sq-button variant="secondary">Cancel</sq-button>
        <sq-button variant="outline">Reset</sq-button>
      </sq-flex>
    </sq-card>
  </sq-theme>

  <sq-divider></sq-divider>

  <sq-heading level="4">Cyan Theme — Dark Mode</sq-heading>
  <sq-theme sq-theme="cyan" sq-mode="dark">
    <sq-card padded>
      <sq-flex gap="3" wrap>
        <div style="flex: 1; min-width: 200px;">
          <sq-label for="input-cyan">Text Input</sq-label>
          <sq-input id="input-cyan" placeholder="Enter text..."></sq-input>
        </div>
        <div style="flex: 1; min-width: 200px;">
          <sq-label for="select-cyan">Select</sq-label>
          <sq-select id="select-cyan">
            <option value="">Choose an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </sq-select>
        </div>
      </sq-flex>
      <sq-flex gap="3" wrap>
        <sq-checkbox>Checkbox Option 1</sq-checkbox>
        <sq-checkbox checked>Checkbox Option 2</sq-checkbox>
        <sq-switch>Toggle Switch</sq-switch>
        <sq-switch checked>Active Switch</sq-switch>
      </sq-flex>
      <sq-flex gap="2" wrap>
        <sq-button variant="primary">Submit</sq-button>
        <sq-button variant="secondary">Cancel</sq-button>
      </sq-flex>
    </sq-card>
  </sq-theme>
`;

/* ======================================================================
   MEDIA THEME SHOWCASE
   Demonstrates how media components adapt to different themes
   ====================================================================== */

export const MediaThemeShowcase = () => html`
  <sq-heading level="3">Media Components — Theme Showcase</sq-heading>
  <p>How audio/video players adapt to different color themes.</p>
  <sq-divider></sq-divider>

  <sq-heading level="4">Gold Theme — Audio Player</sq-heading>
  <sq-theme sq-theme="gold">
    <sq-card padded>
      <sq-flex gap="3" wrap>
        <div style="flex: 1; min-width: 300px;">
          <sq-heading level="5">Default Player</sq-heading>
          <sq-audio src="" controls>
            <source src="" type="audio/mpeg">
          </sq-audio>
        </div>
        <div style="flex: 1; min-width: 300px;">
          <sq-heading level="5">With Download</sq-heading>
          <sq-audio src="" controls downloadable>
            <source src="" type="audio/mpeg">
          </sq-audio>
        </div>
      </sq-flex>
    </sq-card>
  </sq-theme>

  <sq-divider></sq-divider>

  <sq-heading level="4">Pink Theme — Dark Mode</sq-heading>
  <sq-theme sq-theme="pink" sq-mode="dark">
    <sq-card padded>
      <sq-flex gap="3" wrap>
        <div style="flex: 1; min-width: 300px;">
          <sq-heading level="5">Dark Mode Player</sq-heading>
          <sq-audio src="" controls>
            <source src="" type="audio/mpeg">
          </sq-audio>
        </div>
      </sq-flex>
    </sq-card>
  </sq-theme>
`;

/* ======================================================================
   NAVIGATION THEME SHOWCASE
   Demonstrates how navigation components adapt to different themes
   ====================================================================== */

export const NavigationThemeShowcase = () => html`
  <sq-heading level="3">Navigation Components — Theme Showcase</sq-heading>
  <p>How navigation components adapt to different color themes.</p>
  <sq-divider></sq-divider>

  <sq-heading level="4">Green Theme — Tabs & Breadcrumbs</sq-heading>
  <sq-theme sq-theme="green">
    <sq-card padded>
      <sq-heading level="5">Tabs</sq-heading>
      <sq-tabs>
        <sq-tab tab="tab1" label="Home" active></sq-tab>
        <sq-tab tab="tab2" label="Profile"></sq-tab>
        <sq-tab tab="tab3" label="Settings"></sq-tab>
      </sq-tabs>
      <sq-divider></sq-divider>
      <sq-heading level="5">Breadcrumb</sq-heading>
      <sq-breadcrumb>
        <sq-breadcrumb-item href="#">Home</sq-breadcrumb-item>
        <sq-breadcrumb-item href="#">Library</sq-breadcrumb-item>
        <sq-breadcrumb-item active>Data</sq-breadcrumb-item>
      </sq-breadcrumb>
      <sq-divider></sq-divider>
      <sq-heading level="5">Stepper</sq-heading>
      <sq-stepper current="2">
        <sq-step label="Account"></sq-step>
        <sq-step label="Personal Info"></sq-step>
        <sq-step label="Review"></sq-step>
        <sq-step label="Complete"></sq-step>
      </sq-stepper>
      <sq-divider></sq-divider>
      <sq-heading level="5">Links</sq-heading>
      <sq-flex gap="3" wrap>
        <sq-link href="#">Primary Link</sq-link>
        <sq-link href="#" variant="secondary">Secondary Link</sq-link>
      </sq-flex>
    </sq-card>
  </sq-theme>

  <sq-divider></sq-divider>

  <sq-heading level="4">Fuchsia Theme — Dark Mode</sq-heading>
  <sq-theme sq-theme="fuchsia" sq-mode="dark">
    <sq-card padded>
      <sq-heading level="5">Dark Mode Tabs</sq-heading>
      <sq-tabs>
        <sq-tab tab="tab1" label="Dashboard" active></sq-tab>
        <sq-tab tab="tab2" label="Analytics"></sq-tab>
        <sq-tab tab="tab3" label="Reports"></sq-tab>
      </sq-tabs>
      <sq-divider></sq-divider>
      <sq-heading level="5">Dark Mode Pagination</sq-heading>
      <sq-pagination current="3" total="10"></sq-pagination>
    </sq-card>
  </sq-theme>
`;

/* ======================================================================
   FEEDBACK THEME SHOWCASE
   Demonstrates how feedback components adapt to different themes
   ====================================================================== */

export const FeedbackThemeShowcase = () => html`
  <sq-heading level="3">Feedback Components — Theme Showcase</sq-heading>
  <p>How alerts, progress, meters, and spinners adapt to different themes.</p>
  <sq-divider></sq-divider>

  <sq-heading level="4">Lime Theme — Feedback</sq-heading>
  <sq-theme sq-theme="lime">
    <sq-card padded>
      <sq-flex gap="3" direction="column">
        <sq-alert variant="info" title="Information">This is an info alert in the lime theme.</sq-alert>
        <sq-alert variant="success" title="Success">Operation completed successfully!</sq-alert>
        <sq-alert variant="warning" title="Warning">Please check your input.</sq-alert>
        <sq-alert variant="danger" title="Error">Something went wrong.</sq-alert>
      </sq-flex>
      <sq-divider></sq-divider>
      <sq-heading level="5">Progress Bars</sq-heading>
      <sq-flex gap="3" direction="column">
        <sq-progress value="25" show-label></sq-progress>
        <sq-progress value="50" show-label></sq-progress>
        <sq-progress value="75" show-label></sq-progress>
        <sq-progress indeterminate></sq-progress>
      </sq-flex>
      <sq-divider></sq-divider>
      <sq-heading level="5">Meters</sq-heading>
      <sq-flex gap="3" direction="column">
        <sq-meter value="0.2" max="1" show-label></sq-meter>
        <sq-meter value="0.5" max="1" show-label></sq-meter>
        <sq-meter value="0.8" max="1" show-label></sq-meter>
      </sq-flex>
      <sq-divider></sq-divider>
      <sq-heading level="5">Spinners</sq-heading>
      <sq-flex gap="3" wrap>
        <sq-spinner size="sm"></sq-spinner>
        <sq-spinner></sq-spinner>
        <sq-spinner size="lg"></sq-spinner>
      </sq-flex>
    </sq-card>
  </sq-theme>
`;

/* ======================================================================
   PATTERNS PAGE
   A comprehensive page combining multiple component types under the
   signature SQ theme to show the full rainbow effect
   ====================================================================== */

export const PatternsPage = () => html`
  <sq-theme sq-theme="sq-theme">
    <sq-container size="lg" padded>
      <sq-heading level="2">SQ Patterns Page</sq-heading>
      <p>A comprehensive page demonstrating how the signature SQ theme colors cycle through every component instance, creating a vibrant, colorful experience.</p>
      <sq-divider></sq-divider>

      <!-- Navigation Section -->
      <sq-heading level="3">Navigation</sq-heading>
      <sq-breadcrumb>
        <sq-breadcrumb-item href="#">Home</sq-breadcrumb-item>
        <sq-breadcrumb-item href="#">Dashboard</sq-breadcrumb-item>
        <sq-breadcrumb-item active>Patterns</sq-breadcrumb-item>
      </sq-breadcrumb>
      <sq-divider></sq-divider>

      <!-- Alerts Section -->
      <sq-heading level="3">Notifications</sq-heading>
      <sq-alert variant="info" title="Welcome">This page demonstrates the SQ rainbow theme pattern.</sq-alert>
      <sq-alert variant="success" title="Ready">All components are cycling through the 8-color palette.</sq-alert>
      <sq-divider></sq-divider>

      <!-- Tabs Section -->
      <sq-heading level="3">Content Tabs</sq-heading>
      <sq-tabs>
        <sq-tab tab="overview" label="Overview" active></sq-tab>
        <sq-tab tab="details" label="Details"></sq-tab>
        <sq-tab tab="settings" label="Settings"></sq-tab>
      </sq-tabs>
      <sq-divider></sq-divider>

      <!-- Form Section -->
      <sq-heading level="3">Quick Form</sq-heading>
      <sq-card padded>
        <sq-flex gap="3" wrap>
          <div style="flex: 1; min-width: 200px;">
            <sq-label for="patterns-name">Name</sq-label>
            <sq-input id="patterns-name" placeholder="Enter your name..."></sq-input>
          </div>
          <div style="flex: 1; min-width: 200px;">
            <sq-label for="patterns-email">Email</sq-label>
            <sq-input id="patterns-email" type="email" placeholder="Enter your email..."></sq-input>
          </div>
        </sq-flex>
        <sq-flex gap="3" wrap>
          <div style="flex: 1; min-width: 200px;">
            <sq-label for="patterns-select">Category</sq-label>
            <sq-select id="patterns-select">
              <option value="">Select category</option>
              <option value="1">Design</option>
              <option value="2">Development</option>
              <option value="3">Marketing</option>
            </sq-select>
          </div>
          <div style="flex: 1; min-width: 200px;">
            <sq-label>Priority</sq-label>
            <sq-range min="1" max="5" value="3"></sq-range>
          </div>
        </sq-flex>
        <sq-flex gap="3" wrap>
          <sq-checkbox>Accept terms</sq-checkbox>
          <sq-switch>Enable notifications</sq-switch>
        </sq-flex>
        <sq-flex gap="2" wrap>
          <sq-button variant="primary">Save Changes</sq-button>
          <sq-button variant="secondary">Cancel</sq-button>
          <sq-button variant="outline">Reset</sq-button>
        </sq-flex>
      </sq-card>
      <sq-divider></sq-divider>

      <!-- Progress Section -->
      <sq-heading level="3">Progress & Status</sq-heading>
      <sq-card padded>
        <sq-flex gap="3" direction="column">
          <sq-progress value="30" show-label></sq-progress>
          <sq-progress value="60" show-label></sq-progress>
          <sq-progress value="90" show-label></sq-progress>
        </sq-flex>
        <sq-divider></sq-divider>
        <sq-flex gap="3" direction="column">
          <sq-meter value="0.4" max="1" show-label></sq-meter>
          <sq-meter value="0.7" max="1" show-label></sq-meter>
        </sq-flex>
      </sq-card>
      <sq-divider></sq-divider>

      <!-- Media Section -->
      <sq-heading level="3">Media Players</sq-heading>
      <sq-flex gap="3" wrap>
        <div style="flex: 1; min-width: 300px;">
          <sq-card padded>
            <sq-heading level="5">Audio Track 1</sq-heading>
            <sq-audio src="" controls>
              <source src="" type="audio/mpeg">
            </sq-audio>
          </sq-card>
        </div>
        <div style="flex: 1; min-width: 300px;">
          <sq-card padded>
            <sq-heading level="5">Audio Track 2</sq-heading>
            <sq-audio src="" controls downloadable>
              <source src="" type="audio/mpeg">
            </sq-audio>
          </sq-card>
        </div>
      </sq-flex>
      <sq-divider></sq-divider>

      <!-- Tags & Badges Section -->
      <sq-heading level="3">Tags & Badges</sq-heading>
      <sq-flex gap="2" wrap>
        <sq-tag variant="primary">Design</sq-tag>
        <sq-tag variant="primary">Development</sq-tag>
        <sq-tag variant="secondary">Marketing</sq-tag>
        <sq-tag variant="secondary">Analytics</sq-tag>
        <sq-badge variant="primary">5</sq-badge>
        <sq-badge variant="success">12</sq-badge>
        <sq-badge variant="warning" dot></sq-badge>
        <sq-badge variant="danger" count="99"></sq-badge>
      </sq-flex>
      <sq-divider></sq-divider>

      <!-- Stepper Section -->
      <sq-heading level="3">Onboarding Steps</sq-heading>
      <sq-stepper current="2">
        <sq-step label="Create Account"></sq-step>
        <sq-step label="Verify Email"></sq-step>
        <sq-step label="Complete Profile"></sq-step>
        <sq-step label="Get Started"></sq-step>
      </sq-stepper>
      <sq-divider></sq-divider>

      <!-- Pagination Section -->
      <sq-heading level="3">Pagination</sq-heading>
      <sq-pagination current="2" total="15"></sq-pagination>
    </sq-container>
  </sq-theme>
`;

export const PatternsPageDark = () => html`
  <sq-theme sq-theme="sq-theme" sq-mode="dark">
    <sq-container size="lg" padded>
      <sq-heading level="2">SQ Patterns Page — Dark Mode</sq-heading>
      <p>The same patterns page in dark mode, showing how each component instance gets its own color-tinted background and text.</p>
      <sq-divider></sq-divider>

      <!-- Navigation Section -->
      <sq-heading level="3">Navigation</sq-heading>
      <sq-breadcrumb>
        <sq-breadcrumb-item href="#">Home</sq-breadcrumb-item>
        <sq-breadcrumb-item href="#">Dashboard</sq-breadcrumb-item>
        <sq-breadcrumb-item active>Patterns</sq-breadcrumb-item>
      </sq-breadcrumb>
      <sq-divider></sq-divider>

      <!-- Alerts Section -->
      <sq-heading level="3">Notifications</sq-heading>
      <sq-alert variant="info" title="Welcome">Dark mode rainbow theme in action.</sq-alert>
      <sq-alert variant="success" title="Success">Each element has its own color palette.</sq-alert>
      <sq-divider></sq-divider>

      <!-- Form Section -->
      <sq-heading level="3">Quick Form</sq-heading>
      <sq-card padded>
        <sq-flex gap="3" wrap>
          <div style="flex: 1; min-width: 200px;">
            <sq-label for="patterns-name-dark">Name</sq-label>
            <sq-input id="patterns-name-dark" placeholder="Enter your name..."></sq-input>
          </div>
          <div style="flex: 1; min-width: 200px;">
            <sq-label for="patterns-email-dark">Email</sq-label>
            <sq-input id="patterns-email-dark" type="email" placeholder="Enter your email..."></sq-input>
          </div>
        </sq-flex>
        <sq-flex gap="2" wrap>
          <sq-button variant="primary">Save</sq-button>
          <sq-button variant="secondary">Cancel</sq-button>
        </sq-flex>
      </sq-card>
      <sq-divider></sq-divider>

      <!-- Progress Section -->
      <sq-heading level="3">Progress</sq-heading>
      <sq-card padded>
        <sq-progress value="45" show-label></sq-progress>
        <sq-progress value="80" show-label></sq-progress>
      </sq-card>
    </sq-container>
  </sq-theme>
`;

/* ======================================================================
   ACCESSIBILITY: TYPOGRAPHY
   Explains our typography scale, font options, and readability features
   ====================================================================== */

export const AccessibilityTypography = () => html`
  <sq-container size="lg" padded>
    <sq-heading level="1">Accessibility — Typography</sq-heading>
    <p>Good typography is the foundation of accessible design. Our type scale is built on a modular ratio that ensures consistent visual hierarchy while maintaining readability across all sizes.</p>
    <sq-divider></sq-divider>

    <!-- Type Scale -->
    <sq-heading level="2">Type Scale</sq-heading>
    <p>Our type scale uses a 1.25 (Major Third) modular ratio, providing smooth transitions between sizes while maintaining clear visual distinction.</p>

    <sq-card padded>
      <sq-flex gap="4" direction="column">
        <div>
          <p style="font-size: var(--sq-text-4xl); font-weight: var(--sq-font-weight-bold); line-height: var(--sq-line-height-tight); margin: 0;">
            Display — 36px Bold
          </p>
          <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-sm); margin: 0.25rem 0 0 0;">
            <code>--sq-text-4xl</code> · <code>--sq-font-weight-bold</code> · <code>--sq-line-height-tight</code>
          </p>
        </div>
        <div>
          <p style="font-size: var(--sq-text-3xl); font-weight: var(--sq-font-weight-bold); line-height: var(--sq-line-height-tight); margin: 0;">
            Headline — 30px Bold
          </p>
          <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-sm); margin: 0.25rem 0 0 0;">
            <code>--sq-text-3xl</code> · <code>--sq-font-weight-bold</code>
          </p>
        </div>
        <div>
          <p style="font-size: var(--sq-text-2xl); font-weight: var(--sq-font-weight-semibold); line-height: var(--sq-line-height-tight); margin: 0;">
            Title — 24px Semibold
          </p>
          <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-sm); margin: 0.25rem 0 0 0;">
            <code>--sq-text-2xl</code> · <code>--sq-font-weight-semibold</code>
          </p>
        </div>
        <div>
          <p style="font-size: var(--sq-text-xl); font-weight: var(--sq-font-weight-medium); line-height: var(--sq-line-height-normal); margin: 0;">
            Subtitle — 20px Medium
          </p>
          <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-sm); margin: 0.25rem 0 0 0;">
            <code>--sq-text-xl</code> · <code>--sq-font-weight-medium</code>
          </p>
        </div>
        <div>
          <p style="font-size: var(--sq-text-lg); font-weight: var(--sq-font-weight-normal); line-height: var(--sq-line-height-normal); margin: 0;">
            Lead — 18px Regular
          </p>
          <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-sm); margin: 0.25rem 0 0 0;">
            <code>--sq-text-lg</code> · <code>--sq-font-weight-normal</code>
          </p>
        </div>
        <div>
          <p style="font-size: var(--sq-text-md); font-weight: var(--sq-font-weight-normal); line-height: var(--sq-line-height-normal); margin: 0;">
            Body — 16px Regular
          </p>
          <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-sm); margin: 0.25rem 0 0 0;">
            <code>--sq-text-md</code> · <code>--sq-font-weight-normal</code>
          </p>
        </div>
        <div>
          <p style="font-size: var(--sq-text-sm); font-weight: var(--sq-font-weight-normal); line-height: var(--sq-line-height-normal); margin: 0;">
            Small — 14px Regular
          </p>
          <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-xs); margin: 0.25rem 0 0 0;">
            <code>--sq-text-sm</code> · <code>--sq-font-weight-normal</code>
          </p>
        </div>
        <div>
          <p style="font-size: var(--sq-text-xs); font-weight: var(--sq-font-weight-normal); line-height: var(--sq-line-height-normal); margin: 0;">
            Caption — 12px Regular
          </p>
          <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-xs); margin: 0.25rem 0 0 0;">
            <code>--sq-text-xs</code> · <code>--sq-font-weight-normal</code>
          </p>
        </div>
      </sq-flex>
    </sq-card>

    <sq-divider></sq-divider>

    <!-- Font Families -->
    <sq-heading level="2">Font Families</sq-heading>

    <sq-flex gap="3" wrap>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">System UI (Default)</sq-heading>
        <p style="font-family: var(--sq-font-family);">
          The quick brown fox jumps over the lazy dog. Our default font uses the system's native UI font for optimal readability and performance.
        </p>
        <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-sm);">
          <code>--sq-font-family</code>
        </p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Monospace</sq-heading>
        <p style="font-family: var(--sq-font-mono); font-size: var(--sq-text-sm);">
          const greeting = "Hello, world!";<br>
          console.log(greeting);
        </p>
        <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-sm);">
          <code>--sq-font-mono</code>
        </p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- Line Heights -->
    <sq-heading level="2">Line Heights</sq-heading>
    <p>Line height (leading) controls the vertical space between lines of text. Proper line height is essential for readability, especially in body text.</p>

    <sq-flex gap="3" wrap>
      <sq-card padded style="flex: 1; min-width: 250px;">
        <sq-heading level="4">Tight — 1.25</sq-heading>
        <p style="line-height: var(--sq-line-height-tight); font-size: var(--sq-text-sm);">
          Tight line height is best for headings and short labels where vertical compactness matters. It reduces whitespace between lines for a more condensed appearance.
        </p>
        <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-xs);">
          <code>--sq-line-height-tight</code>
        </p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 250px;">
        <sq-heading level="4">Normal — 1.5</sq-heading>
        <p style="line-height: var(--sq-line-height-normal); font-size: var(--sq-text-sm);">
          Normal line height is our default for body text. It provides comfortable reading experience for most content and is recommended by WCAG guidelines for optimal readability.
        </p>
        <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-xs);">
          <code>--sq-line-height-normal</code>
        </p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 250px;">
        <sq-heading level="4">Relaxed — 1.75</sq-heading>
        <p style="line-height: var(--sq-line-height-relaxed); font-size: var(--sq-text-sm);">
          Relaxed line height adds extra breathing room between lines. Ideal for long-form content, reading-heavy pages, or when supporting users who need extra spacing for comfort.
        </p>
        <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-xs);">
          <code>--sq-line-height-relaxed</code>
        </p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- Font Weights -->
    <sq-heading level="2">Font Weights</sq-heading>
    <p>Font weight creates visual hierarchy and emphasis. We use four weights to establish clear distinction without overwhelming the reader.</p>

    <sq-card padded>
      <sq-flex gap="4" direction="column">
        <div>
          <p style="font-weight: var(--sq-font-weight-normal); margin: 0;">Normal 400 — Body text, labels, and general content.</p>
          <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-xs); margin: 0.25rem 0 0 0;"><code>--sq-font-weight-normal</code></p>
        </div>
        <div>
          <p style="font-weight: var(--sq-font-weight-medium); margin: 0;">Medium 500 — Subtle emphasis, section labels, and button text.</p>
          <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-xs); margin: 0.25rem 0 0 0;"><code>--sq-font-weight-medium</code></p>
        </div>
        <div>
          <p style="font-weight: var(--sq-font-weight-semibold); margin: 0;">Semibold 600 — Headings, card titles, and important labels.</p>
          <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-xs); margin: 0.25rem 0 0 0;"><code>--sq-font-weight-semibold</code></p>
        </div>
        <div>
          <p style="font-weight: var(--sq-font-weight-bold); margin: 0;">Bold 700 — Page titles, display text, and strong emphasis.</p>
          <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-xs); margin: 0.25rem 0 0 0;"><code>--sq-font-weight-bold</code></p>
        </div>
      </sq-flex>
    </sq-card>

    <sq-divider></sq-divider>

    <!-- Accessibility Best Practices -->
    <sq-heading level="2">Accessibility Best Practices</sq-heading>

    <sq-flex gap="3" wrap>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Minimum Size</sq-heading>
        <p>Body text should never be smaller than <strong>16px</strong> (<code>--sq-text-md</code>). Smaller sizes are reserved for captions and secondary labels where context makes the reduced size acceptable.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Contrast Ratio</sq-heading>
        <p>All text must meet at least <strong>WCAG AA</strong> contrast requirements: 4.5:1 for normal text and 3:1 for large text (18px bold or 14px regular). Our default palette exceeds these thresholds.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Line Length</sq-heading>
        <p>Optimal line length is <strong>45–75 characters</strong> per line. Use containers and max-width to prevent lines from becoming too long, which reduces reading comfort.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Responsive Scaling</sq-heading>
        <p>All font sizes use <code>rem</code> units, respecting the user's browser font size preference. This ensures users who increase their default font size get a proportionally scaled experience.</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- Live Typography Demo -->
    <sq-heading level="2">Live Component Examples</sq-heading>
    <p>Our <code>&lt;sq-heading&gt;</code> component implements the full type scale with proper semantic HTML mapping.</p>

    <sq-card padded>
      <sq-flex gap="4" direction="column">
        <sq-heading level="1">Heading 1 — Display</sq-heading>
        <sq-heading level="2">Heading 2 — Headline</sq-heading>
        <sq-heading level="3">Heading 3 — Title</sq-heading>
        <sq-heading level="4">Heading 4 — Subtitle</sq-heading>
        <sq-heading level="5">Heading 5 — Section</sq-heading>
        <sq-heading level="6">Heading 6 — Card Title</sq-heading>
      </sq-flex>
    </sq-card>
  </sq-container>
`;

/* ======================================================================
   ACCESSIBILITY: THEME
   Explains our theme system, how colors work, and customization options
   ====================================================================== */

export const AccessibilityTheme = () => html`
  <sq-container size="lg" padded>
    <sq-heading level="1">Accessibility — Theme System</sq-heading>
    <p>Our theme system is built on CSS custom properties, making it easy to customize every aspect of the design while maintaining accessibility standards. The <code>&lt;sq-theme&gt;</code> component lets you override the default look and feel by simply adding a theme name attribute.</p>
    <sq-divider></sq-divider>

    <!-- How It Works -->
    <sq-heading level="2">How It Works</sq-heading>

    <sq-flex gap="3" wrap>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Theme Attribute</sq-heading>
        <p>Place <code>&lt;sq-theme sq-theme="name"&gt;</code> anywhere in your DOM. All descendant components automatically inherit the theme's color overrides through CSS custom property inheritance.</p>
        <sq-divider></sq-divider>
        <p style="font-family: var(--sq-font-mono); font-size: var(--sq-text-sm);">
          &lt;sq-theme sq-theme="red"&gt;<br>
          &nbsp;&nbsp;&lt;sq-button&gt;Red&lt;/sq-button&gt;<br>
          &lt;/sq-theme&gt;
        </p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Mode Attribute</sq-heading>
        <p>Use <code>sq-mode="dark"</code> or <code>sq-mode="light"</code> to control the light/dark appearance. The system also auto-detects the user's OS preference when no explicit mode is set.</p>
        <sq-divider></sq-divider>
        <p style="font-family: var(--sq-font-mono); font-size: var(--sq-text-sm);">
          &lt;sq-theme sq-theme="cyan"<br>
          &nbsp;&nbsp;sq-mode="dark"&gt;<br>
          &nbsp;&nbsp;&lt;!-- dark cyan --&gt;<br>
          &lt;/sq-theme&gt;
        </p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Inheritance</sq-heading>
        <p>Themes cascade through the DOM. Nest components freely — every child element automatically picks up the parent theme's CSS custom properties without any extra configuration.</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- Available Themes -->
    <sq-heading level="2">Available Themes</sq-heading>
    <p>We provide several named themes, each with a unique accent color palette. Every theme works in both light and dark mode.</p>

    <sq-flex gap="2" wrap>
      <sq-theme sq-theme="blue">
        <sq-tag variant="primary">blue</sq-tag>
      </sq-theme>
      <sq-theme sq-theme="red">
        <sq-tag variant="primary">red</sq-tag>
      </sq-theme>
      <sq-theme sq-theme="lime">
        <sq-tag variant="primary">lime</sq-tag>
      </sq-theme>
      <sq-theme sq-theme="cyan">
        <sq-tag variant="primary">cyan</sq-tag>
      </sq-theme>
      <sq-theme sq-theme="green">
        <sq-tag variant="primary">green</sq-tag>
      </sq-theme>
      <sq-theme sq-theme="gold">
        <sq-tag variant="primary">gold</sq-tag>
      </sq-theme>
      <sq-theme sq-theme="pink">
        <sq-tag variant="primary">pink</sq-tag>
      </sq-theme>
      <sq-theme sq-theme="fuchsia">
        <sq-tag variant="primary">fuchsia</sq-tag>
      </sq-theme>
      <sq-theme sq-theme="magenta">
        <sq-tag variant="primary">magenta</sq-tag>
      </sq-theme>
      <sq-theme sq-theme="sq-theme">
        <sq-tag variant="primary">sq-theme (rainbow)</sq-tag>
      </sq-theme>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- Color Tokens -->
    <sq-heading level="2">Color Token Architecture</sq-heading>
    <p>Every visual aspect is controlled by a CSS custom property. Here are the main categories:</p>

    <sq-card padded>
      <sq-heading level="3">Background Tokens</sq-heading>
      <sq-flex gap="2" wrap>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div style="width: 24px; height: 24px; background: var(--sq-bg-default); border: 1px solid var(--sq-border-subtle); border-radius: var(--sq-radius-sm);"></div>
          <code style="font-size: var(--sq-text-sm);">--sq-bg-default</code>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div style="width: 24px; height: 24px; background: var(--sq-bg-surface); border: 1px solid var(--sq-border-subtle); border-radius: var(--sq-radius-sm);"></div>
          <code style="font-size: var(--sq-text-sm);">--sq-bg-surface</code>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div style="width: 24px; height: 24px; background: var(--sq-bg-elevated); border: 1px solid var(--sq-border-subtle); border-radius: var(--sq-radius-sm);"></div>
          <code style="font-size: var(--sq-text-sm);">--sq-bg-elevated</code>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div style="width: 24px; height: 24px; background: var(--sq-bg-inverse); border: 1px solid var(--sq-border-subtle); border-radius: var(--sq-radius-sm);"></div>
          <code style="font-size: var(--sq-text-sm);">--sq-bg-inverse</code>
        </div>
      </sq-flex>
    </sq-card>

    <sq-card padded>
      <sq-heading level="3">Accent Tokens</sq-heading>
      <sq-flex gap="2" wrap>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div style="width: 24px; height: 24px; background: var(--sq-accent-primary); border-radius: var(--sq-radius-sm);"></div>
          <code style="font-size: var(--sq-text-sm);">--sq-accent-primary</code>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div style="width: 24px; height: 24px; background: var(--sq-accent-primary-hover); border-radius: var(--sq-radius-sm);"></div>
          <code style="font-size: var(--sq-text-sm);">--sq-accent-primary-hover</code>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div style="width: 24px; height: 24px; background: var(--sq-accent-primary-active); border-radius: var(--sq-radius-sm);"></div>
          <code style="font-size: var(--sq-text-sm);">--sq-accent-primary-active</code>
        </div>
      </sq-flex>
    </sq-card>

    <sq-card padded>
      <sq-heading level="3">Semantic Tokens</sq-heading>
      <sq-flex gap="2" wrap>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div style="width: 24px; height: 24px; background: var(--sq-color-success); border-radius: var(--sq-radius-sm);"></div>
          <code style="font-size: var(--sq-text-sm);">--sq-color-success</code>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div style="width: 24px; height: 24px; background: var(--sq-color-warning); border-radius: var(--sq-radius-sm);"></div>
          <code style="font-size: var(--sq-text-sm);">--sq-color-warning</code>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div style="width: 24px; height: 24px; background: var(--sq-color-danger); border-radius: var(--sq-radius-sm);"></div>
          <code style="font-size: var(--sq-text-sm);">--sq-color-danger</code>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div style="width: 24px; height: 24px; background: var(--sq-color-info); border-radius: var(--sq-radius-sm);"></div>
          <code style="font-size: var(--sq-text-sm);">--sq-color-info</code>
        </div>
      </sq-flex>
    </sq-card>

    <sq-divider></sq-divider>

    <!-- Dark Mode -->
    <sq-heading level="2">Dark Mode</sq-heading>
    <p>Dark mode is first-class in our system. Every theme provides a dark variant with adjusted backgrounds, text colors, and shadows for comfortable nighttime use.</p>

    <sq-flex gap="3" wrap>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Light Mode</sq-heading>
        <p>Default appearance with warm backgrounds and dark text. Optimized for daytime use and environments with good lighting.</p>
        <sq-flex gap="2" wrap>
          <sq-button variant="primary">Primary</sq-button>
          <sq-button variant="secondary">Secondary</sq-button>
        </sq-flex>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-theme sq-mode="dark">
          <sq-heading level="3">Dark Mode</sq-heading>
          <p>Reduced brightness with light text on dark backgrounds. Lower eye strain in dim environments and better battery life on OLED displays.</p>
          <sq-flex gap="2" wrap>
            <sq-button variant="primary">Primary</sq-button>
            <sq-button variant="secondary">Secondary</sq-button>
          </sq-flex>
        </sq-theme>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- Accessibility Considerations -->
    <sq-heading level="2">Accessibility Considerations</sq-heading>

    <sq-flex gap="3" wrap>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Color Contrast</sq-heading>
        <p>Every theme color is carefully adjusted to meet <strong>WCAG AA</strong> contrast ratios. We don't just use the raw palette colors — we create accessible variations that maintain character while ensuring readability.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Not Just Color</sq-heading>
        <p>Information is never conveyed by color alone. States use icons, labels, and patterns in addition to color changes. This ensures users with color vision deficiencies can still distinguish between states.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">System Preference</sq-heading>
        <p>When no explicit mode is set, our system auto-detects the user's OS preference via <code>prefers-color-scheme</code>. Respecting system settings is a key accessibility practice.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Focus Indicators</sq-heading>
        <p>Focus rings use the theme's accent color with a 2px solid outline and 2px offset, ensuring visible keyboard navigation in every theme and mode combination.</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- Creating Custom Themes -->
    <sq-heading level="2">Creating Custom Themes</sq-heading>
    <p>To add a new theme, override the CSS custom properties in the <code>&lt;sq-theme&gt;</code> component. Here's a minimal example:</p>

    <sq-card padded>
      <pre style="font-family: var(--sq-font-mono); font-size: var(--sq-text-sm); overflow-x: auto; margin: 0; white-space: pre-wrap;">
:host([sq-theme="my-theme"]) {
  --sq-accent-primary: #0066cc;
  --sq-accent-primary-hover: #0055aa;
  --sq-accent-primary-active: #004488;
  --sq-accent-primary-light: rgba(0, 102, 204, 0.1);
  --sq-accent-primary-light-hover: rgba(0, 102, 204, 0.18);
}</pre>
    </sq-card>

    <p>For dark mode variants, add a nested selector:</p>

    <sq-card padded>
      <pre style="font-family: var(--sq-font-mono); font-size: var(--sq-text-sm); overflow-x: auto; margin: 0; white-space: pre-wrap;">
:host([sq-theme="my-theme"][sq-mode="dark"]) {
  --sq-bg-default: #0a1628;
  --sq-bg-surface: #0f1f3a;
  --sq-fg-default: #e2e8f0;
  --sq-accent-primary: #3b82f6;
  /* ... other overrides ... */
}</pre>
    </sq-card>
  </sq-container>
`;

/* ======================================================================
   ACCESSIBILITY: CONTRIBUTE
   Invites the community to contribute to the design system
   ====================================================================== */

export const AccessibilityContribute = () => html`
  <sq-container size="lg" padded>
    <sq-heading level="1">Contribute to Squiddy DS</sq-heading>
    <p style="font-size: var(--sq-text-lg); color: var(--sq-fg-muted);">We believe great design systems are built by communities. Whether you're a developer, designer, or accessibility advocate, there are many ways to help make Squiddy DS better for everyone.</p>
    <sq-divider></sq-divider>

    <!-- Why Contribute -->
    <sq-heading level="2">Why Contribute?</sq-heading>

    <sq-flex gap="3" wrap>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Open Source Impact</sq-heading>
        <p>Squiddy DS is built to be shared. Every contribution helps thousands of developers create more accessible and beautiful web experiences. Your work has real-world impact.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
          <sq-heading level="3">Learn & Grow</sq-heading>
          <p>Contributing to a design system teaches you about Web Components, CSS architecture, accessibility standards, and modern frontend patterns. It's a fantastic learning opportunity.</p>
        </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Shape the Future</sq-heading>
        <p>Help define how the next generation of web components works. Your ideas about API design, theming, and accessibility features directly influence the direction of the project.</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- How to Contribute -->
    <sq-heading level="2">How to Contribute</sq-heading>

    <sq-heading level="3">Report Issues</sq-heading>
    <p>Found a bug, accessibility barrier, or have a suggestion? Open an issue on our repository. Include steps to reproduce, expected behavior, and any relevant screenshots or code snippets.</p>

    <sq-heading level="3">Improve Documentation</sq-heading>
    <p>Clear documentation is the backbone of any design system. Help us by:</p>
    <ul style="padding-left: 1.5rem; margin: 0.5rem 0;">
      <li>Fixing typos or unclear explanations</li>
      <li>Adding code examples to existing components</li>
      <li>Writing guides for common patterns and use cases</li>
      <li>Translating documentation into other languages</li>
    </ul>

    <sq-heading level="3">Build Components</sq-heading>
    <p>Our component library is always growing. If you need a component that doesn't exist yet, consider building it and contributing it back. We follow a consistent pattern:</p>
    <sq-card padded>
      <pre style="font-family: var(--sq-font-mono); font-size: var(--sq-text-sm); overflow-x: auto; margin: 0; white-space: pre-wrap;">
// 1. Create the component
// src/components/category/sq-my-component.ts

// 2. Write Storybook stories
// src/components/category/sq-my-component.stories.ts

// 3. Export in index.ts
// export './components/category/sq-my-component';</pre>
    </sq-card>

    <sq-heading level="3">Enhance Accessibility</sq-heading>
    <p>Accessibility is a core value. Help us by:</p>
    <ul style="padding-left: 1.5rem; margin: 0.5rem 0;">
      <li>Auditing components for WCAG 2.1 AA compliance</li>
      <li>Improving keyboard navigation patterns</li>
      <li>Adding ARIA attributes where needed</li>
      <li>Testing with screen readers and assistive technologies</li>
      <li>Suggesting better color contrast options</li>
    </ul>

    <sq-heading level="3">Add Themes</sq-heading>
    <p>Love our theme system? Create and share your own! Whether it's a brand theme, a high-contrast accessibility theme, or an experimental color palette — we welcome theme contributions.</p>

    <sq-divider></sq-divider>

    <!-- Getting Started -->
    <sq-heading level="2">Getting Started</sq-heading>

    <sq-card padded>
      <sq-stepper current="1">
        <sq-step label="Fork the repo"></sq-step>
        <sq-step label="Clone locally"></sq-step>
        <sq-step label="Install deps"></sq-step>
        <sq-step label="Make changes"></sq-step>
        <sq-step label="Run tests"></sq-step>
        <sq-step label="Open PR"></sq-step>
      </sq-stepper>
    </sq-card>

    <sq-divider></sq-divider>

    <!-- Code of Conduct -->
    <sq-heading level="2">Community Guidelines</sq-heading>

    <sq-flex gap="3" wrap>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Be Respectful</sq-heading>
        <p>Treat everyone with kindness and respect. We welcome contributors of all backgrounds, experience levels, and perspectives.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Be Inclusive</sq-heading>
        <p>Accessibility isn't optional. Every contribution should consider users with diverse abilities and needs. Design for everyone from the start.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Be Constructive</sq-heading>
        <p>Give feedback that helps improve the project. When reviewing code or suggesting changes, be specific and explain your reasoning.</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- Call to Action -->
    <sq-theme sq-theme="sq-theme">
      <sq-card padded>
        <sq-heading level="2">Ready to Contribute?</sq-heading>
        <p>Every great project starts with a single contribution. Whether it's fixing a typo, adding a test, or building a new component — your effort matters.</p>
        <sq-flex gap="2" wrap>
          <sq-button variant="primary">View on GitHub</sq-button>
          <sq-button variant="secondary">Read Contributing Guide</sq-button>
          <sq-button variant="outline">Join Discussion</sq-button>
        </sq-flex>
        <sq-divider></sq-divider>
        <sq-flex gap="2" wrap>
          <sq-tag variant="primary">Good First Issue</sq-tag>
          <sq-tag variant="secondary">Help Wanted</sq-tag>
          <sq-tag variant="primary">Accessibility</sq-tag>
          <sq-badge variant="success">Open Source</sq-badge>
        </sq-flex>
      </sq-card>
    </sq-theme>

    <sq-divider></sq-divider>

    <p style="text-align: center; color: var(--sq-fg-muted); font-size: var(--sq-text-sm);">
      Built with ❤️ by the Squiddy community. Made colorful by SQ.
    </p>
  </sq-container>
`;

/* ======================================================================
   ARCHITECTURE
   Explains the technical architecture of our web components
   ====================================================================== */

export const Architecture = () => html`
  <sq-container size="lg" padded>
    <sq-heading level="1">Component Architecture</sq-heading>
    <p>Squiddy DS is built on <strong>Web Components</strong> using <a href="https://lit.dev/" target="_blank" rel="noopener">LitElement</a>, a lightweight, standards-based framework that produces fast, reusable custom elements. Every component is a self-contained HTML tag that works in any framework — React, Vue, Angular, Svelte, or plain HTML — with zero configuration.</p>
    <sq-divider></sq-divider>

    <!-- Core Principles -->
    <sq-heading level="2">Core Architecture Principles</sq-heading>

    <sq-flex gap="3" wrap>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Standards First</sq-heading>
        <p>Every component is a native custom element following the Web Components specification (Custom Elements v1, Shadow DOM, HTML Templates, CSS Scoping). No build step required — just import and use.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Framework Agnostic</sq-heading>
        <p>Components work everywhere because they are the platform, not a library. Use them in React, Vue, Angular, Svelte, or any framework — or none at all. They are HTML, enhanced.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Encapsulated Styles</sq-heading>
        <p>Each component uses Shadow DOM to encapsulate its styles, preventing CSS leaks and conflicts. Your global styles won't break our components, and our components won't break your styles.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">CSS Custom Properties</sq-heading>
        <p>Theming is achieved through CSS custom properties (variables) that cascade through the DOM. This enables the <code>&lt;sq-theme&gt;</code> system to override any visual aspect without modifying component code.</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- Component Hierarchy -->
    <sq-heading level="2">Component Hierarchy</sq-heading>
    <p>Every component extends <code>SquiddyElement</code>, a base class that provides common functionality like theme support and slot rendering.</p>

    <sq-card padded>
      <pre style="font-family: var(--sq-font-mono); font-size: var(--sq-text-sm); overflow-x: auto; margin: 0; white-space: pre-wrap;">LitElement
  └── SquiddyElement (base-component.ts)
        ├── Theme support (sq-mode attribute)
        ├── Slot rendering (renderSlots helper)
        └── Common utilities
              ├── sq-button, sq-input, sq-card, ...
              └── All other components</pre>
    </sq-card>

    <sq-divider></sq-divider>

    <!-- Component Categories -->
    <sq-heading level="2">Component Categories</sq-heading>
    <p>Components are organized into logical categories based on their primary purpose. This structure makes it easy to find the right component for any task.</p>

    <sq-flex gap="3" wrap>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Interactive</sq-heading>
        <p>Components that respond to user actions and manage state.</p>
        <sq-flex gap="1" wrap style="margin-top: 0.5rem;">
          <sq-tag>sq-button</sq-tag>
          <sq-tag>sq-dialog</sq-tag>
          <sq-tag>sq-accordion</sq-tag>
          <sq-tag>sq-carousel</sq-tag>
          <sq-tag>sq-switch</sq-tag>
          <sq-tag>sq-spinner</sq-tag>
          <sq-tag>sq-split-button</sq-tag>
          <sq-tag>sq-button-group</sq-tag>
          <sq-tag>sq-progress</sq-tag>
          <sq-tag>sq-meter</sq-tag>
          <sq-tag>sq-skeleton</sq-tag>
          <sq-tag>sq-collapsible</sq-tag>
          <sq-tag>sq-clipboard</sq-tag>
        </sq-flex>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Form</sq-heading>
        <p>Input controls for collecting and validating user data.</p>
        <sq-flex gap="1" wrap style="margin-top: 0.5rem;">
          <sq-tag>sq-input</sq-tag>
          <sq-tag>sq-textarea</sq-tag>
          <sq-tag>sq-select</sq-tag>
          <sq-tag>sq-checkbox</sq-tag>
          <sq-tag>sq-radio</sq-tag>
          <sq-tag>sq-range</sq-tag>
          <sq-tag>sq-color-picker</sq-tag>
          <sq-tag>sq-date-picker</sq-tag>
          <sq-tag>sq-file-upload</sq-tag>
          <sq-tag>sq-form</sq-tag>
          <sq-tag>sq-fieldset</sq-tag>
          <sq-tag>sq-label</sq-tag>
        </sq-flex>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Layout</sq-heading>
        <p>Structural components for organizing content and applying themes.</p>
        <sq-flex gap="1" wrap style="margin-top: 0.5rem;">
          <sq-tag>sq-container</sq-tag>
          <sq-tag>sq-card</sq-tag>
          <sq-tag>sq-grid</sq-tag>
          <sq-tag>sq-flex</sq-tag>
          <sq-tag>sq-stack</sq-tag>
          <sq-tag>sq-masonry</sq-tag>
          <sq-tag>sq-divider</sq-tag>
          <sq-tag>sq-theme</sq-tag>
        </sq-flex>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Navigation</sq-heading>
        <p>Components for wayfinding and page structure.</p>
        <sq-flex gap="1" wrap style="margin-top: 0.5rem;">
          <sq-tag>sq-link</sq-tag>
          <sq-tag>sq-breadcrumb</sq-tag>
          <sq-tag>sq-tabs</sq-tag>
          <sq-tag>sq-stepper</sq-tag>
          <sq-tag>sq-menu</sq-tag>
          <sq-tag>sq-pagination</sq-tag>
        </sq-flex>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Data Display</sq-heading>
        <p>Components for presenting information and data.</p>
        <sq-flex gap="1" wrap style="margin-top: 0.5rem;">
          <sq-tag>sq-table</sq-tag>
          <sq-tag>sq-tag</sq-tag>
          <sq-tag>sq-badge</sq-tag>
          <sq-tag>sq-avatar</sq-tag>
          <sq-tag>sq-timeline</sq-tag>
          <sq-tag>sq-timetree</sq-tag>
          <sq-tag>sq-tree</sq-tag>
          <sq-tag>sq-list</sq-tag>
        </sq-flex>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Text</sq-heading>
        <p>Typography and inline text formatting components.</p>
        <sq-flex gap="1" wrap style="margin-top: 0.5rem;">
          <sq-tag>sq-heading</sq-tag>
          <sq-tag>sq-text</sq-tag>
          <sq-tag>sq-code</sq-tag>
          <sq-tag>sq-mark</sq-tag>
          <sq-tag>sq-kbd</sq-tag>
          <sq-tag>sq-blockquote</sq-tag>
          <sq-tag>sq-caption</sq-tag>
        </sq-flex>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Media</sq-heading>
        <p>Components for images, audio, video, and embedded content.</p>
        <sq-flex gap="1" wrap style="margin-top: 0.5rem;">
          <sq-tag>sq-image</sq-tag>
          <sq-tag>sq-audio</sq-tag>
          <sq-tag>sq-video</sq-tag>
          <sq-tag>sq-iframe</sq-tag>
        </sq-flex>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Overlay</sq-heading>
        <p>Components that appear above the main content layer.</p>
        <sq-flex gap="1" wrap style="margin-top: 0.5rem;">
          <sq-tag>sq-tooltip</sq-tag>
          <sq-tag>sq-drawer</sq-tag>
          <sq-tag>sq-dropdown</sq-tag>
        </sq-flex>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Feedback</sq-heading>
        <p>Components that communicate status and alerts.</p>
        <sq-flex gap="1" wrap style="margin-top: 0.5rem;">
          <sq-tag>sq-alert</sq-tag>
        </sq-flex>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Semantic</sq-heading>
        <p>HTML5 semantic elements enhanced with styling and behavior.</p>
        <sq-flex gap="1" wrap style="margin-top: 0.5rem;">
          <sq-tag>sq-article</sq-tag>
          <sq-tag>sq-section</sq-tag>
          <sq-tag>sq-nav</sq-tag>
          <sq-tag>sq-header</sq-tag>
          <sq-tag>sq-footer</sq-tag>
          <sq-tag>sq-aside</sq-tag>
          <sq-tag>sq-main</sq-tag>
          <sq-tag>sq-search</sq-tag>
          <sq-tag>sq-hgroup</sq-tag>
        </sq-flex>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- Token System -->
    <sq-heading level="2">CSS Token System</sq-heading>
    <p>All visual design is controlled by CSS custom properties defined in <code>tokens.css</code>. This single source of truth ensures consistency across all components and enables the theme system.</p>

    <sq-card padded>
      <sq-heading level="3">Token Categories</sq-heading>
      <sq-flex gap="4" direction="column">
        <div>
          <strong>Backgrounds</strong> — <code>--sq-bg-default</code>, <code>--sq-bg-surface</code>, <code>--sq-bg-elevated</code>, <code>--sq-bg-inverse</code>
        </div>
        <div>
          <strong>Foreground</strong> — <code>--sq-fg-default</code>, <code>--sq-fg-muted</code>, <code>--sq-fg-on-accent</code>
        </div>
        <div>
          <strong>Accents</strong> — <code>--sq-accent-primary</code>, <code>--sq-accent-primary-hover</code>, <code>--sq-accent-primary-light</code>
        </div>
        <div>
          <strong>Semantics</strong> — <code>--sq-color-success</code>, <code>--sq-color-warning</code>, <code>--sq-color-danger</code>, <code>--sq-color-info</code>
        </div>
        <div>
          <strong>Typography</strong> — <code>--sq-text-xs</code> to <code>--sq-text-4xl</code>, <code>--sq-font-family</code>, <code>--sq-font-weight-*</code>
        </div>
        <div>
          <strong>Spacing</strong> — <code>--sq-space-1</code> to <code>--sq-space-8</code>
        </div>
        <div>
          <strong>Radius</strong> — <code>--sq-radius-sm</code>, <code>--sq-radius-md</code>, <code>--sq-radius-lg</code>, <code>--sq-radius-full</code>
        </div>
        <div>
          <strong>Shadows</strong> — <code>--sq-shadow-sm</code>, <code>--sq-shadow-md</code>, <code>--sq-shadow-lg</code>
        </div>
        <div>
          <strong>Borders</strong> — <code>--sq-border-subtle</code>, <code>--sq-border-default</code>, <code>--sq-border-strong</code>
        </div>
      </sq-flex>
    </sq-card>

    <sq-divider></sq-divider>

    <!-- Shadow DOM -->
    <sq-heading level="2">Shadow DOM Encapsulation</sq-heading>
    <p>Each component renders its template inside a Shadow DOM boundary. This means:</p>

    <sq-flex gap="3" wrap>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Style Isolation</sq-heading>
        <p>Global CSS cannot accidentally style component internals. Component styles cannot leak into the global scope. Each component is a self-contained island.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Theming via Host</sq-heading>
        <p>While internals are encapsulated, components expose styling hooks via <code>:host</code> selectors and CSS custom properties, allowing themes to control appearance from outside the shadow boundary.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Light DOM Slots</sq-heading>
        <p>Content is passed via standard HTML <code>&lt;slot&gt;</code> elements, keeping user content in the light DOM where it remains accessible to global styles, scripts, and assistive technologies.</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- LitElement Lifecycle -->
    <sq-heading level="2">LitElement Lifecycle</sq-heading>
    <p>Our components leverage LitElement's reactive properties and efficient rendering:</p>

    <sq-card padded>
      <pre style="font-family: var(--sq-font-mono); font-size: var(--sq-text-sm); overflow-x: auto; margin: 0; white-space: pre-wrap;">import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { SquiddyElement } from '../base-component.js';

export class SqButton extends SquiddyElement {
  @property({ type: String }) variant = 'primary';
  @property({ type: Boolean }) disabled = false;

  static styles = css\`
    :host { display: inline-block; }
    button {
      background: var(--sq-accent-primary);
      color: var(--sq-fg-on-accent);
      /* ... */
    }
  \`;

  render() {
    return html\`
      &lt;button ?disabled=${this.disabled}&gt;
        &lt;slot&gt;&lt;/slot&gt;
      &lt;/button&gt;
    \`;
  }
}</pre>
    </sq-card>

    <sq-divider></sq-divider>

    <!-- Import Patterns -->
    <sq-heading level="2">Import Patterns</sq-heading>
    <p>There are two ways to use Squiddy DS components:</p>

    <sq-flex gap="3" wrap>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Full Bundle</sq-heading>
        <p>Import everything at once. Convenient for projects that use many components.</p>
        <pre style="font-family: var(--sq-font-mono); font-size: var(--sq-text-sm); margin: 0.5rem 0 0 0;"><code>import '@squiddy/ds';</code></pre>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Individual Imports</sq-heading>
        <p>Import only what you need. Smaller bundle size for projects that use few components.</p>
        <pre style="font-family: var(--sq-font-mono); font-size: var(--sq-text-sm); margin: 0.5rem 0 0 0;"><code>import '@squiddy/ds/components/interactive/sq-button.js';
import '@squiddy/ds/components/form/sq-input.js';</code></pre>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- Design Tokens Flow -->
    <sq-heading level="2">Design Token Flow</sq-heading>
    <p>Understanding how design tokens flow through the system is key to customization:</p>

    <sq-card padded>
      <pre style="font-family: var(--sq-font-mono); font-size: var(--sq-text-sm); overflow-x: auto; margin: 0; white-space: pre-wrap;">1. tokens.css defines defaults on :root
       ↓
2. sq-theme overrides tokens via :host([sq-theme="name"])
       ↓
3. sq-mode overrides tokens via :host([sq-mode="dark"])
       ↓
4. Components consume tokens via var(--sq-*)
       ↓
5. Shadow DOM applies the resolved values</pre>
    </sq-card>

    <p>This cascade means themes can override any token, and components automatically pick up the changes without any code modification.</p>
  </sq-container>
`;

/* ======================================================================
   PHILOSOPHY
   Explains the guiding principles and values behind our work
   ====================================================================== */

export const Philosophy = () => html`
  <sq-container size="lg" padded>
    <sq-heading level="1">Our Philosophy</sq-heading>
    <p style="font-size: var(--sq-text-lg); color: var(--sq-fg-muted);">Squiddy DS is more than a collection of components — it's a set of beliefs about how the web should work, who it should serve, and how we build things together.</p>
    <sq-divider></sq-divider>

    <!-- Core Beliefs -->
    <sq-heading level="2">Core Beliefs</sq-heading>

    <sq-flex gap="3" wrap>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">The Platform Is the Product</sq-heading>
        <p>We build on web standards, not against them. Custom elements, Shadow DOM, CSS custom properties — these are the platform's native capabilities. When we use the platform, we build software that outlasts frameworks and trends.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Accessibility Is Not Optional</sq-heading>
        <p>Every component is accessible from day one, not as an afterthought. We follow WCAG guidelines, support keyboard navigation, provide proper ARIA semantics, and test with real assistive technologies. The web belongs to everyone.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Colorful By Design</sq-heading>
        <p>Inspired by the character SQ, we believe design systems don't have to be boring. Our theme system — from the signature rainbow to named color palettes — proves that accessibility and personality can coexist.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Simplicity Over Cleverness</sq-heading>
        <p>We prefer simple, understandable solutions over clever ones. A component should do one thing well. An API should be obvious. Code should read like documentation. Complexity is a liability, not a badge of honor.</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- Design Principles -->
    <sq-heading level="2">Design Principles</sq-heading>

    <sq-card padded>
      <sq-flex gap="4" direction="column">
        <div>
          <sq-heading level="3">1. Compose, Don't Configure</sq-heading>
          <p>Components should be combined like LEGO bricks, not configured through endless options. A form is built from inputs, labels, and fieldsets — not from a single mega-component with 50 props. Composition creates flexibility; configuration creates rigidity.</p>
        </div>
        <div>
          <sq-heading level="3">2. Progressive Enhancement</sq-heading>
          <p>Start with HTML, enhance with JavaScript. Our components degrade gracefully — even without JavaScript, the underlying HTML structure provides basic functionality. We enhance the experience, we don't replace it.</p>
        </div>
        <div>
          <sq-heading level="3">3. Consistency With Variation</sq-heading>
          <p>A design system provides consistency through shared tokens and patterns, but variation through themes and customization. The same button can feel at home in a corporate dashboard or a playful children's app, because the structure is consistent while the appearance adapts.</p>
        </div>
        <div>
          <sq-heading level="3">4. Developer Experience Matters</sq-heading>
          <p>Components are tools for developers. Clear documentation, sensible defaults, predictable APIs, and helpful error messages are not luxuries — they are requirements. A component that's hard to use will be replaced, no matter how beautiful it looks.</p>
        </div>
        <div>
          <sq-heading level="3">5. Performance Is a Feature</sq-heading>
          <p>Every millisecond counts. We use LitElement's efficient rendering, lazy-load components, minimize bundle size, and respect the user's device. A fast design system is an accessible design system.</p>
        </div>
      </sq-flex>
    </sq-card>

    <sq-divider></sq-divider>

    <!-- The SQ Character -->
    <sq-heading level="2">The SQ Character</sq-heading>
    <p>Our design system is named after and inspired by SQ, a colorful, vibrant character that embodies our belief that software can be both functional and fun. SQ reminds us that:</p>

    <sq-flex gap="3" wrap>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Personality Scales</sq-heading>
        <p>A design system with character doesn't just look better — it feels more human. SQ's rainbow palette isn't decoration; it's a statement that the tools we build should bring joy to the people who use them.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Inclusion Is Colorful</sq-heading>
        <p>Just as SQ embraces many colors, our system embraces many users. Different abilities, different preferences, different contexts — all are first-class citizens. The rainbow theme is our metaphor for inclusion made visible.</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- What We Build Against -->
    <sq-heading level="2">What We Build Against</sq-heading>
    <p>Our philosophy is also defined by what we reject:</p>

    <sq-flex gap="3" wrap>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">❌ Framework Lock-in</sq-heading>
        <p>We don't build components that only work in one framework. The web is bigger than any single ecosystem, and our components should be too.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">❌ Accessibility as an Afterthought</sq-heading>
        <p>We don't add accessibility at the end. It's baked into every component from the first line of code, because retrofitting accessibility is like retrofitting a foundation.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">❌ Boring by Default</sq-heading>
        <p>We don't believe that "professional" means "beige." Our default theme has personality, and the theme system makes it easy to express even more.</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">❌ Magic Over Clarity</sq-heading>
        <p>We don't hide complexity behind clever abstractions. If a developer can't understand how a component works by reading the code, we've failed.</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- Our Commitment -->
    <sq-heading level="2">Our Commitment</sq-heading>

    <sq-card padded>
      <sq-flex gap="4" direction="column">
        <div>
          <sq-heading level="3">To Developers</sq-heading>
          <p>We will provide components that are well-documented, well-tested, and easy to use. We will listen to feedback and iterate. We will not break backward compatibility without good reason and clear migration paths.</p>
        </div>
        <div>
          <sq-heading level="3">To Users</sq-heading>
          <p>We will build accessible, performant, and beautiful interfaces. We will respect system preferences, support keyboard navigation, and ensure every user can interact with every component regardless of ability.</p>
        </div>
        <div>
          <sq-heading level="3">To the Web</sq-heading>
          <p>We will champion web standards, contribute to the ecosystem, and build software that works across browsers and devices. We believe in an open, interoperable web that belongs to everyone.</p>
        </div>
      </sq-flex>
    </sq-card>

    <sq-divider></sq-divider>

    <!-- Closing -->
    <sq-theme sq-theme="sq-theme">
      <sq-card padded>
        <sq-heading level="3">Built With Purpose</sq-heading>
        <p>Squiddy DS exists because we believe the web deserves better building blocks. Not just functional, but delightful. Not just accessible, but inclusive. Not just consistent, but colorful. Every component we ship carries these values forward.</p>
        <sq-divider></sq-divider>
        <sq-flex gap="2" wrap>
          <sq-badge variant="primary">Web Standards</sq-badge>
          <sq-badge variant="success">Accessible</sq-badge>
          <sq-badge variant="info">Colorful</sq-badge>
          <sq-badge variant="warning">Open Source</sq-badge>
        </sq-flex>
      </sq-card>
    </sq-theme>

    <sq-divider></sq-divider>

    <p style="text-align: center; color: var(--sq-fg-muted); font-size: var(--sq-text-sm);">
      Inspired by SQ. Built for the web. Made for everyone.
    </p>
  </sq-container>
`;

/* ======================================================================
   DESIGN TOKENS
   Visual showcase of all design tokens grouped by category
   ====================================================================== */

export const DesignTokens = () => html`
  <sq-container size="lg" padded>
    <sq-heading level="1">Design Tokens</sq-heading>
    <p style="font-size: var(--sq-text-lg); color: var(--sq-fg-muted);">Design tokens are the atomic building blocks of Squiddy DS. They define colors, spacing, typography, shadows, and more — ensuring consistency across every component. All tokens are CSS custom properties that can be overridden via themes.</p>
    <sq-divider></sq-divider>

    <!-- ==========================================
         BACKGROUNDS
         ========================================== -->
    <sq-heading level="2">Backgrounds</sq-heading>
    <p>Background tokens define the surface colors used throughout the design system. Each token serves a specific layering purpose.</p>

    <sq-flex gap="3" wrap style="margin-bottom: 1rem;">
      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-bg-default); border: 1px solid var(--sq-border-subtle); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">
          --sq-bg-default
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#FCF7ED</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Page background</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-bg-surface); border: 1px solid var(--sq-border-subtle); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">
          --sq-bg-surface
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#FFFDF8</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Card and section surfaces</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-bg-elevated); border: 1px solid var(--sq-border-subtle); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">
          --sq-bg-elevated
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#FFFFFF</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Popups and dropdowns</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-bg-inverse); border: 1px solid var(--sq-border-subtle); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-fg-inverse);">
          --sq-bg-inverse
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#370130</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Inverse/hero backgrounds</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-bg-subtle); border: 1px solid var(--sq-border-subtle); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">
          --sq-bg-subtle
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#e5e7eb</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Disabled and subtle states</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-bg-header); border: 1px solid var(--sq-border-subtle); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">
          --sq-bg-header
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#f3f4f6</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Table and nav headers</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- ==========================================
         FOREGROUND / TEXT
         ========================================== -->
    <sq-heading level="2">Foreground / Text</sq-heading>
    <p>Foreground tokens control text and icon colors. They ensure readable contrast against background surfaces.</p>

    <sq-flex gap="3" wrap style="margin-bottom: 1rem;">
      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-fg-default); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-fg-inverse);">
          --sq-fg-default
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#370130</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Primary text color</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-fg-muted); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-fg-inverse);">
          --sq-fg-muted
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#BB5DAF</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Secondary and helper text</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-fg-inverse); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-bg-inverse);">
          --sq-fg-inverse
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#FFFDF8</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Text on dark backgrounds</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-fg-link); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-fg-inverse);">
          --sq-fg-link
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#AF019A</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Link text color</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-fg-link-hover); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-fg-inverse);">
          --sq-fg-link-hover
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#FE00F0</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Link hover color</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- ==========================================
         BORDERS
         ========================================== -->
    <sq-heading level="2">Borders</sq-heading>
    <p>Border tokens define the visual separation between elements, from subtle dividers to focus indicators.</p>

    <sq-flex gap="3" wrap style="margin-bottom: 1rem;">
      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); border: 2px solid var(--sq-border-default); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">
          --sq-border-default
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#AF019A</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Standard border</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); border: 2px solid var(--sq-border-subtle); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">
          --sq-border-subtle
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">rgba(175, 1, 154, 0.2)</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Subtle divider</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); border: 2px solid var(--sq-border-focus); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">
          --sq-border-focus
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#FE00F0</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Focus ring color</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- ==========================================
         ACCENT COLORS
         ========================================== -->
    <sq-heading level="2">Accent Colors</sq-heading>
    <p>Accent tokens define the primary interactive colors — buttons, links, and active states. These are the most themeable tokens in the system.</p>

    <sq-flex gap="3" wrap style="margin-bottom: 1rem;">
      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-accent-primary); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-fg-inverse);">
          --sq-accent-primary
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#FE00F0</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Primary button and accent</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-accent-primary-hover); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-fg-inverse);">
          --sq-accent-primary-hover
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#E300C9</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Hover state</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-accent-primary-active); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-fg-inverse);">
          --sq-accent-primary-active
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#C700AD</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Active/pressed state</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-accent-primary-light); border: 1px solid var(--sq-border-subtle); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">
          --sq-accent-primary-light
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">rgba(254, 0, 240, 0.1)</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Light tint for backgrounds</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-accent-primary-light-hover); border: 1px solid var(--sq-border-subtle); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">
          --sq-accent-primary-light-hover
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">rgba(254, 0, 240, 0.18)</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Light tint hover</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- ==========================================
         SEMANTIC COLORS
         ========================================== -->
    <sq-heading level="2">Semantic Colors</sq-heading>
    <p>Semantic tokens communicate status: success, warning, danger, and information. Each has a solid and light variant for backgrounds.</p>

    <sq-flex gap="3" wrap style="margin-bottom: 1rem;">
      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-color-success); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: white;">
          --sq-color-success
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#16a34a</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Success state</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-color-success-light); border: 1px solid var(--sq-border-subtle); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-color-success);">
          --sq-color-success-light
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">rgba(22, 163, 74, 0.1)</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Success background tint</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-color-warning); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: white;">
          --sq-color-warning
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#d97706</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Warning state</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-color-warning-light); border: 1px solid var(--sq-border-subtle); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-color-warning);">
          --sq-color-warning-light
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">rgba(217, 119, 6, 0.1)</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Warning background tint</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-color-danger); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: white;">
          --sq-color-danger
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#B42318</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Error/danger state</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-color-danger-light); border: 1px solid var(--sq-border-subtle); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-color-danger);">
          --sq-color-danger-light
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">rgba(180, 35, 24, 0.1)</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Danger background tint</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-color-info); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: white;">
          --sq-color-info
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">#2563eb</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Informational state</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <div style="width: 100%; height: 80px; border-radius: var(--sq-radius-md); background: var(--sq-color-info-light); border: 1px solid var(--sq-border-subtle); display: flex; align-items: center; justify-content: center; font-size: var(--sq-text-xs); color: var(--sq-color-info);">
          --sq-color-info-light
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">rgba(37, 99, 235, 0.1)</p>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Info background tint</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- ==========================================
         TYPOGRAPHY SCALE
         ========================================== -->
    <sq-heading level="2">Typography Scale</sq-heading>
    <p>Typography tokens define the type scale, from small helper text to large display headings. All sizes are relative (rem) for accessibility.</p>

    <sq-card padded style="margin-bottom: 1rem;">
      <sq-flex gap="4" direction="column">
        <div style="display: flex; align-items: baseline; gap: 1rem; border-bottom: 1px solid var(--sq-border-subtle); padding-bottom: 0.5rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 140px;">--sq-text-xs</span>
          <span style="font-size: var(--sq-text-xs);">12px — Tiny labels and captions</span>
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-left: auto;">0.75rem</span>
        </div>
        <div style="display: flex; align-items: baseline; gap: 1rem; border-bottom: 1px solid var(--sq-border-subtle); padding-bottom: 0.5rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 140px;">--sq-text-sm</span>
          <span style="font-size: var(--sq-text-sm);">14px — Helper text and metadata</span>
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-left: auto;">0.875rem</span>
        </div>
        <div style="display: flex; align-items: baseline; gap: 1rem; border-bottom: 1px solid var(--sq-border-subtle); padding-bottom: 0.5rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 140px;">--sq-text-md</span>
          <span style="font-size: var(--sq-text-md);">16px — Body text (default)</span>
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-left: auto;">1rem</span>
        </div>
        <div style="display: flex; align-items: baseline; gap: 1rem; border-bottom: 1px solid var(--sq-border-subtle); padding-bottom: 0.5rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 140px;">--sq-text-lg</span>
          <span style="font-size: var(--sq-text-lg);">18px — Lead paragraphs</span>
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-left: auto;">1.125rem</span>
        </div>
        <div style="display: flex; align-items: baseline; gap: 1rem; border-bottom: 1px solid var(--sq-border-subtle); padding-bottom: 0.5rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 140px;">--sq-text-xl</span>
          <span style="font-size: var(--sq-text-xl);">20px — Subheadings</span>
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-left: auto;">1.25rem</span>
        </div>
        <div style="display: flex; align-items: baseline; gap: 1rem; border-bottom: 1px solid var(--sq-border-subtle); padding-bottom: 0.5rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 140px;">--sq-text-2xl</span>
          <span style="font-size: var(--sq-text-2xl);">24px — Section headings</span>
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-left: auto;">1.5rem</span>
        </div>
        <div style="display: flex; align-items: baseline; gap: 1rem; border-bottom: 1px solid var(--sq-border-subtle); padding-bottom: 0.5rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 140px;">--sq-text-3xl</span>
          <span style="font-size: var(--sq-text-3xl);">30px — Page headings</span>
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-left: auto;">1.875rem</span>
        </div>
        <div style="display: flex; align-items: baseline; gap: 1rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 140px;">--sq-text-4xl</span>
          <span style="font-size: var(--sq-text-4xl);">36px — Display text</span>
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-left: auto;">2.25rem</span>
        </div>
      </sq-flex>
    </sq-card>

    <sq-divider></sq-divider>

    <!-- ==========================================
         FONT SETTINGS
         ========================================== -->
    <sq-heading level="2">Font Settings</sq-heading>
    <p>Font tokens control the typeface, weights, and line heights used across all components.</p>

    <sq-flex gap="3" wrap style="margin-bottom: 1rem;">
      <sq-card padded style="flex: 1; min-width: 300px;">
        <sq-heading level="3">Font Families</sq-heading>
        <div style="margin-bottom: 1rem;">
          <p style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-bottom: 0.25rem;">--sq-font-family</p>
          <p style="font-family: var(--sq-font-family);">System UI sans-serif stack — clean, native feel on every platform.</p>
        </div>
        <div>
          <p style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-bottom: 0.25rem;">--sq-font-mono</p>
          <p style="font-family: var(--sq-font-mono);">Monospace for code, data, and technical content.</p>
        </div>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 300px;">
        <sq-heading level="3">Font Weights</sq-heading>
        <sq-flex gap="3" direction="column">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 160px;">--sq-font-weight-normal</span>
            <span style="font-weight: 400;">400 — Regular body text</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 160px;">--sq-font-weight-medium</span>
            <span style="font-weight: 500;">500 — Subtle emphasis</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 160px;">--sq-font-weight-semibold</span>
            <span style="font-weight: 600;">600 — Headings and buttons</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 160px;">--sq-font-weight-bold</span>
            <span style="font-weight: 700;">700 — Strong emphasis</span>
          </div>
        </sq-flex>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 300px;">
        <sq-heading level="3">Line Heights</sq-heading>
        <sq-flex gap="3" direction="column">
          <div>
            <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">--sq-line-height-tight</span>
            <p style="line-height: 1.25; margin-top: 0.25rem;">1.25 — Headings and compact text. Tighter spacing for visual density.</p>
          </div>
          <div>
            <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">--sq-line-height-normal</span>
            <p style="line-height: 1.5; margin-top: 0.25rem;">1.5 — Default body text. Balanced readability for most content.</p>
          </div>
          <div>
            <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">--sq-line-height-relaxed</span>
            <p style="line-height: 1.75; margin-top: 0.25rem;">1.75 — Long-form reading. Extra breathing room for articles and documentation.</p>
          </div>
        </sq-flex>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- ==========================================
         SPACING SCALE
         ========================================== -->
    <sq-heading level="2">Spacing Scale</sq-heading>
    <p>Spacing tokens provide a consistent rhythm for padding, margins, and gaps. Visualized as bars proportional to their pixel values.</p>

    <sq-card padded style="margin-bottom: 1rem;">
      <sq-flex gap="3" direction="column">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 120px;">--sq-space-1</span>
          <div style="height: 24px; background: var(--sq-accent-primary); border-radius: var(--sq-radius-sm); width: var(--sq-space-1);"></div>
          <span style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">4px</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 120px;">--sq-space-2</span>
          <div style="height: 24px; background: var(--sq-accent-primary); border-radius: var(--sq-radius-sm); width: var(--sq-space-2);"></div>
          <span style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">8px</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 120px;">--sq-space-3</span>
          <div style="height: 24px; background: var(--sq-accent-primary); border-radius: var(--sq-radius-sm); width: var(--sq-space-3);"></div>
          <span style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">12px</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 120px;">--sq-space-4</span>
          <div style="height: 24px; background: var(--sq-accent-primary); border-radius: var(--sq-radius-sm); width: var(--sq-space-4);"></div>
          <span style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">16px</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 120px;">--sq-space-5</span>
          <div style="height: 24px; background: var(--sq-accent-primary); border-radius: var(--sq-radius-sm); width: var(--sq-space-5);"></div>
          <span style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">20px</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 120px;">--sq-space-6</span>
          <div style="height: 24px; background: var(--sq-accent-primary); border-radius: var(--sq-radius-sm); width: var(--sq-space-6);"></div>
          <span style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">24px</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 120px;">--sq-space-8</span>
          <div style="height: 24px; background: var(--sq-accent-primary); border-radius: var(--sq-radius-sm); width: var(--sq-space-8);"></div>
          <span style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">32px</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 120px;">--sq-space-10</span>
          <div style="height: 24px; background: var(--sq-accent-primary); border-radius: var(--sq-radius-sm); width: var(--sq-space-10);"></div>
          <span style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">40px</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 120px;">--sq-space-12</span>
          <div style="height: 24px; background: var(--sq-accent-primary); border-radius: var(--sq-radius-sm); width: var(--sq-space-12);"></div>
          <span style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">48px</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 120px;">--sq-space-16</span>
          <div style="height: 24px; background: var(--sq-accent-primary); border-radius: var(--sq-radius-sm); width: var(--sq-space-16);"></div>
          <span style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">64px</span>
        </div>
      </sq-flex>
    </sq-card>

    <sq-divider></sq-divider>

    <!-- ==========================================
         BORDER RADIUS
         ========================================== -->
    <sq-heading level="2">Border Radius</sq-heading>
    <p>Radius tokens control the roundness of corners, from sharp edges to fully rounded pills.</p>

    <sq-flex gap="3" wrap style="margin-bottom: 1rem;">
      <sq-card padded style="flex: 1; min-width: 150px; text-align: center;">
        <div style="width: 80px; height: 80px; margin: 0 auto; background: var(--sq-accent-primary-light); border: 2px solid var(--sq-accent-primary); border-radius: var(--sq-radius-none);"></div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">--sq-radius-none</p>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">0px — Sharp</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 150px; text-align: center;">
        <div style="width: 80px; height: 80px; margin: 0 auto; background: var(--sq-accent-primary-light); border: 2px solid var(--sq-accent-primary); border-radius: var(--sq-radius-sm);"></div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">--sq-radius-sm</p>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">4px — Subtle</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 150px; text-align: center;">
        <div style="width: 80px; height: 80px; margin: 0 auto; background: var(--sq-accent-primary-light); border: 2px solid var(--sq-accent-primary); border-radius: var(--sq-radius-md);"></div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">--sq-radius-md</p>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">8px — Default</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 150px; text-align: center;">
        <div style="width: 80px; height: 80px; margin: 0 auto; background: var(--sq-accent-primary-light); border: 2px solid var(--sq-accent-primary); border-radius: var(--sq-radius-lg);"></div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">--sq-radius-lg</p>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">12px — Rounded</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 150px; text-align: center;">
        <div style="width: 80px; height: 80px; margin: 0 auto; background: var(--sq-accent-primary-light); border: 2px solid var(--sq-accent-primary); border-radius: var(--sq-radius-xl);"></div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">--sq-radius-xl</p>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">16px — Extra rounded</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 150px; text-align: center;">
        <div style="width: 80px; height: 80px; margin: 0 auto; background: var(--sq-accent-primary-light); border: 2px solid var(--sq-accent-primary); border-radius: var(--sq-radius-full);"></div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">--sq-radius-full</p>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">9999px — Pill</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- ==========================================
         SHADOWS
         ========================================== -->
    <sq-heading level="2">Shadows</sq-heading>
    <p>Shadow tokens create depth and elevation. They increase in intensity to indicate visual hierarchy.</p>

    <sq-flex gap="3" wrap style="margin-bottom: 1rem;">
      <sq-card padded style="flex: 1; min-width: 200px; text-align: center;">
        <div style="width: 120px; height: 120px; margin: 0 auto; background: var(--sq-bg-surface); border-radius: var(--sq-radius-md); box-shadow: var(--sq-shadow-sm);"></div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">--sq-shadow-sm</p>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">Subtle elevation</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px; text-align: center;">
        <div style="width: 120px; height: 120px; margin: 0 auto; background: var(--sq-bg-surface); border-radius: var(--sq-radius-md); box-shadow: var(--sq-shadow-md);"></div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">--sq-shadow-md</p>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">Medium elevation</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px; text-align: center;">
        <div style="width: 120px; height: 120px; margin: 0 auto; background: var(--sq-bg-surface); border-radius: var(--sq-radius-md); box-shadow: var(--sq-shadow-lg);"></div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">--sq-shadow-lg</p>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">High elevation</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- ==========================================
         MOTION
         ========================================== -->
    <sq-heading level="2">Motion</sq-heading>
    <p>Motion tokens define the timing and easing of animations, creating a consistent feel for transitions.</p>

    <sq-flex gap="3" wrap style="margin-bottom: 1rem;">
      <sq-card padded style="flex: 1; min-width: 200px;">
        <sq-heading level="3">Fast</sq-heading>
        <div style="width: 100%; height: 60px; background: var(--sq-accent-primary-light); border-radius: var(--sq-radius-md); display: flex; align-items: center; justify-content: center;">
          <div style="width: 32px; height: 32px; background: var(--sq-accent-primary); border-radius: var(--sq-radius-sm); animation: token-pulse 120ms ease-out infinite alternate;"></div>
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">--sq-motion-fast</p>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">120ms ease-out — Micro-interactions</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <sq-heading level="3">Base</sq-heading>
        <div style="width: 100%; height: 60px; background: var(--sq-accent-primary-light); border-radius: var(--sq-radius-md); display: flex; align-items: center; justify-content: center;">
          <div style="width: 32px; height: 32px; background: var(--sq-accent-primary); border-radius: var(--sq-radius-sm); animation: token-pulse 200ms ease infinite alternate;"></div>
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">--sq-motion-base</p>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">200ms ease — Standard transitions</p>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 200px;">
        <sq-heading level="3">Slow</sq-heading>
        <div style="width: 100%; height: 60px; background: var(--sq-accent-primary-light); border-radius: var(--sq-radius-md); display: flex; align-items: center; justify-content: center;">
          <div style="width: 32px; height: 32px; background: var(--sq-accent-primary); border-radius: var(--sq-radius-sm); animation: token-pulse 350ms ease infinite alternate;"></div>
        </div>
        <p style="margin-top: 0.5rem; font-family: var(--sq-font-mono); font-size: var(--sq-text-xs);">--sq-motion-slow</p>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">350ms ease — Page transitions</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- ==========================================
         Z-INDEX SCALE
         ========================================== -->
    <sq-heading level="2">Z-Index Scale</sq-heading>
    <p>Z-index tokens establish a stacking order for overlays, ensuring modals always appear above tooltips and dropdowns don't cover sticky elements.</p>

    <sq-card padded style="margin-bottom: 1rem;">
      <sq-flex gap="3" direction="column">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 140px;">--sq-z-dropdown</span>
          <sq-badge variant="info">100</sq-badge>
          <span style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Dropdown menus and popovers</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 140px;">--sq-z-sticky</span>
          <sq-badge variant="info">200</sq-badge>
          <span style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Sticky headers and footers</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 140px;">--sq-z-overlay</span>
          <sq-badge variant="info">300</sq-badge>
          <span style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Backdrop overlays</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 140px;">--sq-z-modal</span>
          <sq-badge variant="info">400</sq-badge>
          <span style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Modal dialogs and drawers</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-family: var(--sq-font-mono); font-size: var(--sq-text-xs); color: var(--sq-fg-muted); min-width: 140px;">--sq-z-tooltip</span>
          <sq-badge variant="info">500</sq-badge>
          <span style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Tooltips (always on top)</span>
        </div>
      </sq-flex>
    </sq-card>

    <sq-divider></sq-divider>

    <!-- ==========================================
         DARK MODE COMPARISON
         ========================================== -->
    <sq-heading level="2">Dark Mode Token Changes</sq-heading>
    <p>When <code>sq-mode="dark"</code> is set, these tokens change to provide a comfortable dark experience. Below is a side-by-side comparison of key tokens.</p>

    <sq-flex gap="3" wrap style="margin-bottom: 1rem;">
      <sq-card padded style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Light Mode</sq-heading>
        <sq-flex gap="2" direction="column">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 32px; height: 32px; border-radius: var(--sq-radius-sm); background: #FCF7ED; border: 1px solid var(--sq-border-subtle);"></div>
            <span style="font-size: var(--sq-text-sm);">bg-default: #FCF7ED</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 32px; height: 32px; border-radius: var(--sq-radius-sm); background: #370130;"></div>
            <span style="font-size: var(--sq-text-sm);">fg-default: #370130</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 32px; height: 32px; border-radius: var(--sq-radius-sm); background: #FE00F0;"></div>
            <span style="font-size: var(--sq-text-sm);">accent: #FE00F0</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 32px; height: 32px; border-radius: var(--sq-radius-sm); background: #AF019A;"></div>
            <span style="font-size: var(--sq-text-sm);">border: #AF019A</span>
          </div>
        </sq-flex>
      </sq-card>

      <sq-card padded sq-mode="dark" style="flex: 1; min-width: 280px;">
        <sq-heading level="3">Dark Mode</sq-heading>
        <sq-flex gap="2" direction="column">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 32px; height: 32px; border-radius: var(--sq-radius-sm); background: #1A0F23; border: 1px solid rgba(217, 70, 239, 0.12);"></div>
            <span style="font-size: var(--sq-text-sm);">bg-default: #1A0F23</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 32px; height: 32px; border-radius: var(--sq-radius-sm); background: #F0ABFC;"></div>
            <span style="font-size: var(--sq-text-sm);">fg-default: #F0ABFC</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 32px; height: 32px; border-radius: var(--sq-radius-sm); background: #D946EF;"></div>
            <span style="font-size: var(--sq-text-sm);">accent: #D946EF</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 32px; height: 32px; border-radius: var(--sq-radius-sm); background: rgba(217, 70, 239, 0.3); border: 1px solid rgba(217, 70, 239, 0.12);"></div>
            <span style="font-size: var(--sq-text-sm);">border: rgba(217,70,239,0.3)</span>
          </div>
        </sq-flex>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- ==========================================
         TOKEN USAGE EXAMPLE
         ========================================== -->
    <sq-heading level="2">Using Tokens in Components</sq-heading>
    <p>Every component consumes design tokens via CSS <code>var()</code> functions. This means themes can override any token, and all components automatically adapt.</p>

    <sq-card padded>
      <pre style="font-family: var(--sq-font-mono); font-size: var(--sq-text-sm); overflow-x: auto; margin: 0; white-space: pre-wrap;">/* Component CSS uses tokens */
button {
  background: var(--sq-accent-primary);
  color: var(--sq-fg-inverse);
  border-radius: var(--sq-radius-md);
  padding: var(--sq-space-2) var(--sq-space-4);
  font-size: var(--sq-text-md);
  transition: var(--sq-transition-color);
}

/* Theme overrides change the token */
:host([sq-theme="red"]) {
  --sq-accent-primary: #DC2626;
  --sq-accent-primary-hover: #B91C1C;
}

/* The component automatically uses the new color */</pre>
    </sq-card>

    <sq-divider></sq-divider>

    <!-- ==========================================
         TOKEN SUMMARY TABLE
         ========================================== -->
    <sq-heading level="2">Token Summary</sq-heading>
    <p>A quick reference of all token categories and their count.</p>

    <sq-flex gap="3" wrap>
      <sq-card padded style="flex: 1; min-width: 180px; text-align: center;">
        <div style="font-size: var(--sq-text-3xl); font-weight: var(--sq-font-weight-bold); color: var(--sq-accent-primary);">6</div>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Backgrounds</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 180px; text-align: center;">
        <div style="font-size: var(--sq-text-3xl); font-weight: var(--sq-font-weight-bold); color: var(--sq-accent-primary);">5</div>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Foreground</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 180px; text-align: center;">
        <div style="font-size: var(--sq-text-3xl); font-weight: var(--sq-font-weight-bold); color: var(--sq-accent-primary);">3</div>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Borders</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 180px; text-align: center;">
        <div style="font-size: var(--sq-text-3xl); font-weight: var(--sq-font-weight-bold); color: var(--sq-accent-primary);">5</div>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Accents</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 180px; text-align: center;">
        <div style="font-size: var(--sq-text-3xl); font-weight: var(--sq-font-weight-bold); color: var(--sq-accent-primary);">8</div>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Semantics</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 180px; text-align: center;">
        <div style="font-size: var(--sq-text-3xl); font-weight: var(--sq-font-weight-bold); color: var(--sq-accent-primary);">8</div>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Type Sizes</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 180px; text-align: center;">
        <div style="font-size: var(--sq-text-3xl); font-weight: var(--sq-font-weight-bold); color: var(--sq-accent-primary);">10</div>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Spacing</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 180px; text-align: center;">
        <div style="font-size: var(--sq-text-3xl); font-weight: var(--sq-font-weight-bold); color: var(--sq-accent-primary);">6</div>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Radius</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 180px; text-align: center;">
        <div style="font-size: var(--sq-text-3xl); font-weight: var(--sq-font-weight-bold); color: var(--sq-accent-primary);">3</div>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Shadows</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 180px; text-align: center;">
        <div style="font-size: var(--sq-text-3xl); font-weight: var(--sq-font-weight-bold); color: var(--sq-accent-primary);">3</div>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Motion</p>
      </sq-card>
      <sq-card padded style="flex: 1; min-width: 180px; text-align: center;">
        <div style="font-size: var(--sq-text-3xl); font-weight: var(--sq-font-weight-bold); color: var(--sq-accent-primary);">5</div>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Z-Index</p>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <p style="text-align: center; color: var(--sq-fg-muted); font-size: var(--sq-text-sm);">
      All tokens are defined in <code>tokens.css</code> and can be overridden via <code>&lt;sq-theme&gt;</code> or custom CSS.
    </p>
  </sq-container>
`;

/* ======================================================================
   OVERVIEW
   The main landing page showcasing the SQ mascot and all components
   ====================================================================== */

export const Overview = () => html`
  <sq-container size="xl" padded>
    <!-- ==========================================
         HERO SECTION WITH MASCOT
         ========================================== -->
    <div style="text-align: center; padding: 3rem 1rem; background: linear-gradient(135deg, var(--sq-accent-primary-light), var(--sq-bg-surface)); border-radius: var(--sq-radius-xl); margin-bottom: 2rem;">
      <div style="display: flex; align-items: center; justify-content: center; gap: 2rem; flex-wrap: wrap;">
        <img src="/sq-mascot.png" alt="SQ - Squiddy Design System mascot" style="width: 200px; height: auto; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));" />
        <div style="max-width: 500px; text-align: left;">
          <sq-heading level="1">Squiddy Design System</sq-heading>
          <p style="font-size: var(--sq-text-xl); color: var(--sq-fg-muted); margin-bottom: 1rem;">A colorful, accessible, and framework-agnostic component library built for the modern web.</p>
          <sq-flex gap="2">
            <sq-button variant="primary">Get Started</sq-button>
            <sq-button variant="outline">View Components</sq-button>
          </sq-flex>
        </div>
      </div>
    </div>

    <sq-divider></sq-divider>

    <!-- ==========================================
         COMPONENT CATEGORIES
         ========================================== -->
    <sq-heading level="2">Component Categories</sq-heading>
    <p style="font-size: var(--sq-text-lg); color: var(--sq-fg-muted); margin-bottom: 1.5rem;">Explore our comprehensive library of web components, organized by category.</p>

    <sq-flex gap="3" wrap style="margin-bottom: 2rem;">
      <sq-card padded style="flex: 1; min-width: 250px;">
        <sq-heading level="3">Interactive</sq-heading>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted); margin-bottom: 1rem;">Buttons, accordions, and split buttons for user interactions.</p>
        <sq-flex gap="1">
          <sq-button variant="primary" size="sm">Primary</sq-button>
          <sq-button variant="secondary" size="sm">Secondary</sq-button>
          <sq-button variant="ghost" size="sm">Ghost</sq-button>
        </sq-flex>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 250px;">
        <sq-heading level="3">Form</sq-heading>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted); margin-bottom: 1rem;">Inputs, selects, checkboxes, and more for data collection.</p>
        <sq-flex gap="1" direction="column">
          <sq-input placeholder="Enter text..." style="width: 100%;"></sq-input>
          <sq-select style="width: 100%;">
            <option>Select an option...</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </sq-select>
        </sq-flex>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 250px;">
        <sq-heading level="3">Navigation</sq-heading>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted); margin-bottom: 1rem;">Tabs, breadcrumbs, steppers, and links for wayfinding.</p>
        <sq-tabs>
          <sq-tab tab="tab1" label="Tab 1">Content 1</sq-tab>
          <sq-tab tab="tab2" label="Tab 2">Content 2</sq-tab>
        </sq-tabs>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 250px;">
        <sq-heading level="3">Data Display</sq-heading>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted); margin-bottom: 1rem;">Tables, tags, badges, and avatars for presenting information.</p>
        <sq-flex gap="1" wrap>
          <sq-tag variant="primary">Primary</sq-tag>
          <sq-tag variant="success">Success</sq-tag>
          <sq-badge variant="info">New</sq-badge>
          <sq-badge variant="warning">Beta</sq-badge>
        </sq-flex>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 250px;">
        <sq-heading level="3">Media</sq-heading>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted); margin-bottom: 1rem;">Audio and video players with custom controls.</p>
        <sq-audio src="" controls></sq-audio>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 250px;">
        <sq-heading level="3">Feedback</sq-heading>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted); margin-bottom: 1rem;">Alerts, progress bars, meters, and spinners for status updates.</p>
        <sq-alert variant="info" style="width: 100%;">Information message</sq-alert>
        <sq-progress value="70" style="width: 100%; margin-top: 0.5rem;"></sq-progress>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 250px;">
        <sq-heading level="3">Overlay</sq-heading>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted); margin-bottom: 1rem;">Dialogs, drawers, tooltips, and dropdowns for layered content.</p>
        <sq-flex gap="1">
          <sq-button variant="outline" size="sm">Dialog</sq-button>
          <sq-button variant="outline" size="sm">Drawer</sq-button>
        </sq-flex>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 250px;">
        <sq-heading level="3">Layout</sq-heading>
        <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted); margin-bottom: 1rem;">Containers, grids, flex, and dividers for structure.</p>
        <sq-flex gap="1">
          <div style="height: 30px; width: 50px; background: var(--sq-accent-primary-light); border-radius: var(--sq-radius-sm);"></div>
          <div style="height: 30px; width: 50px; background: var(--sq-accent-primary); border-radius: var(--sq-radius-sm);"></div>
          <div style="height: 30px; width: 50px; background: var(--sq-accent-primary-hover); border-radius: var(--sq-radius-sm);"></div>
        </sq-flex>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- ==========================================
         INTERACTIVE DEMO SECTION
         ========================================== -->
    <sq-heading level="2">Interactive Demo</sq-heading>
    <p style="font-size: var(--sq-text-lg); color: var(--sq-fg-muted); margin-bottom: 1.5rem;">Try out our components in action.</p>

    <sq-flex gap="3" wrap style="margin-bottom: 2rem;">
      <!-- Form Demo -->
      <sq-card padded style="flex: 1; min-width: 300px;">
        <sq-heading level="3">Form Controls</sq-heading>
        <sq-flex gap="2" direction="column" style="margin-top: 1rem;">
          <sq-input placeholder="Username" style="width: 100%;"></sq-input>
          <sq-textarea placeholder="Bio" rows="3" style="width: 100%;"></sq-textarea>
          <sq-range min="0" max="100" value="50" style="width: 100%;"></sq-range>
          <sq-checkbox>Remember me</sq-checkbox>
          <sq-radio name="theme" value="light">Light mode</sq-radio>
          <sq-radio name="theme" value="dark">Dark mode</sq-radio>
          <sq-switch>Enable notifications</sq-switch>
        </sq-flex>
      </sq-card>

      <!-- Feedback Demo -->
      <sq-card padded style="flex: 1; min-width: 300px;">
        <sq-heading level="3">Feedback Components</sq-heading>
        <sq-flex gap="2" direction="column" style="margin-top: 1rem;">
          <sq-alert variant="success" style="width: 100%;">✓ Operation completed successfully</sq-alert>
          <sq-alert variant="warning" style="width: 100%;">⚠ Warning: Please review your input</sq-alert>
          <sq-alert variant="danger" style="width: 100%;">✕ Error: Something went wrong</sq-alert>
          <sq-progress value="65" style="width: 100%;"></sq-progress>
          <sq-meter value="0.7" style="width: 100%;"></sq-meter>
          <sq-spinner></sq-spinner>
        </sq-flex>
      </sq-card>

      <!-- Navigation Demo -->
      <sq-card padded style="flex: 1; min-width: 300px;">
        <sq-heading level="3">Navigation</sq-heading>
        <sq-flex gap="2" direction="column" style="margin-top: 1rem;">
          <sq-breadcrumb>
            <sq-breadcrumb-item>Home</sq-breadcrumb-item>
            <sq-breadcrumb-item>Components</sq-breadcrumb-item>
            <sq-breadcrumb-item current>Overview</sq-breadcrumb-item>
          </sq-breadcrumb>
          <sq-stepper>
            <sq-step label="Step 1" completed></sq-step>
            <sq-step label="Step 2" active></sq-step>
            <sq-step label="Step 3"></sq-step>
          </sq-stepper>
          <sq-pagination total="50" page="1" per-page="10"></sq-pagination>
        </sq-flex>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- ==========================================
         THEME SHOWCASE
         ========================================== -->
    <sq-heading level="2">Theme Showcase</sq-heading>
    <p style="font-size: var(--sq-text-lg); color: var(--sq-fg-muted); margin-bottom: 1.5rem;">Our components adapt to different themes, including the signature rainbow theme.</p>

    <sq-theme sq-theme="sq-theme">
      <sq-flex gap="3" wrap style="margin-bottom: 2rem;">
        <sq-card padded style="flex: 1; min-width: 200px;">
          <sq-heading level="3">Rainbow Buttons</sq-heading>
          <sq-flex gap="1" wrap>
            <sq-button variant="primary">Button 1</sq-button>
            <sq-button variant="primary">Button 2</sq-button>
            <sq-button variant="primary">Button 3</sq-button>
          </sq-flex>
        </sq-card>

        <sq-card padded style="flex: 1; min-width: 200px;">
          <sq-heading level="3">Rainbow Tags</sq-heading>
          <sq-flex gap="1" wrap>
            <sq-tag>Tag 1</sq-tag>
            <sq-tag>Tag 2</sq-tag>
            <sq-tag>Tag 3</sq-tag>
          </sq-flex>
        </sq-card>

        <sq-card padded style="flex: 1; min-width: 200px;">
          <sq-heading level="3">Rainbow Badges</sq-heading>
          <sq-flex gap="1" wrap>
            <sq-badge>Badge 1</sq-badge>
            <sq-badge>Badge 2</sq-badge>
            <sq-badge>Badge 3</sq-badge>
          </sq-flex>
        </sq-card>
      </sq-flex>
    </sq-theme>

    <sq-divider></sq-divider>

    <!-- ==========================================
         DARK MODE PREVIEW
         ========================================== -->
    <sq-heading level="2">Dark Mode</sq-heading>
    <p style="font-size: var(--sq-text-lg); color: var(--sq-fg-muted); margin-bottom: 1.5rem;">All components support dark mode via the <code>sq-mode="dark"</code> attribute.</p>

    <sq-flex gap="3" wrap style="margin-bottom: 2rem;">
      <sq-card padded style="flex: 1; min-width: 300px;">
        <sq-heading level="3">Light Mode</sq-heading>
        <sq-flex gap="1" style="margin-top: 1rem;">
          <sq-button variant="primary">Primary</sq-button>
          <sq-button variant="secondary">Secondary</sq-button>
        </sq-flex>
        <sq-input placeholder="Light mode input" style="width: 100%; margin-top: 0.5rem;"></sq-input>
      </sq-card>

      <sq-card padded style="flex: 1; min-width: 300px;">
        <sq-heading level="3">Dark Mode</sq-heading>
        <div sq-mode="dark" style="margin-top: 1rem;">
          <sq-flex gap="1">
            <sq-button variant="primary">Primary</sq-button>
            <sq-button variant="secondary">Secondary</sq-button>
          </sq-flex>
          <sq-input placeholder="Dark mode input" style="width: 100%; margin-top: 0.5rem;"></sq-input>
        </div>
      </sq-card>
    </sq-flex>

    <sq-divider></sq-divider>

    <!-- ==========================================
         FOOTER
         ========================================== -->
    <div style="text-align: center; padding: 2rem 1rem;">
      <img src="/sq-mascot.png" alt="SQ mascot" style="width: 80px; height: auto; margin-bottom: 1rem; opacity: 0.7;" />
      <p style="font-size: var(--sq-text-lg); color: var(--sq-fg-muted); margin-bottom: 0.5rem;">Built with ❤️ by the Squiddy team</p>
      <p style="font-size: var(--sq-text-sm); color: var(--sq-fg-muted);">Framework-agnostic · Accessible · Colorful</p>
      <sq-flex gap="2" style="justify-content: center; margin-top: 1rem;">
        <sq-link href="#">Documentation</sq-link>
        <sq-link href="#">GitHub</sq-link>
        <sq-link href="#">Contribute</sq-link>
      </sq-flex>
    </div>
  </sq-container>
`;

/* ======================================================================
   SQ-TUNES — Premium Media Player Pattern
   ====================================================================== */

export const SqTunes = () => html`
<style>
  .sq-tunes-app {
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 1fr 90px;
    height: calc(100vh - 120px);
    max-height: 700px;
    background: var(--sq-bg-subtle);
    border-radius: var(--sq-radius-lg);
    overflow: hidden;
    border: 1px solid var(--sq-border-subtle);
  }

  .sq-tunes-sidebar {
    grid-row: 1 / 2;
    grid-column: 1;
    background: var(--sq-bg-surface);
    border-right: 1px solid var(--sq-border-subtle);
    padding: var(--sq-space-4);
    overflow-y: auto;
  }

  .sq-tunes-main {
    grid-row: 1 / 2;
    grid-column: 2;
    overflow-y: auto;
    padding: var(--sq-space-6);
  }

  .sq-tunes-player {
    grid-row: 2;
    grid-column: 1 / -1;
    background: var(--sq-bg-surface);
    border-top: 1px solid var(--sq-border-subtle);
    display: grid;
    grid-template-columns: 240px 1fr 240px;
    align-items: center;
    padding: 0 var(--sq-space-4);
  }

  .sq-tunes-player-sidebar {
    display: flex;
    align-items: center;
    gap: var(--sq-space-2);
  }

  .sq-tunes-player-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--sq-space-1);
  }

  .sq-tunes-player-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--sq-space-2);
  }

  .sq-tunes-logo {
    display: flex;
    align-items: center;
    gap: var(--sq-space-2);
    padding: var(--sq-space-2) 0;
    margin-bottom: var(--sq-space-4);
    font-size: var(--sq-text-lg);
    font-weight: var(--sq-font-weight-bold);
    color: var(--sq-accent-primary);
  }

  .sq-tunes-logo svg {
    width: var(--sq-space-6);
    height: var(--sq-space-6);
  }

  .sq-tunes-nav-section {
    margin-bottom: var(--sq-space-4);
  }

  .sq-tunes-nav-label {
    font-size: var(--sq-text-xs);
    font-weight: var(--sq-font-weight-semibold);
    color: var(--sq-fg-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: var(--sq-space-2) 0;
  }

  .sq-tunes-nav-item {
    display: flex;
    align-items: center;
    gap: var(--sq-space-2);
    padding: var(--sq-space-2) var(--sq-space-3);
    border-radius: var(--sq-radius-md);
    font-size: var(--sq-text-sm);
    color: var(--sq-fg-default);
    cursor: pointer;
    transition: background var(--sq-motion-fast), color var(--sq-motion-fast);
    border: none;
    background: none;
    width: 100%;
    text-align: left;
  }

  .sq-tunes-nav-item:hover {
    background: var(--sq-bg-subtle);
  }

  .sq-tunes-nav-item[active] {
    background: var(--sq-accent-primary-light);
    color: var(--sq-accent-primary);
    font-weight: var(--sq-font-weight-medium);
  }

  .sq-tunes-nav-item svg {
    width: var(--sq-space-5);
    height: var(--sq-space-5);
    flex-shrink: 0;
  }

  .sq-tunes-playlist-item {
    display: flex;
    align-items: center;
    gap: var(--sq-space-2);
    padding: var(--sq-space-1) var(--sq-space-3);
    border-radius: var(--sq-radius-sm);
    font-size: var(--sq-text-xs);
    color: var(--sq-fg-muted);
    cursor: pointer;
    transition: background var(--sq-motion-fast);
  }

  .sq-tunes-playlist-item:hover {
    background: var(--sq-bg-subtle);
    color: var(--sq-fg-default);
  }

  .sq-tunes-playlist-dot {
    width: 8px;
    height: 8px;
    border-radius: var(--sq-radius-full);
    flex-shrink: 0;
  }

  .sq-tunes-content-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--sq-space-4);
  }

  .sq-tunes-search {
    position: relative;
  }

  .sq-tunes-search input {
    width: 250px;
    padding: var(--sq-space-2) var(--sq-space-3) var(--sq-space-2) var(--sq-space-9);
    border: 1px solid var(--sq-border-subtle);
    border-radius: var(--sq-radius-full);
    background: var(--sq-bg-surface);
    font-size: var(--sq-text-sm);
    color: var(--sq-fg-default);
    outline: none;
    transition: border-color var(--sq-motion-fast);
  }

  .sq-tunes-search input:focus {
    border-color: var(--sq-accent-primary);
  }

  .sq-tunes-search svg {
    position: absolute;
    left: var(--sq-space-3);
    top: 50%;
    transform: translateY(-50%);
    width: var(--sq-space-4);
    height: var(--sq-space-4);
    color: var(--sq-fg-muted);
  }

  .sq-tunes-section-title {
    font-size: var(--sq-text-lg);
    font-weight: var(--sq-font-weight-bold);
    color: var(--sq-fg-default);
    margin-bottom: var(--sq-space-3);
  }

  .sq-tunes-albums-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: var(--sq-space-4);
    margin-bottom: var(--sq-space-6);
  }

  .sq-tunes-album-card {
    display: flex;
    flex-direction: column;
    gap: var(--sq-space-2);
    cursor: pointer;
    padding: var(--sq-space-2);
    border-radius: var(--sq-radius-md);
    transition: background var(--sq-motion-fast);
  }

  .sq-tunes-album-card:hover {
    background: var(--sq-bg-subtle);
  }

  .sq-tunes-album-title {
    font-size: var(--sq-text-sm);
    font-weight: var(--sq-font-weight-medium);
    color: var(--sq-fg-default);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sq-tunes-album-artist {
    font-size: var(--sq-text-xs);
    color: var(--sq-fg-muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sq-tunes-song-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .sq-tunes-player-controls {
    display: flex;
    align-items: center;
    gap: var(--sq-space-3);
  }

  .sq-tunes-ctrl-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--sq-space-7);
    height: var(--sq-space-7);
    border: none;
    border-radius: var(--sq-radius-full);
    background: transparent;
    color: var(--sq-fg-default);
    cursor: pointer;
    transition: background var(--sq-motion-fast);
  }

  .sq-tunes-ctrl-btn:hover {
    background: var(--sq-bg-subtle);
  }

  .sq-tunes-ctrl-btn svg {
    width: var(--sq-space-5);
    height: var(--sq-space-5);
  }

  .sq-tunes-play-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--sq-space-9);
    height: var(--sq-space-9);
    border: none;
    border-radius: var(--sq-radius-full);
    background: var(--sq-accent-primary);
    color: var(--sq-fg-inverse);
    cursor: pointer;
    transition: transform var(--sq-motion-fast), background var(--sq-motion-fast);
  }

  .sq-tunes-play-btn:hover {
    transform: scale(1.05);
    background: var(--sq-accent-primary-hover);
  }

  .sq-tunes-play-btn svg {
    width: var(--sq-space-5);
    height: var(--sq-space-5);
  }

  .sq-tunes-progress-bar {
    width: 100%;
    max-width: 600px;
    display: flex;
    align-items: center;
    gap: var(--sq-space-2);
  }

  .sq-tunes-progress-time {
    font-size: var(--sq-text-xs);
    color: var(--sq-fg-muted);
    font-variant-numeric: tabular-nums;
    min-width: var(--sq-space-5);
  }

  .sq-tunes-progress-track {
    flex: 1;
    height: 4px;
    background: var(--sq-border-subtle);
    border-radius: var(--sq-radius-full);
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .sq-tunes-progress-fill {
    height: 100%;
    background: var(--sq-accent-primary);
    border-radius: var(--sq-radius-full);
    width: 35%;
    transition: width 0.1s linear;
  }

  .sq-tunes-volume {
    display: flex;
    align-items: center;
    gap: var(--sq-space-1);
  }

  .sq-tunes-volume-slider {
    -webkit-appearance: none;
    appearance: none;
    width: var(--sq-space-8);
    height: 4px;
    background: var(--sq-border-subtle);
    border-radius: var(--sq-radius-full);
    outline: none;
    cursor: pointer;
  }

  .sq-tunes-volume-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: var(--sq-radius-full);
    background: var(--sq-accent-primary);
    cursor: pointer;
  }

  .sq-tunes-now-playing-info {
    display: flex;
    align-items: center;
    gap: var(--sq-space-3);
  }

  .sq-tunes-now-playing-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .sq-tunes-now-playing-title {
    font-size: var(--sq-text-sm);
    font-weight: var(--sq-font-weight-medium);
    color: var(--sq-fg-default);
  }

  .sq-tunes-now-playing-artist {
    font-size: var(--sq-text-xs);
    color: var(--sq-fg-muted);
  }

  .sq-tunes-tabs {
    display: flex;
    gap: var(--sq-space-1);
    margin-bottom: var(--sq-space-4);
  }

  .sq-tunes-tab {
    padding: var(--sq-space-1) var(--sq-space-3);
    border-radius: var(--sq-radius-full);
    font-size: var(--sq-text-sm);
    color: var(--sq-fg-muted);
    cursor: pointer;
    border: none;
    background: transparent;
    transition: background var(--sq-motion-fast), color var(--sq-motion-fast);
  }

  .sq-tunes-tab:hover {
    background: var(--sq-bg-subtle);
  }

  .sq-tunes-tab[active] {
    background: var(--sq-accent-primary);
    color: var(--sq-fg-inverse);
  }

  .sq-tunes-artist-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: var(--sq-space-4);
    margin-bottom: var(--sq-space-6);
  }

  .sq-tunes-artist-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--sq-space-2);
    cursor: pointer;
    padding: var(--sq-space-2);
    border-radius: var(--sq-radius-md);
    transition: background var(--sq-motion-fast);
  }

  .sq-tunes-artist-card:hover {
    background: var(--sq-bg-subtle);
  }

  .sq-tunes-artist-name {
    font-size: var(--sq-text-sm);
    font-weight: var(--sq-font-weight-medium);
    color: var(--sq-fg-default);
    text-align: center;
  }

  @media (max-width: 768px) {
    .sq-tunes-app {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 90px;
    }

    .sq-tunes-sidebar {
      display: none;
    }

    .sq-tunes-main {
      grid-column: 1;
    }

    .sq-tunes-player {
      grid-template-columns: 1fr 1fr;
    }

    .sq-tunes-player-sidebar {
      display: none;
    }
  }
</style>

<div class="sq-tunes-app">
  <!-- SIDEBAR -->
  <div class="sq-tunes-sidebar">
    <div class="sq-tunes-logo">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </svg>
      <span>SQ Tunes</span>
    </div>

    <div class="sq-tunes-nav-section">
      <div class="sq-tunes-nav-label">Menu</div>
      <button class="sq-tunes-nav-item" active>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        Home
      </button>
      <button class="sq-tunes-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
        Search
      </button>
      <button class="sq-tunes-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18V5l12-2v13"/>
          <circle cx="6" cy="18" r="3"/>
          <circle cx="18" cy="16" r="3"/>
        </svg>
        Library
      </button>
    </div>

    <div class="sq-tunes-nav-section">
      <div class="sq-tunes-nav-label">Browse</div>
      <button class="sq-tunes-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
        </svg>
        Albums
      </button>
      <button class="sq-tunes-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        Artists
      </button>
      <button class="sq-tunes-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18V5l12-2v13"/>
          <circle cx="6" cy="18" r="3"/>
          <circle cx="18" cy="16" r="3"/>
        </svg>
        Songs
      </button>
    </div>

    <div class="sq-tunes-nav-section">
      <div class="sq-tunes-nav-label">Playlists</div>
      <div class="sq-tunes-playlist-item">
        <span class="sq-tunes-playlist-dot" style="background: #EE2E31;"></span>
        Chill Vibes
      </div>
      <div class="sq-tunes-playlist-item">
        <span class="sq-tunes-playlist-dot" style="background: #A8E400;"></span>
        Workout Mix
      </div>
      <div class="sq-tunes-playlist-item">
        <span class="sq-tunes-playlist-dot" style="background: #00BCD4;"></span>
        Focus Flow
      </div>
      <div class="sq-tunes-playlist-item">
        <span class="sq-tunes-playlist-dot" style="background: #FF9800;"></span>
        Road Trip
      </div>
      <div class="sq-tunes-playlist-item">
        <span class="sq-tunes-playlist-dot" style="background: #E91E63;"></span>
        Late Night
      </div>
      <div class="sq-tunes-playlist-item">
        <span class="sq-tunes-playlist-dot" style="background: #9C27B0;"></span>
        NCS Favorites
      </div>
    </div>

    <div class="sq-tunes-nav-section">
      <div class="sq-tunes-nav-label">Folders</div>
      <div class="sq-tunes-playlist-item">
        <svg style="width:16px;height:16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
        </svg>
        Downloads
      </div>
      <div class="sq-tunes-playlist-item">
        <svg style="width:16px;height:16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
        </svg>
        Podcasts
      </div>
    </div>
  </div>

  <!-- MAIN CONTENT -->
  <div class="sq-tunes-main">
    <!-- Search & Header -->
    <div class="sq-tunes-content-header">
      <sq-heading level="2">Good Evening</sq-heading>
      <div class="sq-tunes-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
        <input type="text" placeholder="Search songs, artists, albums..." />
      </div>
    </div>

    <!-- Quick Play Tabs -->
    <div class="sq-tunes-tabs">
      <button class="sq-tunes-tab" active>Recently Played</button>
      <button class="sq-tunes-tab">Made for You</button>
      <button class="sq-tunes-tab">Trending</button>
      <button class="sq-tunes-tab">New Releases</button>
    </div>

    <!-- Featured Albums Grid -->
    <div class="sq-tunes-section-title">Featured Albums</div>
    <div class="sq-tunes-albums-grid">
      <div class="sq-tunes-album-card">
        <sq-album-cover size="md" shape="rounded"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23667eea'/%3E%3Cstop offset='100%25' stop-color='%23764ba2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23g1)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='40' font-family='sans-serif'%3E%F0%9F%8E%B5%3C/text%3E%3C/svg%3E"
          alt="Opposite World">
        </sq-album-cover>
        <div class="sq-tunes-album-title">Opposite World</div>
        <div class="sq-tunes-album-artist">Jens Killery</div>
      </div>

      <div class="sq-tunes-album-card">
        <sq-album-cover size="md" shape="rounded"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f093fb'/%3E%3Cstop offset='100%25' stop-color='%23f5576c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23g2)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='40' font-family='sans-serif'%3E%F0%9F%8E%B6%3C/text%3E%3C/svg%3E"
          alt="Secret Garden">
        </sq-album-cover>
        <div class="sq-tunes-album-title">Secret Garden</div>
        <div class="sq-tunes-album-artist">WYS</div>
      </div>

      <div class="sq-tunes-album-card">
        <sq-album-cover size="md" shape="rounded"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3ClinearGradient id='g3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%234facfe'/%3E%3Cstop offset='100%25' stop-color='%2300f2fe'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23g3)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='40' font-family='sans-serif'%3E%F0%9F%8E%B7%3C/text%3E%3C/svg%3E"
          alt="Spectrum">
        </sq-album-cover>
        <div class="sq-tunes-album-title">Spectrum</div>
        <div class="sq-tunes-album-artist">Alan Walker</div>
      </div>

      <div class="sq-tunes-album-card">
        <sq-album-cover size="md" shape="rounded"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3ClinearGradient id='g4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2343e97b'/%3E%3Cstop offset='100%25' stop-color='%2338f9d7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23g4)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='40' font-family='sans-serif'%3E%F0%9F%8E%B8%3C/text%3E%3C/svg%3E"
          alt="Awakening">
        </sq-album-cover>
        <div class="sq-tunes-album-title">Awakening</div>
        <div class="sq-tunes-album-artist">Tobu</div>
      </div>

      <div class="sq-tunes-album-card">
        <sq-album-cover size="md" shape="rounded"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3ClinearGradient id='g5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23fa709a'/%3E%3Cstop offset='100%25' stop-color='%23fee140'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23g5)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='40' font-family='sans-serif'%3E%F0%9F%8E%B9%3C/text%3E%3C/svg%3E"
          alt="Controlla">
        </sq-album-cover>
        <div class="sq-tunes-album-title">Controlla</div>
        <div class="sq-tunes-album-artist">KSLV Noh</div>
      </div>

      <div class="sq-tunes-album-card">
        <sq-album-cover size="md" shape="rounded"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3ClinearGradient id='g6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23a18cd1'/%3E%3Cstop offset='100%25' stop-color='%23fbc2eb'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23g6)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='40' font-family='sans-serif'%3E%F0%9F%8E%BB%3C/text%3E%3C/svg%3E"
          alt="Running Up">
        </sq-album-cover>
        <div class="sq-tunes-album-title">Running Up</div>
        <div class="sq-tunes-album-artist">Jens Killery</div>
      </div>
    </div>

    <!-- Popular Artists -->
    <div class="sq-tunes-section-title">Popular Artists</div>
    <div class="sq-tunes-artist-grid">
      <div class="sq-tunes-artist-card">
        <sq-avatar size="lg" shape="circle"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72'%3E%3Ccircle cx='36' cy='36' r='36' fill='%23667eea'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24' font-family='sans-serif'%3EAW%3C/text%3E%3C/svg%3E"
          alt="Alan Walker">
        </sq-avatar>
        <div class="sq-tunes-artist-name">Alan Walker</div>
      </div>
      <div class="sq-tunes-artist-card">
        <sq-avatar size="lg" shape="circle"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72'%3E%3Ccircle cx='36' cy='36' r='36' fill='%23f5576c'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24' font-family='sans-serif'%3ETB%3C/text%3E%3C/svg%3E"
          alt="Tobu">
        </sq-avatar>
        <div class="sq-tunes-artist-name">Tobu</div>
      </div>
      <div class="sq-tunes-artist-card">
        <sq-avatar size="lg" shape="circle"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72'%3E%3Ccircle cx='36' cy='36' r='36' fill='%2343e97b'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24' font-family='sans-serif'%3EJK%3C/text%3E%3C/svg%3E"
          alt="Jens Killery">
        </sq-avatar>
        <div class="sq-tunes-artist-name">Jens Killery</div>
      </div>
      <div class="sq-tunes-artist-card">
        <sq-avatar size="lg" shape="circle"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72'%3E%3Ccircle cx='36' cy='36' r='36' fill='%23fa709a'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24' font-family='sans-serif'%3EWYS%3C/text%3E%3C/svg%3E"
          alt="WYS">
        </sq-avatar>
        <div class="sq-tunes-artist-name">WYS</div>
      </div>
      <div class="sq-tunes-artist-card">
        <sq-avatar size="lg" shape="circle"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72'%3E%3Ccircle cx='36' cy='36' r='36' fill='%23a18cd1'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24' font-family='sans-serif'%3EKN%3C/text%3E%3C/svg%3E"
          alt="KSLV Noh">
        </sq-avatar>
        <div class="sq-tunes-artist-name">KSLV Noh</div>
      </div>
      <div class="sq-tunes-artist-card">
        <sq-avatar size="lg" shape="circle"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72'%3E%3Ccircle cx='36' cy='36' r='36' fill='%234facfe'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24' font-family='sans-serif'%3EHR%3C/text%3E%3C/svg%3E"
          alt="Hensonn">
        </sq-avatar>
        <div class="sq-tunes-artist-name">Hensonn</div>
      </div>
    </div>

    <!-- Song List -->
    <div class="sq-tunes-section-title">Top Tracks</div>
    <div class="sq-tunes-song-list">
      <sq-song-row header></sq-song-row>
      <sq-song-row index-num="1" title="Opposite World" artist="Jens Killery" album="Opposite World" duration="3:24" playing show-album>
        <sq-album-cover size="sm" show-play-overlay="false"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' rx='4' fill='%23667eea'/%3E%3C/svg%3E"
          slot="cover">
        </sq-album-cover>
      </sq-song-row>
      <sq-song-row index-num="2" title="Secret Garden" artist="WYS" album="Secret Garden" duration="3:45" show-album>
        <sq-album-cover size="sm" show-play-overlay="false"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' rx='4' fill='%23f5576c'/%3E%3C/svg%3E"
          slot="cover">
        </sq-album-cover>
      </sq-song-row>
      <sq-song-row index-num="3" title="Spectrum" artist="Alan Walker" album="Different World" duration="4:02" show-album>
        <sq-album-cover size="sm" show-play-overlay="false"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' rx='4' fill='%234facfe'/%3E%3C/svg%3E"
          slot="cover">
        </sq-album-cover>
      </sq-song-row>
      <sq-song-row index-num="4" title="Awakening" artist="Tobu" album="You & I" duration="3:18" show-album>
        <sq-album-cover size="sm" show-play-overlay="false"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' rx='4' fill='%2343e97b'/%3E%3C/svg%3E"
          slot="cover">
        </sq-album-cover>
      </sq-song-row>
      <sq-song-row index-num="5" title="Controlla" artist="KSLV Noh" album="Controlla" duration="3:33" show-album>
        <sq-album-cover size="sm" show-play-overlay="false"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' rx='4' fill='%23fa709a'/%3E%3C/svg%3E"
          slot="cover">
        </sq-album-cover>
      </sq-song-row>
      <sq-song-row index-num="6" title="Running Up" artist="Jens Killery" album="Running Up" duration="2:58" show-album>
        <sq-album-cover size="sm" show-play-overlay="false"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' rx='4' fill='%23a18cd1'/%3E%3C/svg%3E"
          slot="cover">
        </sq-album-cover>
      </sq-song-row>
      <sq-song-row index-num="7" title="Bloodline" artist="Jens Killery" album="Bloodline" duration="3:12" show-album>
        <sq-album-cover size="sm" show-play-overlay="false"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' rx='4' fill='%23f093fb'/%3E%3C/svg%3E"
          slot="cover">
        </sq-album-cover>
      </sq-song-row>
      <sq-song-row index-num="8" title="Legends" artist="Tobu" album="Legends" duration="3:41" show-album>
        <sq-album-cover size="sm" show-play-overlay="false"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' rx='4' fill='%2300f2fe'/%3E%3C/svg%3E"
          slot="cover">
        </sq-album-cover>
      </sq-song-row>
      <sq-song-row index-num="9" title="Crab Rave" artist="Noisestorm" album="Crab Rave" duration="2:46" show-album>
        <sq-album-cover size="sm" show-play-overlay="false"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' rx='4' fill='%23fee140'/%3E%3C/svg%3E"
          slot="cover">
        </sq-album-cover>
      </sq-song-row>
      <sq-song-row index-num="10" title="Faded" artist="Alan Walker" album="Different World" duration="3:32" show-album>
        <sq-album-cover size="sm" show-play-overlay="false"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' rx='4' fill='%23764ba2'/%3E%3C/svg%3E"
          slot="cover">
        </sq-album-cover>
      </sq-song-row>
    </div>

    <!-- Playlists Section -->
    <div class="sq-tunes-section-title" style="margin-top: var(--sq-space-6);">Your Playlists</div>
    <div class="sq-tunes-albums-grid">
      <div class="sq-tunes-album-card">
        <sq-album-cover size="md" shape="rounded"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3ClinearGradient id='p1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23EE2E31'/%3E%3Cstop offset='100%25' stop-color='%23FF6B6B'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23p1)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='30' font-family='sans-serif'%3E%F0%9F%8E%B5%3C/text%3E%3C/svg%3E"
          alt="Chill Vibes">
        </sq-album-cover>
        <div class="sq-tunes-album-title">Chill Vibes</div>
        <div class="sq-tunes-album-artist">12 songs · 42 min</div>
      </div>
      <div class="sq-tunes-album-card">
        <sq-album-cover size="md" shape="rounded"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3ClinearGradient id='p2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23A8E400'/%3E%3Cstop offset='100%25' stop-color='%23C6FF00'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23p2)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='30' font-family='sans-serif'%3E%F0%9F%8E%A4%3C/text%3E%3C/svg%3E"
          alt="Workout Mix">
        </sq-album-cover>
        <div class="sq-tunes-album-title">Workout Mix</div>
        <div class="sq-tunes-album-artist">8 songs · 28 min</div>
      </div>
      <div class="sq-tunes-album-card">
        <sq-album-cover size="md" shape="rounded"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3ClinearGradient id='p3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2300BCD4'/%3E%3Cstop offset='100%25' stop-color='%234DD0E1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23p3)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='30' font-family='sans-serif'%3E%F0%9F%92%BB%3C/text%3E%3C/svg%3E"
          alt="Focus Flow">
        </sq-album-cover>
        <div class="sq-tunes-album-title">Focus Flow</div>
        <div class="sq-tunes-album-artist">15 songs · 56 min</div>
      </div>
      <div class="sq-tunes-album-card">
        <sq-album-cover size="md" shape="rounded"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3ClinearGradient id='p4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23FF9800'/%3E%3Cstop offset='100%25' stop-color='%23FFB74D'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23p4)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='30' font-family='sans-serif'%3E%F0%9F%8C%8D%3C/text%3E%3C/svg%3E"
          alt="Road Trip">
        </sq-album-cover>
        <div class="sq-tunes-album-title">Road Trip</div>
        <div class="sq-tunes-album-artist">20 songs · 72 min</div>
      </div>
    </div>

    <!-- NCS Credit -->
    <sq-divider style="margin-top: var(--sq-space-6);"></sq-divider>
    <sq-flex gap="2" style="align-items: center; margin-top: var(--sq-space-3);">
      <sq-badge variant="info">NCS</sq-badge>
      <span style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted);">
        All music by NoCopyrightSounds (NCS) — free to use, no licensing issues.
      </span>
    </sq-flex>
  </div>

  <!-- BOTTOM PLAYER BAR -->
  <div class="sq-tunes-player">
    <!-- Now Playing Info -->
    <div class="sq-tunes-player-sidebar">
      <div class="sq-tunes-now-playing-info">
        <sq-album-cover size="sm" show-play-overlay="false" now-playing
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' rx='4' fill='%23667eea'/%3E%3C/svg%3E"
          alt="Opposite World">
        </sq-album-cover>
        <div class="sq-tunes-now-playing-text">
          <div class="sq-tunes-now-playing-title">Opposite World</div>
          <div class="sq-tunes-now-playing-artist">Jens Killery</div>
        </div>
        <button style="display:flex;align-items:center;justify-content:center;width:28px;height:28px;border:none;background:transparent;cursor:pointer;color:var(--sq-fg-muted);">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Center Controls -->
    <div class="sq-tunes-player-center">
      <div class="sq-tunes-player-controls">
        <button class="sq-tunes-ctrl-btn" title="Shuffle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 3 21 3 21 8"/>
            <line x1="4" y1="20" x2="21" y2="3"/>
            <polyline points="21 16 21 21 16 21"/>
            <line x1="15" y1="15" x2="21" y2="21"/>
            <line x1="4" y1="4" x2="9" y2="9"/>
          </svg>
        </button>
        <button class="sq-tunes-ctrl-btn" title="Previous">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
          </svg>
        </button>
        <button class="sq-tunes-play-btn" title="Play/Pause">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
        <button class="sq-tunes-ctrl-btn" title="Next">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
          </svg>
        </button>
        <button class="sq-tunes-ctrl-btn" title="Repeat">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="17 1 21 5 17 9"/>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
            <polyline points="7 23 3 19 7 15"/>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
          </svg>
        </button>
      </div>
      <div class="sq-tunes-progress-bar">
        <span class="sq-tunes-progress-time">1:12</span>
        <div class="sq-tunes-progress-track">
          <div class="sq-tunes-progress-fill"></div>
        </div>
        <span class="sq-tunes-progress-time">3:24</span>
      </div>
    </div>

    <!-- Right Controls -->
    <div class="sq-tunes-player-right">
      <sq-equalizer bars="5" variant="info"></sq-equalizer>
      <button class="sq-tunes-ctrl-btn" title="Lyrics">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 6h16M4 12h16M4 18h12"/>
        </svg>
      </button>
      <button class="sq-tunes-ctrl-btn" title="Queue">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="8" y1="6" x2="21" y2="6"/>
          <line x1="8" y1="12" x2="21" y2="12"/>
          <line x1="8" y1="18" x2="21" y2="18"/>
          <line x1="3" y1="6" x2="3.01" y2="6"/>
          <line x1="3" y1="12" x2="3.01" y2="12"/>
          <line x1="3" y1="18" x2="3.01" y2="18"/>
        </svg>
      </button>
      <div class="sq-tunes-volume">
        <button class="sq-tunes-ctrl-btn" title="Volume">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
        </button>
        <input type="range" class="sq-tunes-volume-slider" min="0" max="1" step="0.01" value="0.7" />
      </div>
      <button class="sq-tunes-ctrl-btn" title="Fullscreen">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
        </svg>
      </button>
    </div>
  </div>
</div>
`;
