import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurnitureItem } from '../../../core/models/furniture.model';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-furniture-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (item) {
      <div class="custom-modal-overlay" (click)="closeOnBackdrop($event)">
        <div class="modal-dialog-custom card-luxury p-3 p-sm-4 p-md-5 overflow-y-auto" (click)="$event.stopPropagation()">
          
          <!-- Header -->
          <div class="d-flex justify-content-between align-items-start mb-3 mb-md-4 border-bottom border-secondary border-opacity-25 pb-3">
            <div class="pe-2">
              <span class="badge gradient-badge mb-2 px-3 py-1 text-uppercase small">
                {{ t.isAmharic() ? item.categoryLabelAm : item.categoryLabel }}
              </span>
              <h3 class="text-white fw-bold mb-1 fs-4 fs-md-3">
                {{ t.isAmharic() ? item.nameAm : item.name }}
              </h3>
              <p class="text-warning small mb-0 d-flex align-items-center gap-2">
                <i class="bi bi-clock-history"></i>
                <strong>{{ t.isAmharic() ? 'የማምረቻ ጊዜ:' : 'Lead Time:' }}</strong> {{ item.leadTime }}
              </p>
            </div>
            <button type="button" class="btn-close-custom flex-shrink-0" (click)="closeModal()" aria-label="Close">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>

          <!-- Product Image & Gallery Thumbnails -->
          <div class="mb-3 mb-md-4">
            <div class="main-image-wrapper rounded-3 overflow-hidden mb-2 mb-md-3">
              <img [src]="activeImage() || item.image" [alt]="item.name" class="img-fluid w-100 object-fit-cover main-img">
            </div>
            @if (item.gallery && item.gallery.length > 1) {
              <div class="d-flex gap-2 overflow-x-auto pb-2">
                @for (img of item.gallery; track $index) {
                  <button type="button" 
                          class="thumb-btn border-0 p-0 rounded-2 overflow-hidden flex-shrink-0" 
                          [class.active]="(activeImage() || item.image) === img"
                          (click)="activeImage.set(img)">
                    <img [src]="img" alt="Furniture thumbnail" class="thumb-img">
                  </button>
                }
              </div>
            }
          </div>

          <!-- Description Based on Real Photo -->
          <div class="mb-3 mb-md-4">
            <h5 class="text-orange-glow fw-bold mb-2 fs-6 fs-md-5">
              <i class="bi bi-info-circle me-2"></i>{{ t.isAmharic() ? 'የዕቃው ዝርዝር ማብራሪያ' : 'Craft & Design Details' }}
            </h5>
            <p class="text-light-sub small fs-md-6">
              {{ t.isAmharic() ? item.descriptionAm : item.description }}
            </p>
          </div>

          <!-- Key Craft Highlights -->
          @if (item.features && item.features.length > 0) {
            <div class="mb-4 bg-dark bg-opacity-50 p-3 rounded-3 border border-secondary border-opacity-25">
              <h6 class="text-white fw-bold mb-3 small fs-md-6">
                <i class="bi bi-check2-circle text-warning me-2"></i>{{ t.isAmharic() ? 'ዋና ዋና ባህሪያት' : 'Key Specifications & Highlights' }}
              </h6>
              <ul class="list-unstyled mb-0 d-grid gap-2">
                @for (feat of (t.isAmharic() ? item.featuresAm : item.features); track $index) {
                  <li class="d-flex align-items-start gap-2 text-light-sub small">
                    <i class="bi bi-arrow-right-short text-warning fs-5 lh-1"></i>
                    <span>{{ feat }}</span>
                  </li>
                }
              </ul>
            </div>
          }

          <!-- Technical Specs Table -->
          <div class="spec-table-box p-3 rounded-3 mb-4">
            <h6 class="text-white fw-bold mb-3 small fs-md-6">
              <i class="bi bi-card-checklist text-warning me-2"></i>{{ t.isAmharic() ? 'ቴክኒካዊ መረጃ' : 'Craft Specifications' }}
            </h6>
            <div class="row g-2 g-sm-3 small">
              <div class="col-12 col-sm-6">
                <div class="p-2 rounded bg-black bg-opacity-40 border border-secondary border-opacity-25">
                  <span class="text-white-50 d-block">{{ t.isAmharic() ? 'የእንጨት ዓይነት:' : 'Wood & Core Material:' }}</span>
                  <strong class="text-white">{{ item.woodType }}</strong>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="p-2 rounded bg-black bg-opacity-40 border border-secondary border-opacity-25">
                  <span class="text-white-50 d-block">{{ t.isAmharic() ? 'መጠን (Dimensions):' : 'Dimensions:' }}</span>
                  <strong class="text-white">{{ item.dimensions }}</strong>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="p-2 rounded bg-black bg-opacity-40 border border-secondary border-opacity-25">
                  <span class="text-white-50 d-block">{{ t.isAmharic() ? 'ፊኒሽ እና ቀለም:' : 'Finish & Surface Coating:' }}</span>
                  <strong class="text-white">{{ item.finish }}</strong>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="p-2 rounded bg-black bg-opacity-40 border border-secondary border-opacity-25">
                  <span class="text-white-50 d-block">{{ t.isAmharic() ? 'ዋጋ:' : 'Pricing Note:' }}</span>
                  <strong class="text-warning">{{ t.isAmharic() ? item.priceNoteAm : item.priceNote }}</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="d-flex flex-column flex-sm-row justify-content-between align-items-stretch align-items-sm-center gap-3 pt-3 border-top border-secondary border-opacity-25">
            <button type="button" class="btn btn-outline-secondary text-white px-4 order-2 order-sm-1" (click)="closeModal()">
              {{ t.t('btn.close') }}
            </button>

            <a [href]="getWhatsAppLink()" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp px-4 py-2 d-inline-flex align-items-center justify-content-center gap-2 order-1 order-sm-2">
              <i class="bi bi-whatsapp"></i>
              {{ t.isAmharic() ? 'በዋትስአፕ ይዘዙ' : 'Order via WhatsApp' }}
            </a>
          </div>

        </div>
      </div>
    }
  `,
  styles: [`
    .modal-dialog-custom {
      max-width: 800px;
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
    .spec-table-box {
      background: rgba(14, 14, 20, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.08);
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
      color: #CBD5E1;
    }
  `]
})
export class FurnitureModalComponent {
  @Input() item: FurnitureItem | null = null;
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
    if (!this.item) return 'https://wa.me/251910900931';
    const text = encodeURIComponent(
      `Hello Zener Home, I am interested in ordering/custom sizing for the furniture item: "${this.item.name}". Please provide pricing and fabrication details.`
    );
    return `https://wa.me/251910900931?text=${text}`;
  }
}
