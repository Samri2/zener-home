import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/models/project.model';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (project) {
      <div class="custom-modal-overlay" (click)="closeOnBackdrop($event)">
        <div class="modal-dialog-custom card-luxury p-3 p-sm-4 p-md-5 overflow-y-auto" (click)="$event.stopPropagation()">
          
          <!-- Header -->
          <div class="d-flex justify-content-between align-items-start mb-3 mb-md-4 border-bottom border-secondary border-opacity-25 pb-3">
            <div class="pe-2">
              <span class="badge gradient-badge mb-2 px-3 py-1 text-uppercase small">
                {{ t.isAmharic() ? project.categoryLabelAm : project.categoryLabel }}
              </span>
              <h3 class="text-white fw-bold mb-1 fs-4 fs-md-3">
                {{ t.isAmharic() ? project.titleAm : project.title }}
              </h3>
              <p class="text-white-50 small mb-0 d-flex flex-wrap align-items-center gap-2">
                <span class="d-flex align-items-center gap-1">
                  <i class="bi bi-geo-alt-fill text-warning"></i>
                  {{ t.isAmharic() ? project.locationAm : project.location }}
                </span>
                <span class="d-none d-sm-inline">•</span>
                <span class="d-flex align-items-center gap-1">
                  <i class="bi bi-calendar3 text-warning"></i>
                  {{ project.year }}
                </span>
              </p>
            </div>
            <button type="button" class="btn-close-custom flex-shrink-0" (click)="closeModal()" aria-label="Close">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>

          <!-- Main Gallery Image & Thumbnails -->
          <div class="mb-3 mb-md-4">
            <div class="main-image-wrapper rounded-3 overflow-hidden mb-2 mb-md-3">
              <img [src]="activeImage() || project.image" [alt]="project.title" class="img-fluid w-100 object-fit-cover main-img">
            </div>
            @if (project.gallery && project.gallery.length > 1) {
              <div class="d-flex gap-2 overflow-x-auto pb-2">
                @for (img of project.gallery; track $index) {
                  <button type="button" 
                          class="thumb-btn border-0 p-0 rounded-2 overflow-hidden flex-shrink-0" 
                          [class.active]="(activeImage() || project.image) === img"
                          (click)="activeImage.set(img)">
                    <img [src]="img" alt="Gallery thumbnail" class="thumb-img">
                  </button>
                }
              </div>
            }
          </div>

          <!-- Scope & Description -->
          <div class="mb-3 mb-md-4">
            <h5 class="text-orange-glow fw-bold mb-2 fs-6 fs-md-5">
              <i class="bi bi-tools me-2"></i>{{ t.isAmharic() ? 'የስራው ዝርዝርና ወሰን' : 'Scope of Execution' }}
            </h5>
            <p class="text-light fw-medium mb-2 mb-md-3 small fs-md-6">
              {{ t.isAmharic() ? project.scopeAm : project.scope }}
            </p>
            <p class="text-light-sub small">
              {{ t.isAmharic() ? project.descriptionAm : project.description }}
            </p>
          </div>

          <!-- Key Highlights -->
          @if (project.features && project.features.length > 0) {
            <div class="mb-4 bg-dark bg-opacity-50 p-3 rounded-3 border border-secondary border-opacity-25">
              <h6 class="text-white fw-bold mb-3 small fs-md-6">
                <i class="bi bi-check2-circle text-warning me-2"></i>{{ t.isAmharic() ? 'ዋና ዋና ስራዎች' : 'Key Specifications & Finishes' }}
              </h6>
              <ul class="list-unstyled mb-0 d-grid gap-2">
                @for (feat of (t.isAmharic() ? project.featuresAm : project.features); track $index) {
                  <li class="d-flex align-items-start gap-2 text-light-sub small">
                    <i class="bi bi-arrow-right-short text-warning fs-5 lh-1"></i>
                    <span>{{ feat }}</span>
                  </li>
                }
              </ul>
            </div>
          }

          <!-- Footer Actions -->
          <div class="d-flex flex-column flex-sm-row justify-content-between align-items-stretch align-items-sm-center gap-3 pt-3 border-top border-secondary border-opacity-25">
            <button type="button" class="btn btn-outline-secondary text-white px-4 order-2 order-sm-1" (click)="closeModal()">
              {{ t.t('btn.close') }}
            </button>

            <a [href]="getWhatsAppLink()" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp px-4 py-2 d-inline-flex align-items-center justify-content-center gap-2 order-1 order-sm-2">
              <i class="bi bi-whatsapp"></i>
              {{ t.isAmharic() ? 'በዋትስአፕ ይጠይቁ' : 'Inquire on WhatsApp' }}
            </a>
          </div>

        </div>
      </div>
    }
  `,
  styles: [`
    .modal-dialog-custom {
      max-width: 850px;
      width: 100%;
      max-height: 92vh;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(232, 106, 23, 0.2);
    }
    .main-image-wrapper {
      max-height: 380px;
      background: #000;
    }
    .main-img {
      max-height: 380px;
      object-fit: cover;
    }
    .thumb-btn {
      width: 70px;
      height: 52px;
      opacity: 0.6;
      transition: all 0.2s ease;
      cursor: pointer;
      border: 2px solid transparent !important;
    }
    .thumb-btn.active, .thumb-btn:hover {
      opacity: 1;
      border-color: var(--color-primary) !important;
    }
    .thumb-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .btn-close-custom {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #FFF;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .btn-close-custom:hover {
      background: rgba(232, 106, 23, 0.2);
      border-color: var(--color-primary);
      color: var(--color-primary-light);
    }
    .text-light-sub {
      color: var(--color-text-sub);
    }
  `]
})
export class ProjectModalComponent {
  @Input() project: Project | null = null;
  @Output() close = new EventEmitter<void>();

  readonly t = inject(TranslationService);
  readonly activeImage = signal<string | null>(null);

  closeModal(): void {
    this.activeImage.set(null);
    this.close.emit();
  }

  closeOnBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  getWhatsAppLink(): string {
    if (!this.project) return 'https://wa.me/251910900931';
    const text = encodeURIComponent(
      `Hello Zener Home, I am interested in finishing works similar to your project: "${this.project.title}" (${this.project.location}). Please provide more details.`
    );
    return `https://wa.me/251910900931?text=${text}`;
  }
}
