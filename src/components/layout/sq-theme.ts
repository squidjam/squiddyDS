import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Theme Provider — applies named theme overrides to all descendant components.
 *
 * Place this component anywhere in the DOM to override the default look and feel.
 * The `sq-theme` attribute accepts a theme name (e.g. "blue", "red", "cyan", "rainbow") that applies a set
 * of CSS custom property overrides to all children.
 *
 * Can be combined with `sq-mode="dark"` for dark mode support.
 *
 * Available themes: blue, red, lime, cyan, green, gold, pink, fuchsia, magenta, rainbow, sq-theme
 *
 * @example
 *   <sq-theme sq-theme="blue">
 *     <!-- All components inside will use the blue theme overrides -->
 *   </sq-theme>
 *
 * @example
 *   <sq-theme sq-theme="red" sq-mode="dark">
 *     <!-- Red theme with dark mode -->
 *   </sq-theme>
 */
@customElement('sq-theme')
export class SqTheme extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    /* ======================================================================
       THEME: blue — border-radius=0
       ====================================================================== */
    :host([sq-theme="blue"]) .theme-wrapper {
      --sq-radius-none: 0px;
      --sq-radius-sm: 0px;
      --sq-radius-md: 0px;
      --sq-radius-lg: 0px;
      --sq-radius-xl: 0px;
      --sq-radius-full: 0px;
    }

    /* ======================================================================
       THEME: red — based on Hair Red #EE2E31
       Accessible variations: darker for text (#B82426), lighter for backgrounds
       ====================================================================== */
    :host([sq-theme="red"]) .theme-wrapper {
      /* ---- Backgrounds ---- */
      --sq-bg-default: #FFF5F5;
      --sq-bg-surface: #FFFFFF;
      --sq-bg-elevated: #FFFFFF;
      --sq-bg-inverse: #B82426;
      --sq-bg-overlay: rgba(184, 36, 38, 0.4);
      --sq-bg-subtle: #FED7D7;
      --sq-bg-header: #FED7D7;

      /* ---- Foreground / Text ---- */
      --sq-fg-default: #1A1A1A;
      --sq-fg-muted: #B82426;
      --sq-fg-inverse: #FFFFFF;
      --sq-fg-link: #B82426;
      --sq-fg-link-hover: #EE2E31;

      /* ---- Borders ---- */
      --sq-border-default: #EE2E31;
      --sq-border-subtle: rgba(238, 46, 49, 0.2);
      --sq-border-focus: #EE2E31;

      /* ---- Accent Colors ---- */
      --sq-accent-primary: #EE2E31;
      --sq-accent-primary-hover: #D42629;
      --sq-accent-primary-active: #B82426;
      --sq-accent-primary-light: rgba(238, 46, 49, 0.1);
      --sq-accent-primary-light-hover: rgba(238, 46, 49, 0.18);
    }

    /* Red — Dark Mode */
    :host([sq-theme="red"][sq-mode="dark"]) .theme-wrapper,
    :host([sq-theme="red"]) .theme-wrapper[sq-mode="dark"] {
      --sq-bg-default: #1A0F0F;
      --sq-bg-surface: #2D1B1B;
      --sq-bg-elevated: #3D2828;
      --sq-bg-inverse: #FFB4B4;
      --sq-bg-overlay: rgba(26, 15, 15, 0.7);
      --sq-bg-subtle: #3D2828;
      --sq-bg-header: #2D1B1B;

      --sq-fg-default: #FFB4B4;
      --sq-fg-muted: #B82426;
      --sq-fg-inverse: #1A0F0F;
      --sq-fg-link: #FFB4B4;
      --sq-fg-link-hover: #EE2E31;

      --sq-border-default: rgba(238, 46, 49, 0.3);
      --sq-border-subtle: rgba(238, 46, 49, 0.12);
      --sq-border-focus: #EE2E31;

      --sq-accent-primary: #EE2E31;
      --sq-accent-primary-hover: #D42629;
      --sq-accent-primary-active: #B82426;
      --sq-accent-primary-light: rgba(238, 46, 49, 0.15);
      --sq-accent-primary-light-hover: rgba(238, 46, 49, 0.25);

      --sq-shadow-sm: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
      --sq-shadow-md: 0px 8px 20px 0px rgba(0, 0, 0, 0.5);
      --sq-shadow-lg: 0px 16px 40px 0px rgba(0, 0, 0, 0.6);
    }

    /* ======================================================================
       THEME: lime — based on Lime Jacket #A8E400
       Accessible variations: darker for text (#7A9F00), lighter for backgrounds
       ====================================================================== */
    :host([sq-theme="lime"]) .theme-wrapper {
      --sq-bg-default: #F7FFF0;
      --sq-bg-surface: #FFFFFF;
      --sq-bg-elevated: #FFFFFF;
      --sq-bg-inverse: #7A9F00;
      --sq-bg-overlay: rgba(122, 159, 0, 0.4);
      --sq-bg-subtle: #E3F4C4;
      --sq-bg-header: #E3F4C4;

      --sq-fg-default: #1A1A1A;
      --sq-fg-muted: #7A9F00;
      --sq-fg-inverse: #FFFFFF;
      --sq-fg-link: #7A9F00;
      --sq-fg-link-hover: #A8E400;

      --sq-border-default: #A8E400;
      --sq-border-subtle: rgba(168, 228, 0, 0.2);
      --sq-border-focus: #A8E400;

      --sq-accent-primary: #A8E400;
      --sq-accent-primary-hover: #96CC00;
      --sq-accent-primary-active: #7A9F00;
      --sq-accent-primary-light: rgba(168, 228, 0, 0.1);
      --sq-accent-primary-light-hover: rgba(168, 228, 0, 0.18);
    }

    /* Lime — Dark Mode */
    :host([sq-theme="lime"][sq-mode="dark"]) .theme-wrapper,
    :host([sq-theme="lime"]) .theme-wrapper[sq-mode="dark"] {
      --sq-bg-default: #0F1A0A;
      --sq-bg-surface: #1B2D14;
      --sq-bg-elevated: #283D1E;
      --sq-bg-inverse: #C4F48A;
      --sq-bg-overlay: rgba(15, 26, 10, 0.7);
      --sq-bg-subtle: #283D1E;
      --sq-bg-header: #1B2D14;

      --sq-fg-default: #C4F48A;
      --sq-fg-muted: #7A9F00;
      --sq-fg-inverse: #0F1A0A;
      --sq-fg-link: #C4F48A;
      --sq-fg-link-hover: #A8E400;

      --sq-border-default: rgba(168, 228, 0, 0.3);
      --sq-border-subtle: rgba(168, 228, 0, 0.12);
      --sq-border-focus: #A8E400;

      --sq-accent-primary: #A8E400;
      --sq-accent-primary-hover: #96CC00;
      --sq-accent-primary-active: #7A9F00;
      --sq-accent-primary-light: rgba(168, 228, 0, 0.15);
      --sq-accent-primary-light-hover: rgba(168, 228, 0, 0.25);

      --sq-shadow-sm: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
      --sq-shadow-md: 0px 8px 20px 0px rgba(0, 0, 0, 0.5);
      --sq-shadow-lg: 0px 16px 40px 0px rgba(0, 0, 0, 0.6);
    }

    /* ======================================================================
       THEME: cyan — based on Neon Cyan #00FFDB
       Accessible variations: darker for text (#00B89A), lighter for backgrounds
       ====================================================================== */
    :host([sq-theme="cyan"]) .theme-wrapper {
      --sq-bg-default: #F0FFFE;
      --sq-bg-surface: #FFFFFF;
      --sq-bg-elevated: #FFFFFF;
      --sq-bg-inverse: #00B89A;
      --sq-bg-overlay: rgba(0, 184, 154, 0.4);
      --sq-bg-subtle: #C4F5ED;
      --sq-bg-header: #C4F5ED;

      --sq-fg-default: #1A1A1A;
      --sq-fg-muted: #00B89A;
      --sq-fg-inverse: #FFFFFF;
      --sq-fg-link: #00B89A;
      --sq-fg-link-hover: #00FFDB;

      --sq-border-default: #00FFDB;
      --sq-border-subtle: rgba(0, 255, 219, 0.2);
      --sq-border-focus: #00FFDB;

      --sq-accent-primary: #00FFDB;
      --sq-accent-primary-hover: #00E6C6;
      --sq-accent-primary-active: #00B89A;
      --sq-accent-primary-light: rgba(0, 255, 219, 0.1);
      --sq-accent-primary-light-hover: rgba(0, 255, 219, 0.18);
    }

    /* Cyan — Dark Mode */
    :host([sq-theme="cyan"][sq-mode="dark"]) .theme-wrapper,
    :host([sq-theme="cyan"]) .theme-wrapper[sq-mode="dark"] {
      --sq-bg-default: #0A1A18;
      --sq-bg-surface: #142D2A;
      --sq-bg-elevated: #1E3D39;
      --sq-bg-inverse: #8AFFE8;
      --sq-bg-overlay: rgba(10, 26, 24, 0.7);
      --sq-bg-subtle: #1E3D39;
      --sq-bg-header: #142D2A;

      --sq-fg-default: #8AFFE8;
      --sq-fg-muted: #00B89A;
      --sq-fg-inverse: #0A1A18;
      --sq-fg-link: #8AFFE8;
      --sq-fg-link-hover: #00FFDB;

      --sq-border-default: rgba(0, 255, 219, 0.3);
      --sq-border-subtle: rgba(0, 255, 219, 0.12);
      --sq-border-focus: #00FFDB;

      --sq-accent-primary: #00FFDB;
      --sq-accent-primary-hover: #00E6C6;
      --sq-accent-primary-active: #00B89A;
      --sq-accent-primary-light: rgba(0, 255, 219, 0.15);
      --sq-accent-primary-light-hover: rgba(0, 255, 219, 0.25);

      --sq-shadow-sm: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
      --sq-shadow-md: 0px 8px 20px 0px rgba(0, 0, 0, 0.5);
      --sq-shadow-lg: 0px 16px 40px 0px rgba(0, 0, 0, 0.6);
    }

    /* ======================================================================
       THEME: green — based on Star Green #32CD32
       Accessible variations: darker for text (#269F26), lighter for backgrounds
       ====================================================================== */
    :host([sq-theme="green"]) .theme-wrapper {
      --sq-bg-default: #F0FFF0;
      --sq-bg-surface: #FFFFFF;
      --sq-bg-elevated: #FFFFFF;
      --sq-bg-inverse: #269F26;
      --sq-bg-overlay: rgba(38, 159, 38, 0.4);
      --sq-bg-subtle: #C4F4C4;
      --sq-bg-header: #C4F4C4;

      --sq-fg-default: #1A1A1A;
      --sq-fg-muted: #269F26;
      --sq-fg-inverse: #FFFFFF;
      --sq-fg-link: #269F26;
      --sq-fg-link-hover: #32CD32;

      --sq-border-default: #32CD32;
      --sq-border-subtle: rgba(50, 205, 50, 0.2);
      --sq-border-focus: #32CD32;

      --sq-accent-primary: #32CD32;
      --sq-accent-primary-hover: #2DB82D;
      --sq-accent-primary-active: #269F26;
      --sq-accent-primary-light: rgba(50, 205, 50, 0.1);
      --sq-accent-primary-light-hover: rgba(50, 205, 50, 0.18);
    }

    /* Green — Dark Mode */
    :host([sq-theme="green"][sq-mode="dark"]) .theme-wrapper,
    :host([sq-theme="green"]) .theme-wrapper[sq-mode="dark"] {
      --sq-bg-default: #0A1A0A;
      --sq-bg-surface: #142D14;
      --sq-bg-elevated: #1E3D1E;
      --sq-bg-inverse: #8AFF8A;
      --sq-bg-overlay: rgba(10, 26, 10, 0.7);
      --sq-bg-subtle: #1E3D1E;
      --sq-bg-header: #142D14;

      --sq-fg-default: #8AFF8A;
      --sq-fg-muted: #269F26;
      --sq-fg-inverse: #0A1A0A;
      --sq-fg-link: #8AFF8A;
      --sq-fg-link-hover: #32CD32;

      --sq-border-default: rgba(50, 205, 50, 0.3);
      --sq-border-subtle: rgba(50, 205, 50, 0.12);
      --sq-border-focus: #32CD32;

      --sq-accent-primary: #32CD32;
      --sq-accent-primary-hover: #2DB82D;
      --sq-accent-primary-active: #269F26;
      --sq-accent-primary-light: rgba(50, 205, 50, 0.15);
      --sq-accent-primary-light-hover: rgba(50, 205, 50, 0.25);

      --sq-shadow-sm: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
      --sq-shadow-md: 0px 8px 20px 0px rgba(0, 0, 0, 0.5);
      --sq-shadow-lg: 0px 16px 40px 0px rgba(0, 0, 0, 0.6);
    }

    /* ======================================================================
       THEME: gold — based on Gold Accessory #FFD700
       Accessible variations: darker for text (#B89600), lighter for backgrounds
       ====================================================================== */
    :host([sq-theme="gold"]) .theme-wrapper {
      --sq-bg-default: #FFFEF0;
      --sq-bg-surface: #FFFFFF;
      --sq-bg-elevated: #FFFFFF;
      --sq-bg-inverse: #B89600;
      --sq-bg-overlay: rgba(184, 150, 0, 0.4);
      --sq-bg-subtle: #FFF4C4;
      --sq-bg-header: #FFF4C4;

      --sq-fg-default: #1A1A1A;
      --sq-fg-muted: #B89600;
      --sq-fg-inverse: #FFFFFF;
      --sq-fg-link: #B89600;
      --sq-fg-link-hover: #FFD700;

      --sq-border-default: #FFD700;
      --sq-border-subtle: rgba(255, 215, 0, 0.2);
      --sq-border-focus: #FFD700;

      --sq-accent-primary: #FFD700;
      --sq-accent-primary-hover: #E6C000;
      --sq-accent-primary-active: #B89600;
      --sq-accent-primary-light: rgba(255, 215, 0, 0.1);
      --sq-accent-primary-light-hover: rgba(255, 215, 0, 0.18);
    }

    /* Gold — Dark Mode */
    :host([sq-theme="gold"][sq-mode="dark"]) .theme-wrapper,
    :host([sq-theme="gold"]) .theme-wrapper[sq-mode="dark"] {
      --sq-bg-default: #1A1A0A;
      --sq-bg-surface: #2D2D14;
      --sq-bg-elevated: #3D3D1E;
      --sq-bg-inverse: #FFE88A;
      --sq-bg-overlay: rgba(26, 26, 10, 0.7);
      --sq-bg-subtle: #3D3D1E;
      --sq-bg-header: #2D2D14;

      --sq-fg-default: #FFE88A;
      --sq-fg-muted: #B89600;
      --sq-fg-inverse: #1A1A0A;
      --sq-fg-link: #FFE88A;
      --sq-fg-link-hover: #FFD700;

      --sq-border-default: rgba(255, 215, 0, 0.3);
      --sq-border-subtle: rgba(255, 215, 0, 0.12);
      --sq-border-focus: #FFD700;

      --sq-accent-primary: #FFD700;
      --sq-accent-primary-hover: #E6C000;
      --sq-accent-primary-active: #B89600;
      --sq-accent-primary-light: rgba(255, 215, 0, 0.15);
      --sq-accent-primary-light-hover: rgba(255, 215, 0, 0.25);

      --sq-shadow-sm: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
      --sq-shadow-md: 0px 8px 20px 0px rgba(0, 0, 0, 0.5);
      --sq-shadow-lg: 0px 16px 40px 0px rgba(0, 0, 0, 0.6);
    }

    /* ======================================================================
       THEME: pink — based on Heart Pink #FF69B4
       Accessible variations: darker for text (#CC5490), lighter for backgrounds
       ====================================================================== */
    :host([sq-theme="pink"]) .theme-wrapper {
      --sq-bg-default: #FFF0F7;
      --sq-bg-surface: #FFFFFF;
      --sq-bg-elevated: #FFFFFF;
      --sq-bg-inverse: #CC5490;
      --sq-bg-overlay: rgba(204, 84, 144, 0.4);
      --sq-bg-subtle: #F4C4E0;
      --sq-bg-header: #F4C4E0;

      --sq-fg-default: #1A1A1A;
      --sq-fg-muted: #CC5490;
      --sq-fg-inverse: #FFFFFF;
      --sq-fg-link: #CC5490;
      --sq-fg-link-hover: #FF69B4;

      --sq-border-default: #FF69B4;
      --sq-border-subtle: rgba(255, 105, 180, 0.2);
      --sq-border-focus: #FF69B4;

      --sq-accent-primary: #FF69B4;
      --sq-accent-primary-hover: #E65FA2;
      --sq-accent-primary-active: #CC5490;
      --sq-accent-primary-light: rgba(255, 105, 180, 0.1);
      --sq-accent-primary-light-hover: rgba(255, 105, 180, 0.18);
    }

    /* Pink — Dark Mode */
    :host([sq-theme="pink"][sq-mode="dark"]) .theme-wrapper,
    :host([sq-theme="pink"]) .theme-wrapper[sq-mode="dark"] {
      --sq-bg-default: #1A0F18;
      --sq-bg-surface: #2D1B26;
      --sq-bg-elevated: #3D2834;
      --sq-bg-inverse: #FFB4DC;
      --sq-bg-overlay: rgba(26, 15, 24, 0.7);
      --sq-bg-subtle: #3D2834;
      --sq-bg-header: #2D1B26;

      --sq-fg-default: #FFB4DC;
      --sq-fg-muted: #CC5490;
      --sq-fg-inverse: #1A0F18;
      --sq-fg-link: #FFB4DC;
      --sq-fg-link-hover: #FF69B4;

      --sq-border-default: rgba(255, 105, 180, 0.3);
      --sq-border-subtle: rgba(255, 105, 180, 0.12);
      --sq-border-focus: #FF69B4;

      --sq-accent-primary: #FF69B4;
      --sq-accent-primary-hover: #E65FA2;
      --sq-accent-primary-active: #CC5490;
      --sq-accent-primary-light: rgba(255, 105, 180, 0.15);
      --sq-accent-primary-light-hover: rgba(255, 105, 180, 0.25);

      --sq-shadow-sm: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
      --sq-shadow-md: 0px 8px 20px 0px rgba(0, 0, 0, 0.5);
      --sq-shadow-lg: 0px 16px 40px 0px rgba(0, 0, 0, 0.6);
    }

    /* ======================================================================
       THEME: fuchsia — based on Fuchsia Top #E318A9
       Accessible variations: darker for text (#B01286), lighter for backgrounds
       ====================================================================== */
    :host([sq-theme="fuchsia"]) .theme-wrapper {
      --sq-bg-default: #FFF0FA;
      --sq-bg-surface: #FFFFFF;
      --sq-bg-elevated: #FFFFFF;
      --sq-bg-inverse: #B01286;
      --sq-bg-overlay: rgba(176, 18, 134, 0.4);
      --sq-bg-subtle: #F4C4EA;
      --sq-bg-header: #F4C4EA;

      --sq-fg-default: #1A1A1A;
      --sq-fg-muted: #B01286;
      --sq-fg-inverse: #FFFFFF;
      --sq-fg-link: #B01286;
      --sq-fg-link-hover: #E318A9;

      --sq-border-default: #E318A9;
      --sq-border-subtle: rgba(227, 24, 169, 0.2);
      --sq-border-focus: #E318A9;

      --sq-accent-primary: #E318A9;
      --sq-accent-primary-hover: #C91596;
      --sq-accent-primary-active: #B01286;
      --sq-accent-primary-light: rgba(227, 24, 169, 0.1);
      --sq-accent-primary-light-hover: rgba(227, 24, 169, 0.18);
    }

    /* Fuchsia — Dark Mode */
    :host([sq-theme="fuchsia"][sq-mode="dark"]) .theme-wrapper,
    :host([sq-theme="fuchsia"]) .theme-wrapper[sq-mode="dark"] {
      --sq-bg-default: #1A0A18;
      --sq-bg-surface: #2D1428;
      --sq-bg-elevated: #3D1E34;
      --sq-bg-inverse: #FFB4F0;
      --sq-bg-overlay: rgba(26, 10, 24, 0.7);
      --sq-bg-subtle: #3D1E34;
      --sq-bg-header: #2D1428;

      --sq-fg-default: #FFB4F0;
      --sq-fg-muted: #B01286;
      --sq-fg-inverse: #1A0A18;
      --sq-fg-link: #FFB4F0;
      --sq-fg-link-hover: #E318A9;

      --sq-border-default: rgba(227, 24, 169, 0.3);
      --sq-border-subtle: rgba(227, 24, 169, 0.12);
      --sq-border-focus: #E318A9;

      --sq-accent-primary: #E318A9;
      --sq-accent-primary-hover: #C91596;
      --sq-accent-primary-active: #B01286;
      --sq-accent-primary-light: rgba(227, 24, 169, 0.15);
      --sq-accent-primary-light-hover: rgba(227, 24, 169, 0.25);

      --sq-shadow-sm: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
      --sq-shadow-md: 0px 8px 20px 0px rgba(0, 0, 0, 0.5);
      --sq-shadow-lg: 0px 16px 40px 0px rgba(0, 0, 0, 0.6);
    }

    /* ======================================================================
       THEME: magenta — based on Eye Magenta #C71585
       Accessible variations: darker for text (#9F106A), lighter for backgrounds
       ====================================================================== */
    :host([sq-theme="magenta"]) .theme-wrapper {
      --sq-bg-default: #FFF0F6;
      --sq-bg-surface: #FFFFFF;
      --sq-bg-elevated: #FFFFFF;
      --sq-bg-inverse: #9F106A;
      --sq-bg-overlay: rgba(159, 16, 106, 0.4);
      --sq-bg-subtle: #F0C4DE;
      --sq-bg-header: #F0C4DE;

      --sq-fg-default: #1A1A1A;
      --sq-fg-muted: #9F106A;
      --sq-fg-inverse: #FFFFFF;
      --sq-fg-link: #9F106A;
      --sq-fg-link-hover: #C71585;

      --sq-border-default: #C71585;
      --sq-border-subtle: rgba(199, 21, 133, 0.2);
      --sq-border-focus: #C71585;

      --sq-accent-primary: #C71585;
      --sq-accent-primary-hover: #B01276;
      --sq-accent-primary-active: #9F106A;
      --sq-accent-primary-light: rgba(199, 21, 133, 0.1);
      --sq-accent-primary-light-hover: rgba(199, 21, 133, 0.18);
    }

    /* Magenta — Dark Mode */
    :host([sq-theme="magenta"][sq-mode="dark"]) .theme-wrapper,
    :host([sq-theme="magenta"]) .theme-wrapper[sq-mode="dark"] {
      --sq-bg-default: #1A0A16;
      --sq-bg-surface: #2D1424;
      --sq-bg-elevated: #3D1E30;
      --sq-bg-inverse: #FFB4E0;
      --sq-bg-overlay: rgba(26, 10, 22, 0.7);
      --sq-bg-subtle: #3D1E30;
      --sq-bg-header: #2D1424;

      --sq-fg-default: #FFB4E0;
      --sq-fg-muted: #9F106A;
      --sq-fg-inverse: #1A0A16;
      --sq-fg-link: #FFB4E0;
      --sq-fg-link-hover: #C71585;

      --sq-border-default: rgba(199, 21, 133, 0.3);
      --sq-border-subtle: rgba(199, 21, 133, 0.12);
      --sq-border-focus: #C71585;

      --sq-accent-primary: #C71585;
      --sq-accent-primary-hover: #B01276;
      --sq-accent-primary-active: #9F106A;
      --sq-accent-primary-light: rgba(199, 21, 133, 0.15);
      --sq-accent-primary-light-hover: rgba(199, 21, 133, 0.25);

      --sq-shadow-sm: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
      --sq-shadow-md: 0px 8px 20px 0px rgba(0, 0, 0, 0.5);
      --sq-shadow-lg: 0px 16px 40px 0px rgba(0, 0, 0, 0.6);
    }

    /* ======================================================================
       THEME: rainbow — global color cycle
       Each child element gets a different accent color via nth-child cycling
       through the palette: red, lime, cyan, green, gold, pink, fuchsia, magenta
       ====================================================================== */
    :host([sq-theme="rainbow"]) .theme-wrapper > * {
      /* Default to red for elements not matched by nth-child */
      --sq-accent-primary: #EE2E31;
      --sq-accent-primary-hover: #D42629;
      --sq-accent-primary-active: #B82426;
      --sq-accent-primary-light: rgba(238, 46, 49, 0.1);
      --sq-accent-primary-light-hover: rgba(238, 46, 49, 0.18);
      --sq-border-default: #EE2E31;
      --sq-border-subtle: rgba(238, 46, 49, 0.2);
      --sq-border-focus: #EE2E31;
      --sq-fg-link: #B82426;
      --sq-fg-link-hover: #EE2E31;
      --sq-fg-muted: #B82426;
      --sq-bg-inverse: #B82426;
      --sq-bg-overlay: rgba(184, 36, 38, 0.4);
    }

    /* Rainbow cycle — 8 colors */
    :host([sq-theme="rainbow"]) .theme-wrapper > *:nth-child(8n+1) {
      --sq-accent-primary: #EE2E31;
      --sq-accent-primary-hover: #D42629;
      --sq-accent-primary-active: #B82426;
      --sq-accent-primary-light: rgba(238, 46, 49, 0.1);
      --sq-accent-primary-light-hover: rgba(238, 46, 49, 0.18);
      --sq-border-default: #EE2E31;
      --sq-border-subtle: rgba(238, 46, 49, 0.2);
      --sq-border-focus: #EE2E31;
      --sq-fg-link: #B82426;
      --sq-fg-link-hover: #EE2E31;
      --sq-fg-muted: #B82426;
      --sq-bg-inverse: #B82426;
      --sq-bg-overlay: rgba(184, 36, 38, 0.4);
    }

    :host([sq-theme="rainbow"]) .theme-wrapper > *:nth-child(8n+2) {
      --sq-accent-primary: #A8E400;
      --sq-accent-primary-hover: #96CC00;
      --sq-accent-primary-active: #7A9F00;
      --sq-accent-primary-light: rgba(168, 228, 0, 0.1);
      --sq-accent-primary-light-hover: rgba(168, 228, 0, 0.18);
      --sq-border-default: #A8E400;
      --sq-border-subtle: rgba(168, 228, 0, 0.2);
      --sq-border-focus: #A8E400;
      --sq-fg-link: #7A9F00;
      --sq-fg-link-hover: #A8E400;
      --sq-fg-muted: #7A9F00;
      --sq-bg-inverse: #7A9F00;
      --sq-bg-overlay: rgba(122, 159, 0, 0.4);
    }

    :host([sq-theme="rainbow"]) .theme-wrapper > *:nth-child(8n+3) {
      --sq-accent-primary: #00FFDB;
      --sq-accent-primary-hover: #00E6C6;
      --sq-accent-primary-active: #00B89A;
      --sq-accent-primary-light: rgba(0, 255, 219, 0.1);
      --sq-accent-primary-light-hover: rgba(0, 255, 219, 0.18);
      --sq-border-default: #00FFDB;
      --sq-border-subtle: rgba(0, 255, 219, 0.2);
      --sq-border-focus: #00FFDB;
      --sq-fg-link: #00B89A;
      --sq-fg-link-hover: #00FFDB;
      --sq-fg-muted: #00B89A;
      --sq-bg-inverse: #00B89A;
      --sq-bg-overlay: rgba(0, 184, 154, 0.4);
    }

    :host([sq-theme="rainbow"]) .theme-wrapper > *:nth-child(8n+4) {
      --sq-accent-primary: #32CD32;
      --sq-accent-primary-hover: #2DB82D;
      --sq-accent-primary-active: #269F26;
      --sq-accent-primary-light: rgba(50, 205, 50, 0.1);
      --sq-accent-primary-light-hover: rgba(50, 205, 50, 0.18);
      --sq-border-default: #32CD32;
      --sq-border-subtle: rgba(50, 205, 50, 0.2);
      --sq-border-focus: #32CD32;
      --sq-fg-link: #269F26;
      --sq-fg-link-hover: #32CD32;
      --sq-fg-muted: #269F26;
      --sq-bg-inverse: #269F26;
      --sq-bg-overlay: rgba(38, 159, 38, 0.4);
    }

    :host([sq-theme="rainbow"]) .theme-wrapper > *:nth-child(8n+5) {
      --sq-accent-primary: #FFD700;
      --sq-accent-primary-hover: #E6C000;
      --sq-accent-primary-active: #B89600;
      --sq-accent-primary-light: rgba(255, 215, 0, 0.1);
      --sq-accent-primary-light-hover: rgba(255, 215, 0, 0.18);
      --sq-border-default: #FFD700;
      --sq-border-subtle: rgba(255, 215, 0, 0.2);
      --sq-border-focus: #FFD700;
      --sq-fg-link: #B89600;
      --sq-fg-link-hover: #FFD700;
      --sq-fg-muted: #B89600;
      --sq-bg-inverse: #B89600;
      --sq-bg-overlay: rgba(184, 150, 0, 0.4);
    }

    :host([sq-theme="rainbow"]) .theme-wrapper > *:nth-child(8n+6) {
      --sq-accent-primary: #FF69B4;
      --sq-accent-primary-hover: #E65FA2;
      --sq-accent-primary-active: #CC5490;
      --sq-accent-primary-light: rgba(255, 105, 180, 0.1);
      --sq-accent-primary-light-hover: rgba(255, 105, 180, 0.18);
      --sq-border-default: #FF69B4;
      --sq-border-subtle: rgba(255, 105, 180, 0.2);
      --sq-border-focus: #FF69B4;
      --sq-fg-link: #CC5490;
      --sq-fg-link-hover: #FF69B4;
      --sq-fg-muted: #CC5490;
      --sq-bg-inverse: #CC5490;
      --sq-bg-overlay: rgba(204, 84, 144, 0.4);
    }

    :host([sq-theme="rainbow"]) .theme-wrapper > *:nth-child(8n+7) {
      --sq-accent-primary: #E318A9;
      --sq-accent-primary-hover: #C91596;
      --sq-accent-primary-active: #B01286;
      --sq-accent-primary-light: rgba(227, 24, 169, 0.1);
      --sq-accent-primary-light-hover: rgba(227, 24, 169, 0.18);
      --sq-border-default: #E318A9;
      --sq-border-subtle: rgba(227, 24, 169, 0.2);
      --sq-border-focus: #E318A9;
      --sq-fg-link: #B01286;
      --sq-fg-link-hover: #E318A9;
      --sq-fg-muted: #B01286;
      --sq-bg-inverse: #B01286;
      --sq-bg-overlay: rgba(176, 18, 134, 0.4);
    }

    :host([sq-theme="rainbow"]) .theme-wrapper > *:nth-child(8n) {
      --sq-accent-primary: #C71585;
      --sq-accent-primary-hover: #B01276;
      --sq-accent-primary-active: #9F106A;
      --sq-accent-primary-light: rgba(199, 21, 133, 0.1);
      --sq-accent-primary-light-hover: rgba(199, 21, 133, 0.18);
      --sq-border-default: #C71585;
      --sq-border-subtle: rgba(199, 21, 133, 0.2);
      --sq-border-focus: #C71585;
      --sq-fg-link: #9F106A;
      --sq-fg-link-hover: #C71585;
      --sq-fg-muted: #9F106A;
      --sq-bg-inverse: #9F106A;
      --sq-bg-overlay: rgba(159, 16, 106, 0.4);
    }

    /* ======================================================================
       THEME: sq-theme — the signature SQ rainbow theme
       Same as "rainbow" but accessible via sq-theme="sq-theme" attribute.
       Each child element gets a different accent color via nth-child cycling
       through the palette: red, lime, cyan, green, gold, pink, fuchsia, magenta
       ====================================================================== */
    :host([sq-theme="sq-theme"]) .theme-wrapper > * {
      --sq-accent-primary: #EE2E31;
      --sq-accent-primary-hover: #D42629;
      --sq-accent-primary-active: #B82426;
      --sq-accent-primary-light: rgba(238, 46, 49, 0.1);
      --sq-accent-primary-light-hover: rgba(238, 46, 49, 0.18);
      --sq-border-default: #EE2E31;
      --sq-border-subtle: rgba(238, 46, 49, 0.2);
      --sq-border-focus: #EE2E31;
      --sq-fg-link: #B82426;
      --sq-fg-link-hover: #EE2E31;
      --sq-fg-muted: #B82426;
      --sq-bg-inverse: #B82426;
      --sq-bg-overlay: rgba(184, 36, 38, 0.4);
    }

    :host([sq-theme="sq-theme"]) .theme-wrapper > *:nth-child(8n+1) {
      --sq-accent-primary: #EE2E31;
      --sq-accent-primary-hover: #D42629;
      --sq-accent-primary-active: #B82426;
      --sq-accent-primary-light: rgba(238, 46, 49, 0.1);
      --sq-accent-primary-light-hover: rgba(238, 46, 49, 0.18);
      --sq-border-default: #EE2E31;
      --sq-border-subtle: rgba(238, 46, 49, 0.2);
      --sq-border-focus: #EE2E31;
      --sq-fg-link: #B82426;
      --sq-fg-link-hover: #EE2E31;
      --sq-fg-muted: #B82426;
      --sq-bg-inverse: #B82426;
      --sq-bg-overlay: rgba(184, 36, 38, 0.4);
    }

    :host([sq-theme="sq-theme"]) .theme-wrapper > *:nth-child(8n+2) {
      --sq-accent-primary: #A8E400;
      --sq-accent-primary-hover: #96CC00;
      --sq-accent-primary-active: #7A9F00;
      --sq-accent-primary-light: rgba(168, 228, 0, 0.1);
      --sq-accent-primary-light-hover: rgba(168, 228, 0, 0.18);
      --sq-border-default: #A8E400;
      --sq-border-subtle: rgba(168, 228, 0, 0.2);
      --sq-border-focus: #A8E400;
      --sq-fg-link: #7A9F00;
      --sq-fg-link-hover: #A8E400;
      --sq-fg-muted: #7A9F00;
      --sq-bg-inverse: #7A9F00;
      --sq-bg-overlay: rgba(122, 159, 0, 0.4);
    }

    :host([sq-theme="sq-theme"]) .theme-wrapper > *:nth-child(8n+3) {
      --sq-accent-primary: #00FFDB;
      --sq-accent-primary-hover: #00E6C6;
      --sq-accent-primary-active: #00B89A;
      --sq-accent-primary-light: rgba(0, 255, 219, 0.1);
      --sq-accent-primary-light-hover: rgba(0, 255, 219, 0.18);
      --sq-border-default: #00FFDB;
      --sq-border-subtle: rgba(0, 255, 219, 0.2);
      --sq-border-focus: #00FFDB;
      --sq-fg-link: #00B89A;
      --sq-fg-link-hover: #00FFDB;
      --sq-fg-muted: #00B89A;
      --sq-bg-inverse: #00B89A;
      --sq-bg-overlay: rgba(0, 184, 154, 0.4);
    }

    :host([sq-theme="sq-theme"]) .theme-wrapper > *:nth-child(8n+4) {
      --sq-accent-primary: #32CD32;
      --sq-accent-primary-hover: #2DB82D;
      --sq-accent-primary-active: #269F26;
      --sq-accent-primary-light: rgba(50, 205, 50, 0.1);
      --sq-accent-primary-light-hover: rgba(50, 205, 50, 0.18);
      --sq-border-default: #32CD32;
      --sq-border-subtle: rgba(50, 205, 50, 0.2);
      --sq-border-focus: #32CD32;
      --sq-fg-link: #269F26;
      --sq-fg-link-hover: #32CD32;
      --sq-fg-muted: #269F26;
      --sq-bg-inverse: #269F26;
      --sq-bg-overlay: rgba(38, 159, 38, 0.4);
    }

    :host([sq-theme="sq-theme"]) .theme-wrapper > *:nth-child(8n+5) {
      --sq-accent-primary: #FFD700;
      --sq-accent-primary-hover: #E6C000;
      --sq-accent-primary-active: #B89600;
      --sq-accent-primary-light: rgba(255, 215, 0, 0.1);
      --sq-accent-primary-light-hover: rgba(255, 215, 0, 0.18);
      --sq-border-default: #FFD700;
      --sq-border-subtle: rgba(255, 215, 0, 0.2);
      --sq-border-focus: #FFD700;
      --sq-fg-link: #B89600;
      --sq-fg-link-hover: #FFD700;
      --sq-fg-muted: #B89600;
      --sq-bg-inverse: #B89600;
      --sq-bg-overlay: rgba(184, 150, 0, 0.4);
    }

    :host([sq-theme="sq-theme"]) .theme-wrapper > *:nth-child(8n+6) {
      --sq-accent-primary: #FF69B4;
      --sq-accent-primary-hover: #E65FA2;
      --sq-accent-primary-active: #CC5490;
      --sq-accent-primary-light: rgba(255, 105, 180, 0.1);
      --sq-accent-primary-light-hover: rgba(255, 105, 180, 0.18);
      --sq-border-default: #FF69B4;
      --sq-border-subtle: rgba(255, 105, 180, 0.2);
      --sq-border-focus: #FF69B4;
      --sq-fg-link: #CC5490;
      --sq-fg-link-hover: #FF69B4;
      --sq-fg-muted: #CC5490;
      --sq-bg-inverse: #CC5490;
      --sq-bg-overlay: rgba(204, 84, 144, 0.4);
    }

    :host([sq-theme="sq-theme"]) .theme-wrapper > *:nth-child(8n+7) {
      --sq-accent-primary: #E318A9;
      --sq-accent-primary-hover: #C91596;
      --sq-accent-primary-active: #B01286;
      --sq-accent-primary-light: rgba(227, 24, 169, 0.1);
      --sq-accent-primary-light-hover: rgba(227, 24, 169, 0.18);
      --sq-border-default: #E318A9;
      --sq-border-subtle: rgba(227, 24, 169, 0.2);
      --sq-border-focus: #E318A9;
      --sq-fg-link: #B01286;
      --sq-fg-link-hover: #E318A9;
      --sq-fg-muted: #B01286;
      --sq-bg-inverse: #B01286;
      --sq-bg-overlay: rgba(176, 18, 134, 0.4);
    }

    :host([sq-theme="sq-theme"]) .theme-wrapper > *:nth-child(8n) {
      --sq-accent-primary: #C71585;
      --sq-accent-primary-hover: #B01276;
      --sq-accent-primary-active: #9F106A;
      --sq-accent-primary-light: rgba(199, 21, 133, 0.1);
      --sq-accent-primary-light-hover: rgba(199, 21, 133, 0.18);
      --sq-border-default: #C71585;
      --sq-border-subtle: rgba(199, 21, 133, 0.2);
      --sq-border-focus: #C71585;
      --sq-fg-link: #9F106A;
      --sq-fg-link-hover: #C71585;
      --sq-fg-muted: #9F106A;
      --sq-bg-inverse: #9F106A;
      --sq-bg-overlay: rgba(159, 16, 106, 0.4);
    }

    /* sq-theme — Dark Mode overrides for rainbow cycling */
    :host([sq-theme="sq-theme"][sq-mode="dark"]) .theme-wrapper > *,
    :host([sq-theme="sq-theme"]) .theme-wrapper[sq-mode="dark"] > * {
      --sq-bg-default: #1A1A2E;
      --sq-bg-surface: #16213E;
      --sq-bg-elevated: #0F3460;
      --sq-fg-default: #E8E8E8;
      --sq-fg-inverse: #1A1A2E;
      --sq-shadow-sm: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
      --sq-shadow-md: 0px 8px 20px 0px rgba(0, 0, 0, 0.5);
      --sq-shadow-lg: 0px 16px 40px 0px rgba(0, 0, 0, 0.6);
    }

    :host([sq-theme="sq-theme"][sq-mode="dark"]) .theme-wrapper > *:nth-child(8n+1),
    :host([sq-theme="sq-theme"]) .theme-wrapper[sq-mode="dark"] > *:nth-child(8n+1) {
      --sq-bg-default: #1A0F0F;
      --sq-bg-surface: #2D1B1B;
      --sq-bg-elevated: #3D2828;
      --sq-fg-default: #FFB4B4;
      --sq-fg-link: #FFB4B4;
      --sq-fg-link-hover: #EE2E31;
      --sq-fg-inverse: #1A0F0F;
    }

    :host([sq-theme="sq-theme"][sq-mode="dark"]) .theme-wrapper > *:nth-child(8n+2),
    :host([sq-theme="sq-theme"]) .theme-wrapper[sq-mode="dark"] > *:nth-child(8n+2) {
      --sq-bg-default: #0F1A0A;
      --sq-bg-surface: #1B2D14;
      --sq-bg-elevated: #283D1E;
      --sq-fg-default: #C4F48A;
      --sq-fg-link: #C4F48A;
      --sq-fg-link-hover: #A8E400;
      --sq-fg-inverse: #0F1A0A;
    }

    :host([sq-theme="sq-theme"][sq-mode="dark"]) .theme-wrapper > *:nth-child(8n+3),
    :host([sq-theme="sq-theme"]) .theme-wrapper[sq-mode="dark"] > *:nth-child(8n+3) {
      --sq-bg-default: #0A1A18;
      --sq-bg-surface: #142D2A;
      --sq-bg-elevated: #1E3D39;
      --sq-fg-default: #8AFFE8;
      --sq-fg-link: #8AFFE8;
      --sq-fg-link-hover: #00FFDB;
      --sq-fg-inverse: #0A1A18;
    }

    :host([sq-theme="sq-theme"][sq-mode="dark"]) .theme-wrapper > *:nth-child(8n+4),
    :host([sq-theme="sq-theme"]) .theme-wrapper[sq-mode="dark"] > *:nth-child(8n+4) {
      --sq-bg-default: #0A1A0A;
      --sq-bg-surface: #142D14;
      --sq-bg-elevated: #1E3D1E;
      --sq-fg-default: #8AFF8A;
      --sq-fg-link: #8AFF8A;
      --sq-fg-link-hover: #32CD32;
      --sq-fg-inverse: #0A1A0A;
    }

    :host([sq-theme="sq-theme"][sq-mode="dark"]) .theme-wrapper > *:nth-child(8n+5),
    :host([sq-theme="sq-theme"]) .theme-wrapper[sq-mode="dark"] > *:nth-child(8n+5) {
      --sq-bg-default: #1A1A0A;
      --sq-bg-surface: #2D2D14;
      --sq-bg-elevated: #3D3D1E;
      --sq-fg-default: #FFE88A;
      --sq-fg-link: #FFE88A;
      --sq-fg-link-hover: #FFD700;
      --sq-fg-inverse: #1A1A0A;
    }

    :host([sq-theme="sq-theme"][sq-mode="dark"]) .theme-wrapper > *:nth-child(8n+6),
    :host([sq-theme="sq-theme"]) .theme-wrapper[sq-mode="dark"] > *:nth-child(8n+6) {
      --sq-bg-default: #1A0F18;
      --sq-bg-surface: #2D1B26;
      --sq-bg-elevated: #3D2834;
      --sq-fg-default: #FFB4DC;
      --sq-fg-link: #FFB4DC;
      --sq-fg-link-hover: #FF69B4;
      --sq-fg-inverse: #1A0F18;
    }

    :host([sq-theme="sq-theme"][sq-mode="dark"]) .theme-wrapper > *:nth-child(8n+7),
    :host([sq-theme="sq-theme"]) .theme-wrapper[sq-mode="dark"] > *:nth-child(8n+7) {
      --sq-bg-default: #1A0A18;
      --sq-bg-surface: #2D1428;
      --sq-bg-elevated: #3D1E34;
      --sq-fg-default: #FFB4F0;
      --sq-fg-link: #FFB4F0;
      --sq-fg-link-hover: #E318A9;
      --sq-fg-inverse: #1A0A18;
    }

    :host([sq-theme="sq-theme"][sq-mode="dark"]) .theme-wrapper > *:nth-child(8n),
    :host([sq-theme="sq-theme"]) .theme-wrapper[sq-mode="dark"] > *:nth-child(8n) {
      --sq-bg-default: #1A0A16;
      --sq-bg-surface: #2D1424;
      --sq-bg-elevated: #3D1E30;
      --sq-fg-default: #FFB4E0;
      --sq-fg-link: #FFB4E0;
      --sq-fg-link-hover: #C71585;
      --sq-fg-inverse: #1A0A16;
    }
  `;

  /** The name of the theme to apply (e.g. "blue", "red", "rainbow", "sq-theme"). */
  @property({ type: String, attribute: 'sq-theme' }) sqTheme = '';

  override render() {
    return html`<div class="theme-wrapper"><slot></slot></div>`;
  }
}
