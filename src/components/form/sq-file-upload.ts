import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export interface UploadedFile {
  file: File;
  preview?: string;
  progress?: number;
  error?: string;
}

/**
 * Squiddy File Upload — drag-and-drop file upload with preview
 *
 * Supports single and multiple file selection with drag-and-drop.
 * Shows file previews for images and progress indicators.
 *
 * @fires change - Fired when files are selected
 * @fires remove - Fired when a file is removed
 */
@customElement('sq-file-upload')
export class SqFileUpload extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .upload-area {
      border: 2px dashed var(--sq-border-default);
      border-radius: var(--sq-radius-lg);
      padding: var(--sq-space-8) var(--sq-space-4);
      text-align: center;
      cursor: pointer;
      transition: var(--sq-transition-color);
      background: var(--sq-bg-surface);
    }

    .upload-area:hover,
    .upload-area.dragover {
      border-color: var(--sq-accent-primary);
      background: var(--sq-accent-primary-light);
    }

    :host([disabled]) .upload-area {
      opacity: 0.4;
      pointer-events: none;
    }

    .upload-icon {
      width: 48px;
      height: 48px;
      margin: 0 auto var(--sq-space-3);
      color: var(--sq-fg-muted);
    }

    .upload-text {
      font-size: var(--sq-text-sm);
      color: var(--sq-fg-muted);
      margin: 0;
    }

    .upload-text strong {
      color: var(--sq-accent-primary);
      font-weight: var(--sq-font-weight-semibold);
    }

    .upload-hint {
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-subtle);
      margin-top: var(--sq-space-2);
    }

    .file-input {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
      pointer-events: none;
      overflow: hidden;
    }

    .file-list {
      display: flex;
      flex-direction: column;
      gap: var(--sq-space-2);
      margin-top: var(--sq-space-4);
    }

    .file-item {
      display: flex;
      align-items: center;
      gap: var(--sq-space-3);
      padding: var(--sq-space-3);
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-md);
      background: var(--sq-bg-subtle);
    }

    .file-preview {
      width: 40px;
      height: 40px;
      border-radius: var(--sq-radius-sm);
      object-fit: cover;
      flex-shrink: 0;
    }

    .file-icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--sq-bg-subtle);
      border-radius: var(--sq-radius-sm);
      color: var(--sq-fg-muted);
      flex-shrink: 0;
    }

    .file-info {
      flex: 1;
      min-width: 0;
    }

    .file-name {
      font-size: var(--sq-text-sm);
      font-weight: var(--sq-font-weight-medium);
      color: var(--sq-fg-default);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .file-size {
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
    }

    .file-error {
      font-size: var(--sq-text-xs);
      color: var(--sq-color-danger);
    }

    .file-progress {
      width: 100%;
      height: 4px;
      background: var(--sq-border-subtle);
      border-radius: var(--sq-radius-full);
      margin-top: var(--sq-space-1);
      overflow: hidden;
    }

    .file-progress-bar {
      height: 100%;
      background: var(--sq-accent-primary);
      border-radius: var(--sq-radius-full);
      transition: width var(--sq-motion-base);
    }

    .remove-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border: none;
      border-radius: var(--sq-radius-full);
      background: transparent;
      color: var(--sq-fg-muted);
      cursor: pointer;
      transition: var(--sq-transition-color);
      flex-shrink: 0;
    }

    .remove-btn:hover {
      background: var(--sq-color-danger-light);
      color: var(--sq-color-danger);
    }
  `;

  @property({ type: Boolean }) multiple = false;
  @property({ type: String }) accept = '';
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) label = 'Browse files';
  @property({ type: String }) hint = '';
  @property({ type: Number }) maxSize = Infinity;
  @property({ type: Array }) files: UploadedFile[] = [];

  @state() private _dragOver = false;
  private _input?: HTMLInputElement;

  private _onFileSelect(e: Event) {
    const target = e.target as HTMLInputElement;
    const selectedFiles = target.files;
    if (!selectedFiles) return;
    this._addFiles(Array.from(selectedFiles));
    target.value = '';
  }

  private _addFiles(newFiles: File[]) {
    const uploadedFiles: UploadedFile[] = [];

    for (const file of newFiles) {
      if (this.maxSize < Infinity && file.size > this.maxSize) {
        uploadedFiles.push({
          file,
          error: `File exceeds ${this._formatSize(this.maxSize)}`,
        });
        continue;
      }

      const uploaded: UploadedFile = { file };

      if (file.type.startsWith('image/')) {
        uploaded.preview = URL.createObjectURL(file);
      }

      uploadedFiles.push(uploaded);
    }

    this.files = this.multiple ? [...this.files, ...uploadedFiles] : uploadedFiles;

    this.dispatchEvent(new CustomEvent('change', {
      detail: { files: this.files },
      bubbles: true,
      composed: true,
    }));
  }

  private _removeFile(index: number) {
    const removed = this.files[index];
    if (removed.preview) {
      URL.revokeObjectURL(removed.preview);
    }
    this.files = this.files.filter((_, i) => i !== index);
    this.dispatchEvent(new CustomEvent('remove', {
      detail: { file: removed.file, index },
      bubbles: true,
      composed: true,
    }));
  }

  private _onDragOver = (e: DragEvent) => {
    e.preventDefault();
    this._dragOver = true;
  };

  private _onDragLeave = (e: DragEvent) => {
    e.preventDefault();
    this._dragOver = false;
  };

  private _onDrop = (e: DragEvent) => {
    e.preventDefault();
    this._dragOver = false;
    const droppedFiles = Array.from(e.dataTransfer?.files || []);
    if (droppedFiles.length) {
      this._addFiles(droppedFiles);
    }
  };

  private _formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  private _formatFileSize(file: File): string {
    return this._formatSize(file.size);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    for (const f of this.files) {
      if (f.preview) {
        URL.revokeObjectURL(f.preview);
      }
    }
  }

  override render() {
    return html`
      <div
        class="upload-area ${this._dragOver ? 'dragover' : ''}"
        @click=${() => this._input?.click()}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        <input
          class="file-input"
          type="file"
          ?multiple=${this.multiple}
          accept=${this.accept || undefined}
          ?disabled=${this.disabled}
          ref=${(el: HTMLInputElement | undefined) => this._input = el}
          @change=${this._onFileSelect}
        />
        <svg class="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
        <p class="upload-text">
          Drag and drop files here, or <strong>${this.label}</strong>
        </p>
        ${this.hint ? html`<p class="upload-hint">${this.hint}</p>` : ''}
      </div>
      ${this.files.length > 0 ? html`
        <div class="file-list">
          ${this.files.map((item, index) => html`
            <div class="file-item">
              ${item.preview
                ? html`<img class="file-preview" src=${item.preview} alt=${item.file.name} />`
                : html`
                    <div class="file-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                      </svg>
                    </div>
                  `}
              <div class="file-info">
                <div class="file-name" title=${item.file.name}>${item.file.name}</div>
                <div class="file-size">${this._formatFileSize(item.file)}</div>
                ${item.error ? html`<div class="file-error">${item.error}</div>` : ''}
                ${item.progress !== undefined ? html`
                  <div class="file-progress">
                    <div class="file-progress-bar" style="width: ${item.progress}%"></div>
                  </div>
                ` : ''}
              </div>
              <button class="remove-btn" @click=${() => this._removeFile(index)} aria-label="Remove ${item.file.name}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          `)}
        </div>
      ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-file-upload': SqFileUpload;
  }
}
