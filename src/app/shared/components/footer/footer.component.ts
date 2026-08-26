import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="footer-wrapper pt-5 pb-4 border-top border-secondary border-opacity-25 mt-5">
      <div class="container">
        <div class="row g-4 mb-5">
          
          <!-- Column 1: Brand Info -->
          <div class="col-lg-4 col-md-6 col-12">
            <div class="d-flex align-items-center gap-2 mb-3">
              <div class="brand-logo-icon d-flex align-items-center justify-content-center flex-shrink-0">
                <i class="bi bi-house-gear-fill fs-4 text-warning"></i>
              </div>
              <div>
                <h5 class="brand-title mb-0">ZENER HOME</h5>
                <span class="brand-subtitle">{{ t.t('brand.legal') }}</span>
              </div>
            </div>
            <p class="text-white-50 small mb-3">
              {{ t.t('brand.positioning') }}
            </p>
            <div class="p-3 rounded-3 bg-black bg-opacity-40 border border-secondary border-opacity-25 small mb-3">
              <div class="d-flex align-items-center gap-2 text-warning mb-1">
                <i class="bi bi-patch-check-fill"></i>
                <strong class="text-white">{{ t.isAmharic() ? 'የተመዘገበ ህጋዊ ተቋራጭ' : 'Licensed Finishing Contractor' }}</strong>
              </div>
              <div class="text-white-50 small">
                {{ t.isAmharic() ? 'ደረጃ: 51212 | የንግድ ፈቃድ: 2931566' : 'Category: 51212 | License: 2931566' }}
              </div>
              <div class="text-white-50 small">
                {{ t.isAmharic() ? 'አዲስ አበባ ንግድ ቢሮ' : 'Addis Ababa City Administration Trade Bureau' }}
              </div>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div class="col-lg-2 col-md-6 col-6">
            <h6 class="text-white fw-bold mb-3 text-uppercase letter-spacing-1">
              {{ t.isAmharic() ? 'ገጾች' : 'Navigation' }}
            </h6>
            <ul class="list-unstyled d-grid gap-2 small">
              <li><a routerLink="/" class="footer-link">{{ t.t('nav.home') }}</a></li>
              <li><a routerLink="/services" class="footer-link">{{ t.t('nav.services') }}</a></li>
              <li><a routerLink="/projects" class="footer-link">{{ t.t('nav.projects') }}</a></li>
              <li><a routerLink="/furniture" class="footer-link">{{ t.t('nav.furniture') }}</a></li>
              <li><a routerLink="/about" class="footer-link">{{ t.t('nav.about') }}</a></li>
              <li><a routerLink="/testimonials" class="footer-link">{{ t.t('nav.testimonials') }}</a></li>
              <li><a routerLink="/contact" class="footer-link">{{ t.t('nav.contact') }}</a></li>
            </ul>
          </div>

          <!-- Column 3: Finishing Services -->
          <div class="col-lg-3 col-md-6 col-6">
            <h6 class="text-white fw-bold mb-3 text-uppercase letter-spacing-1">
              {{ t.isAmharic() ? 'አገልግሎቶች' : 'Specializations' }}
            </h6>
            <ul class="list-unstyled d-grid gap-2 small text-white-50">
              <li><i class="bi bi-chevron-right text-warning me-1"></i>{{ t.isAmharic() ? 'የጂፕሰም ጣሪያ እና መብራት' : 'Gypsum & LED Lighting' }}</li>
              <li><i class="bi bi-chevron-right text-warning me-1"></i>{{ t.isAmharic() ? 'የሴራሚክ እና እብነበረድ ወለል' : 'Porcelain & Marble Tiling' }}</li>
              <li><i class="bi bi-chevron-right text-warning me-1"></i>{{ t.isAmharic() ? 'ዘመናዊ የወጥ ቤት ካቢኔቶች' : 'Luxury Kitchen Cabinetry' }}</li>
              <li><i class="bi bi-chevron-right text-warning me-1"></i>{{ t.isAmharic() ? 'የሳሎን ቲቪ ግድግዳዎች' : 'Fluted Timber TV Units' }}</li>
              <li><i class="bi bi-chevron-right text-warning me-1"></i>{{ t.isAmharic() ? '3D ዲዛይን እና ፕላኒንግ' : '3D Spatial Visuals' }}</li>
              <li><i class="bi bi-chevron-right text-warning me-1"></i>{{ t.isAmharic() ? 'የመስታወትና አሉሚኒየም ስራዎች' : 'Glass & Aluminum Facades' }}</li>
            </ul>
          </div>

          <!-- Column 4: Contact & Office -->
          <div class="col-lg-3 col-md-6 col-12">
            <h6 class="text-white fw-bold mb-3 text-uppercase letter-spacing-1">
              {{ t.isAmharic() ? 'አድራሻ እና ስልክ' : 'Head Office' }}
            </h6>
            <ul class="list-unstyled d-grid gap-2 small text-white-50 mb-3">
              <li class="d-flex align-items-start gap-2">
                <i class="bi bi-geo-alt text-warning mt-1"></i>
                <span>{{ t.t('contact.address') }}</span>
              </li>
              <li class="d-flex align-items-center gap-2">
                <i class="bi bi-telephone text-warning"></i>
                <a href="tel:0910900931" class="text-light text-decoration-none">0910 900 931</a>
              </li>
              <li class="d-flex align-items-center gap-2">
                <i class="bi bi-telephone text-warning"></i>
                <a href="tel:0922166213" class="text-light text-decoration-none">0922 166 213</a>
              </li>
              <li class="d-flex align-items-center gap-2">
                <i class="bi bi-envelope text-warning"></i>
                <a href="mailto:Zenerfinishingzf@gmail.com" class="text-light text-decoration-none text-break">Zenerfinishingzf&#64;gmail.com</a>
              </li>
            </ul>

            <a href="https://wa.me/251910900931" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm w-100 py-2 d-inline-flex align-items-center justify-content-center gap-2">
              <i class="bi bi-whatsapp"></i>
              {{ t.t('btn.chatWhatsapp') }}
            </a>
          </div>

        </div>

        <!-- Bottom Bar (Mobile/Tablet Stacked Responsive) -->
        <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 pt-4 border-top border-secondary border-opacity-25 small text-white-50 text-center text-sm-start">
          <div>
            &copy; 2024-2026 <strong>Zener Home P.L.C.</strong> All rights reserved. Addis Ababa, Ethiopia.
          </div>
          <div>
            General Manager: <strong>Fikadu Worku Belete</strong>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer-wrapper {
      background: #09090D;
    }
    .brand-logo-icon {
      width: 38px;
      height: 38px;
      background: linear-gradient(135deg, rgba(232, 106, 23, 0.2), rgba(201, 84, 12, 0.1));
      border: 1px solid rgba(232, 106, 23, 0.4);
      border-radius: 8px;
    }
    .brand-title {
      font-size: 1.15rem;
      font-weight: 800;
      color: #FFF;
      letter-spacing: 0.05em;
    }
    .brand-subtitle {
      font-size: 0.7rem;
      color: var(--color-primary-light);
    }
    .footer-link {
      color: #CBD5E1;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .footer-link:hover {
      color: var(--color-primary-light);
      padding-left: 4px;
    }
    .letter-spacing-1 {
      letter-spacing: 0.06em;
    }
  `]
})
export class FooterComponent {
  readonly t = inject(TranslationService);
}
