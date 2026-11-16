import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export interface StepperStep {
  label: string;
  description?: string;
  status?: 'completed' | 'active' | 'upcoming' | 'error';
}

/**
 * Squiddy Stepper — multi-step progress indicator
 *
 * Displays a step-by-step progress indicator for multi-step processes.
 * Supports horizontal and vertical orientations.
 *
 * @fires change - Fired when a step is clicked
 */
@customElement('sq-stepper')
export class SqStepper extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .stepper {
      display: flex;
      flex-direction: var(--sq-direction, row);
      align-items: var(--sq-align, flex-start);
      gap: var(--sq-space-4);
    }

    :host([orientation="vertical"]) .stepper {
      flex-direction: column;
      align-items: flex-start;
    }

    .step {
      display: flex;
      align-items: center;
      gap: var(--sq-space-3);
      flex: 0 0 auto;
    }

    :host([orientation="vertical"]) .step {
      flex-direction: row;
      align-items: flex-start;
      width: 100%;
      flex: 0 0 auto;
      position: relative;
    }

    .step-indicator {
      width: 32px;
      height: 32px;
      border-radius: var(--sq-radius-full);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--sq-text-sm);
      font-weight: var(--sq-font-weight-semibold);
      flex-shrink: 0;
      transition: var(--sq-transition-color);
      border: 2px solid var(--sq-border-default);
      background: var(--sq-bg-surface);
      color: var(--sq-fg-muted);
    }

    .step.completed .step-indicator {
      background: var(--sq-color-success);
      border-color: var(--sq-color-success);
      color: var(--sq-fg-inverse);
    }

    .step.active .step-indicator {
      background: var(--sq-accent-primary);
      border-color: var(--sq-accent-primary);
      color: var(--sq-fg-inverse);
    }

    .step.error .step-indicator {
      background: var(--sq-color-danger);
      border-color: var(--sq-color-danger);
      color: var(--sq-fg-inverse);
    }

    .step.upcoming .step-indicator {
      border-color: var(--sq-border-subtle);
      color: var(--sq-fg-subtle);
    }

    .step-content {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .step-label {
      font-size: var(--sq-text-sm);
      font-weight: var(--sq-font-weight-medium);
      color: var(--sq-fg-muted);
      transition: var(--sq-transition-color);
    }

    .step.active .step-label {
      color: var(--sq-fg-default);
      font-weight: var(--sq-font-weight-semibold);
    }

    .step.completed .step-label {
      color: var(--sq-color-success);
    }

    .step.error .step-label {
      color: var(--sq-color-danger);
    }

    .step-description {
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-subtle);
    }

    .step-connector {
      flex: 1;
      min-width: 24px;
      height: 2px;
      background: var(--sq-border-subtle);
      align-self: center;
      margin: 0 var(--sq-space-1);
    }

    :host([orientation="vertical"]) .step-connector {
      position: absolute;
      width: 2px;
      height: calc(100% - 32px);
      min-height: 24px;
      min-width: 0;
      flex: none;
      top: 32px;
      left: 15px;
      align-self: auto;
      margin: 0;
    }

    .step-connector.completed {
      background: var(--sq-color-success);
    }

    :host([clickable]) .step {
      cursor: pointer;
    }

    :host([clickable]) .step:hover .step-indicator {
      border-color: var(--sq-accent-primary);
    }
  `;

  @property({ type: Number }) currentStep = 0;
  @property({ type: String }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  @property({ type: Boolean }) clickable = false;
  @property({ type: Array }) steps: StepperStep[] = [];

  private _onStepClick(index: number) {
    if (!this.clickable) return;
    this.currentStep = index;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { step: index },
      bubbles: true,
      composed: true,
    }));
  }

  private _getStatus(index: number): string {
    if (this.steps[index]?.status) return this.steps[index].status;
    if (index < this.currentStep) return 'completed';
    if (index === this.currentStep) return 'active';
    return 'upcoming';
  }

  override render() {
    return html`
      <div class="stepper" style="--sq-direction: ${this.orientation === 'vertical' ? 'column' : 'row'};">
        ${this.steps.map((step, index) => {
          const status = this._getStatus(index);
          const hasNext = index < this.steps.length - 1;
          const connectorCompleted = index < this.currentStep;
          const showVerticalConnector = this.orientation === 'vertical' && hasNext;

          return html`
            <div
              class="step ${status}"
              ?data-clickable=${this.clickable}
              @click=${() => this._onStepClick(index)}
              role="tab"
              aria-selected=${status === 'active'}
              aria-disabled=${status === 'upcoming'}
            >
              ${showVerticalConnector ? html`
                <div class="step-connector ${connectorCompleted ? 'completed' : ''}" role="presentation"></div>
              ` : ''}
              <div class="step-indicator">
                ${status === 'completed'
                  ? html`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>`
                  : index + 1}
              </div>
              <div class="step-content">
                <span class="step-label">${step.label}</span>
                ${step.description ? html`<span class="step-description">${step.description}</span>` : ''}
              </div>
            </div>
            ${this.orientation !== 'vertical' && hasNext ? html`
              <div class="step-connector ${connectorCompleted ? 'completed' : ''}" role="presentation"></div>
            ` : ''}
          `;
        })}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-stepper': SqStepper;
  }
}
