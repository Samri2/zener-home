import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';
import { FurnitureService } from '../../core/services/furniture.service';
import { FurnitureItem } from '../../core/models/furniture.model';
import { FurnitureModalComponent } from '../../shared/components/furniture-modal/furniture-modal.component';

@Component({
  selector: 'app-furniture',
  standalone: true,
  imports: [CommonModule, FurnitureModalComponent],
  template: `
    <!-- Header -->
    <div class="page-header py-4 py-md-5 bg-surface-glass border-bottom border-secondary border-opacity-25 mb-4 mb-md-5">
      <div class="container text-center py-3 py-md-4">
        <span class="badge gradient-badge px-3 py-1 text-uppercase mb-2">
          {{ t.isAmharic() ? 'የፈርኒቸር ውጤቶች' : 'Custom Woodwork & Furniture' }}
        </span>
        <h1 class="display-5 fw-extrabold text-white mb-3">
          {{ t.isAmharic() ? 'የተመረጡ የቤት እና የቢሮ ፈርኒቸሮች' : 'Handcrafted Luxury Furniture Catalog' }}
        </h1>
        <p class="lead text-light-sub max-w-700 mx-auto mb-0">
          {{ t.isAmharic() 
              ? 'በዘመናዊ የእንጨት ውጤቶች እና ጥራት ባላቸው ቁሳቁሶች የተሰሩ የሳሎን፣ የመኝታ ቤት እና የኩሽና እቃዎች' 
              : 'Engineered modular cabinetry, bespoke TV media walls, executive desks, and luxury bedroom collections.' }}
        </p>
      </div>
    </div>

    <div class="container pb-5">
      <!-- Category Tabs (Responsive Scrollable) -->
      <div class="d-flex flex-nowrap flex-md-wrap justify-content-start justify-content-md-center gap-2 mb-4 mb-md-5 overflow-x-auto pb-2">
        <button type="button" 
                class="btn filter-btn px-3 px-md-4 py-2 flex-shrink-0" 
                [class.active]="selectedCategory() === 'all'"
                (click)="selectedCategory.set('all')">
          {{ t.isAmharic() ? 'ሁሉም ዕቃዎች' : 'All Collections' }}
        </button>
        <button type="button" 
                class="btn filter-btn px-3 px-md-4 py-2 flex-shrink-0" 
                [class.active]="selectedCategory() === 'living'"
                (click)="selectedCategory.set('living')">
          {{ t.isAmharic() ? 'የሳሎን እቃዎች' : 'Living & TV Units' }}
        </button>
        <button type="button" 
                class="btn filter-btn px-3 px-md-4 py-2 flex-shrink-0" 
                [class.active]="selectedCategory() === 'bedroom'"
                (click)="selectedCategory.set('bedroom')">
          {{ t.isAmharic() ? 'የመኝታ ክፍል' : 'Beds & Wardrobes' }}
        </button>
        <button type="button" 
                class="btn filter-btn px-3 px-md-4 py-2 flex-shrink-0" 
                [class.active]="selectedCategory() === 'custom'"
                (click)="selectedCategory.set('custom')">
          {{ t.isAmharic() ? 'የወጥ ቤት ካቢኔቶች' : 'Kitchen Cabinetry' }}
        </button>
        <button type="button" 
                class="btn filter-btn px-3 px-md-4 py-2 flex-shrink-0" 
                [class.active]="selectedCategory() === 'office'"
                (click)="selectedCategory.set('office')">
          {{ t.isAmharic() ? 'የቢሮ እቃዎች' : 'Executive Desks' }}
        </button>
        <button type="button" 
                class="btn filter-btn px-3 px-md-4 py-2 flex-shrink-0" 
                [class.active]="selectedCategory() === 'dining'"
                (click)="selectedCategory.set('dining')">
          {{ t.isAmharic() ? 'የመመገቢያ ክፍል' : 'Dining Tables' }}
        </button>
      </div>

      <!-- Furniture Items Grid -->
      <div class="row g-4 mb-5">
        @for (item of filteredItems(); track item.id) {
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card-luxury h-100 overflow-hidden cursor-pointer" (click)="activeModalItem.set(item)">
              <div class="img-zoom-container position-relative">
                <img [src]="item.image" [alt]="item.name" class="img-fluid w-100 furniture-img object-fit-cover">
                <div class="position-absolute top-0 start-0 m-3">
                  <span class="badge bg-dark bg-opacity-75 text-warning border border-secondary border-opacity-50">
                    {{ t.isAmharic() ? item.categoryLabelAm : item.categoryLabel }}
                  </span>
                </div>
              </div>

              <div class="p-3 p-sm-4 d-flex flex-column justify-content-between flex-grow-1">
                <div>
                  <h4 class="text-white fw-bold mb-2 fs-5">
                    {{ t.isAmharic() ? item.nameAm : item.name }}
                  </h4>
                  <p class="text-light-sub small text-truncate-2 mb-3">
                    {{ t.isAmharic() ? item.descriptionAm : item.description }}
                  </p>
                  
                  <div class="p-2 rounded bg-black bg-opacity-40 border border-secondary border-opacity-25 small mb-3">
                    <div class="text-white-50 small mb-1 text-truncate">
                      <i class="bi bi-rulers text-warning me-1"></i>
                      <span>{{ item.dimensions }}</span>
                    </div>
                    <div class="text-warning small fw-semibold">
                      <i class="bi bi-clock-history me-1"></i>
                      <span>{{ t.isAmharic() ? 'የማምረቻ ጊዜ: ' : 'Lead Time: ' }}{{ item.leadTime }}</span>
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-between align-items-center pt-2">
                  <button type="button" class="btn btn-outline-light btn-sm w-100">
                    <i class="bi bi-info-circle me-1"></i> {{ t.isAmharic() ? 'ዝርዝር መረጃ ይመልከቱ' : 'View Specs & Order' }}
                  </button>
                </div>
              </div>

            </div>
          </div>
        }
      </div>

      <!-- Custom Fabrication Banner -->
      <div class="card-luxury p-4 p-md-5">
        <div class="row align-items-center g-4">
          <div class="col-12 col-lg-8">
            <span class="badge gradient-badge mb-2 px-3 py-1 text-uppercase">{{ t.isAmharic() ? 'ልዩ ትዕዛዝ' : 'Custom Tailored' }}</span>
            <h3 class="text-white fw-bold mb-2">
              {{ t.isAmharic() ? 'በራስዎ ዲዛይንና መጠን ማዘዝ ይፈልጋሉ?' : 'Need Custom Sizing or Custom 3D CAD Furniture?' }}
            </h3>
            <p class="text-light-sub mb-0">
              {{ t.isAmharic() 
                  ? 'የክፍልዎን ልኬት ይዘው ይምጡ ወይም ባለሙያዎቻችን ወደ ቦታዎ መጥተው ልኬት ወስደው ዲዛይን ያደርጋሉ።' 
                  : 'Bring your spatial dimensions or let our interior team measure on-site to produce millwork 3D mockups and precision wood fabrications.' }}
            </p>
          </div>
          <div class="col-12 col-lg-4 text-start text-lg-end">
            <a href="https://wa.me/251910900931?text=Hello%20Zener%20Home%2C%20I%20want%20to%20order%20custom%20woodwork%20furniture." target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp px-4 py-3 w-100 w-lg-auto">
              <i class="bi bi-whatsapp me-2"></i>
              {{ t.isAmharic() ? 'በዋትስአፕ ያዝዙ' : 'Order via WhatsApp' }}
            </a>
          </div>
        </div>
      </div>

    </div>

    <app-furniture-modal [item]="activeModalItem()" (close)="activeModalItem.set(null)"></app-furniture-modal>
  `,
  styles: [`
    .max-w-700 {
      max-width: 700px;
    }
    .filter-btn {
      background: rgba(24, 24, 32, 0.7);
      color: #CBD5E1;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.9rem;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .filter-btn:hover, .filter-btn.active {
      background: var(--color-primary);
      color: #FFF;
      border-color: var(--color-primary-light);
      box-shadow: 0 4px 15px rgba(232, 106, 23, 0.35);
    }
    .furniture-img {
      height: 220px;
    }
    @media (min-width: 768px) {
      .furniture-img {
        height: 240px;
      }
    }
    .cursor-pointer {
      cursor: pointer;
    }
    .text-truncate-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .text-light-sub {
      color: #CBD5E1;
    }
  `]
})
export class FurnitureComponent {
  readonly t = inject(TranslationService);
  readonly furnitureService = inject(FurnitureService);

  readonly selectedCategory = signal<string>('all');
  readonly activeModalItem = signal<FurnitureItem | null>(null);

  readonly filteredItems = computed(() => {
    return this.furnitureService.getFurnitureByCategory(this.selectedCategory());
  });
}
