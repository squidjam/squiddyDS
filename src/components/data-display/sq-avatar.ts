import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Avatar — covers: `<img>` (user avatar)
 *
 * Displays a user's profile image or initials fallback.
 *
 * @slot - Fallback content (e.g., initials or icon)
 *
 * @cssproperty --sq-radius-full - Circular avatar shape
 */
@customElement('sq-avatar')
export class SqAvatar extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
    }

    .avatar {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: var(--sq-radius-full);
      background: var(--sq-accent-primary-light);
      color: var(--sq-accent-primary);
      font-family: var(--sq-font-family);
      font-weight: var(--sq-font-weight-semibold);
      overflow: hidden;
      flex-shrink: 0;
    }

    .avatar[size="xs"] {
      width: 24px;
      height: 24px;
      font-size: var(--sq-text-xs);
    }

    .avatar[size="sm"] {
      width: 32px;
      height: 32px;
      font-size: var(--sq-text-xs);
    }

    .avatar[size="md"] {
      width: 40px;
      height: 40px;
      font-size: var(--sq-text-sm);
    }

    .avatar[size="lg"] {
      width: 56px;
      height: 56px;
      font-size: var(--sq-text-md);
    }

    .avatar[size="xl"] {
      width: 72px;
      height: 72px;
      font-size: var(--sq-text-lg);
    }

    .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .avatar.rounded {
      border-radius: var(--sq-radius-md);
    }

    .avatar.square {
      border-radius: var(--sq-radius-none);
    }

    .avatar[variant="success"] {
      background: var(--sq-color-success-light);
      color: var(--sq-color-success);
    }

    .avatar[variant="warning"] {
      background: var(--sq-color-warning-light);
      color: var(--sq-color-warning);
    }

    .avatar[variant="danger"] {
      background: var(--sq-color-danger-light);
      color: var(--sq-color-danger);
    }

    .avatar[variant="info"] {
      background: var(--sq-color-info-light);
      color: var(--sq-color-info);
    }

    .initials {
      text-transform: uppercase;
      line-height: 1;
      user-select: none;
    }
  `;

  @property({ type: String }) src = '';
  @property({ type: String }) alt = '';
  @property({ type: String }) initials = '';
  @property({ type: String }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @property({ type: String }) shape: 'circle' | 'rounded' | 'square' = 'circle';
  @property({ type: String }) variant: 'default' | 'success' | 'warning' | 'danger' | 'info' = 'default';

  override render() {
    const shapeClass = this.shape === 'circle' ? '' : this.shape;

    if (this.src) {
      return html`
        <div class="avatar ${shapeClass}" size=${this.size} variant=${this.variant}>
          <img src=${this.src} alt=${this.alt} loading="lazy" />
        </div>
      `;
    }

    return html`
      <div class="avatar ${shapeClass}" size=${this.size} variant=${this.variant}>
        <span class="initials"><slot>${this.initials}</slot></span>
      </div>
    `;
  }
}

/**
 * Squiddy Avatar Group — stacks avatars in an overlapping group
 *
 * @slot - Avatar elements (`<sq-avatar>`)
 */
@customElement('sq-avatar-group')
export class SqAvatarGroup extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
      align-items: center;
    }

    .group {
      display: inline-flex;
      align-items: center;
    }

    sq-avatar {
      margin-left: -8px;
      outline: 2px solid var(--sq-bg-surface);
    }

    sq-avatar:first-child {
      margin-left: 0;
    }

    .more {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: var(--sq-radius-full);
      background: var(--sq-bg-subtle);
      color: var(--sq-fg-muted);
      font-size: var(--sq-text-xs);
      font-weight: var(--sq-font-weight-semibold);
      margin-left: -8px;
      outline: 2px solid var(--sq-bg-surface);
      user-select: none;
    }
  `;

  @property({ type: Number }) max = 5;

  override render() {
    return html`
      <div class="group">
        <slot></slot>
        <span class="more">+${this.max}</span>
      </div>
    `;
  }
}
