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
        <div class="row g-4 mb-4">
          
          <!-- Column 1: Brand Info with PDF Logo -->
          <div class="col-lg-4 col-md-6 col-12">
            <div class="d-flex align-items-center gap-2 mb-3">
              <div class="brand-logo-container d-flex align-items-center justify-content-center flex-shrink-0">
                <img src="/images/logo.png" alt="Zener Home Logo" class="brand-logo-img">
              </div>
              <div>
                <h5 class="brand-title mb-0">ZENER HOME</h5>
                <span class="brand-subtitle">{{ t.t('brand.legal') }}</span>
              </div>
            </div>
            <p class="text-light-sub small mb-3">
              {{ t.t('brand.positioning') }}
            </p>
            <div class="p-3 rounded-3 footer-license-box border border-secondary border-opacity-25 small mb-3">
              <div class="d-flex align-items-center gap-2 text-warning mb-1">
                <i class="bi bi-patch-check-fill"></i>
                <strong>{{ t.isAmharic() ? 'የተመዘገበ ህጋዊ ተቋራጭ' : 'Licensed Finishing Contractor' }}</strong>
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
            <h6 class="footer-heading fw-bold mb-3 text-uppercase letter-spacing-1">
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
            <h6 class="footer-heading fw-bold mb-3 text-uppercase letter-spacing-1">
              {{ t.isAmharic() ? 'አገልግሎቶች' : 'Specializations' }}
            </h6>
            <ul class="list-unstyled d-grid gap-2 small text-light-sub">
              <li><i class="bi bi-chevron-right text-warning me-1"></i>{{ t.isAmharic() ? 'የጂፕሰም ጣሪያ እና መብራት' : 'Gypsum & LED Lighting' }}</li>
              <li><i class="bi bi-chevron-right text-warning me-1"></i>{{ t.isAmharic() ? 'የሴራሚክ እና እብነበረድ ወለል' : 'Porcelain & Marble Tiling' }}</li>
              <li><i class="bi bi-chevron-right text-warning me-1"></i>{{ t.isAmharic() ? 'ዘመናዊ የወጥ ቤት ካቢኔቶች' : 'Luxury Kitchen Cabinetry' }}</li>
              <li><i class="bi bi-chevron-right text-warning me-1"></i>{{ t.isAmharic() ? 'የሳሎን ቲቪ ግድግዳዎች' : 'Fluted Timber TV Units' }}</li>
              <li><i class="bi bi-chevron-right text-warning me-1"></i>{{ t.isAmharic() ? '3D ዲዛይን እና ፕላኒንግ' : '3D Spatial Visuals' }}</li>
              <li><i class="bi bi-chevron-right text-warning me-1"></i>{{ t.isAmharic() ? 'የመስታወትና አሉሚኒየም ስራዎች' : 'Glass & Aluminum Facades' }}</li>
            </ul>
          </div>

          <!-- Column 4: Contact & Socials -->
          <div class="col-lg-3 col-md-6 col-12">
            <h6 class="footer-heading fw-bold mb-3 text-uppercase letter-spacing-1">
              {{ t.isAmharic() ? 'አድራሻ እና ማህበራዊ ሚዲያ' : 'Contact & Social Media' }}
            </h6>
            <ul class="list-unstyled d-grid gap-2 small text-light-sub mb-3">
              <li class="d-flex align-items-start gap-2">
                <i class="bi bi-geo-alt text-warning mt-1"></i>
                <span>{{ t.t('contact.address') }}</span>
              </li>
              <li class="d-flex align-items-center gap-2">
                <i class="bi bi-telephone text-warning"></i>
                <a href="tel:0910900931" class="text-decoration-none footer-link">0910 900 931</a> / 
                <a href="tel:0922166213" class="text-decoration-none footer-link">0922 166 213</a>
              </li>
              <li class="d-flex align-items-center gap-2">
                <i class="bi bi-envelope text-warning"></i>
                <a href="mailto:Zenerfinishingzf@gmail.com" class="text-decoration-none footer-link text-break">Zenerfinishingzf&#64;gmail.com</a>
              </li>
            </ul>

            <!-- Social Media Icon Grid -->
            <div class="mb-3">
              <div class="text-white-50 small mb-2">{{ t.isAmharic() ? 'በማህበራዊ ሚዲያ ይከተሉን:' : 'Connect With Us:' }}</div>
              <div class="d-flex flex-wrap gap-2">
                <a href="https://web.facebook.com/zenerfinishing" target="_blank" rel="noopener noreferrer" class="social-btn fb-btn" title="Facebook">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/zener_interior_solution/" target="_blank" rel="noopener noreferrer" class="social-btn insta-btn" title="Instagram">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="https://www.tiktok.com/@zener_home" target="_blank" rel="noopener noreferrer" class="social-btn tiktok-btn" title="TikTok">
                  <i class="bi bi-tiktok"></i>
                </a>
                <a href="https://t.me/zenerhome" target="_blank" rel="noopener noreferrer" class="social-btn tg-btn" title="Telegram">
                  <i class="bi bi-telegram"></i>
                </a>
                <a href="https://wa.me/251910900931" target="_blank" rel="noopener noreferrer" class="social-btn wa-btn" title="WhatsApp">
                  <i class="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>

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
      background: var(--bg-footer);
    }
    .brand-logo-container {
      height: 44px;
      background: #FFFFFF;
      border: 1px solid rgba(232, 106, 23, 0.4);
      border-radius: 8px;
      padding: 3px 6px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    .brand-logo-img {
      height: 36px;
      width: auto;
      object-fit: contain;
    }
    .brand-title {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--color-text-main);
      letter-spacing: 0.05em;
    }
    .brand-subtitle {
      font-size: 0.7rem;
      color: var(--color-primary-light);
    }
    .footer-heading {
      color: var(--color-text-main);
    }
    .footer-license-box {
      background: rgba(0, 0, 0, 0.25);
    }
    .theme-light .footer-license-box {
      background: rgba(255, 255, 255, 0.1);
    }
    .footer-link {
      color: var(--color-text-sub);
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .footer-link:hover {
      color: var(--color-primary-light);
      padding-left: 4px;
    }
    .social-btn {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #FFF;
      font-size: 1rem;
      text-decoration: none;
      transition: all 0.2s ease;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
    }
    .social-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      color: #FFF;
    }
    .fb-btn:hover { background: #1877F2; border-color: #1877F2; }
    .insta-btn:hover { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); border-color: transparent; }
    .tiktok-btn:hover { background: #000000; border-color: #FE2C55; }
    .tg-btn:hover { background: #229ED9; border-color: #229ED9; }
    .wa-btn:hover { background: #25D366; border-color: #25D366; }

    .letter-spacing-1 {
      letter-spacing: 0.06em;
    }
  `]
})
export class FooterComponent {
  readonly t = inject(TranslationService);
}
