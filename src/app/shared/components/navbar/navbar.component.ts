import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationService } from '../../../core/services/translation.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <!-- Top Announcement Bar (Responsive with Social Icons) -->
    <div class="top-bar py-1 px-2 px-md-3 border-bottom border-secondary border-opacity-25 small text-white-50">
      <div class="container d-flex justify-content-between align-items-center gap-2">
        <div class="d-flex align-items-center gap-2">
          <span class="d-flex align-items-center gap-1 text-warning">
            <i class="bi bi-shield-check"></i>
            <span class="d-none d-sm-inline">{{ t.isAmharic() ? 'ህጋዊ የፊኒሺንግ ተቋራጭ ደረጃ 51212' : 'Licensed Category 51212 Finishing Contractor' }}</span>
          </span>
          <span class="d-none d-lg-inline text-secondary">|</span>
          <!-- Social Icons in Top Bar -->
          <div class="d-none d-md-flex align-items-center gap-2 ms-2">
            <a href="https://web.facebook.com/zenerfinishing" target="_blank" rel="noopener noreferrer" class="social-top-link" title="Facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/zener_interior_solution/" target="_blank" rel="noopener noreferrer" class="social-top-link" title="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@zener_home" target="_blank" rel="noopener noreferrer" class="social-top-link" title="TikTok">
              <i class="bi bi-tiktok"></i>
            </a>
            <a href="https://t.me/zenerhome" target="_blank" rel="noopener noreferrer" class="social-top-link" title="Telegram">
              <i class="bi bi-telegram"></i>
            </a>
          </div>
        </div>

        <div class="d-flex align-items-center gap-2 gap-sm-3">
          <a href="tel:0910900931" class="text-white-50 text-decoration-none hover-orange d-flex align-items-center gap-1">
            <i class="bi bi-telephone text-warning"></i> 0910 900 931
          </a>
          <a href="tel:0922166213" class="text-white-50 text-decoration-none hover-orange d-none d-md-flex align-items-center gap-1">
            <i class="bi bi-telephone text-warning"></i> 0922 166 213
          </a>
          
          <!-- Theme Toggle Button -->
          <button type="button" 
                  class="theme-toggle-btn px-2 py-0 rounded border-0" 
                  (click)="themeService.toggleTheme()" 
                  [title]="themeService.currentTheme() === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
            <i class="bi" [ngClass]="themeService.currentTheme() === 'dark' ? 'bi-sun-fill text-warning' : 'bi-moon-stars-fill text-dark'"></i>
          </button>

          <!-- Language Switcher -->
          <button type="button" class="lang-switch-btn px-2 py-0 rounded border-0" (click)="t.toggleLang()">
            <i class="bi bi-globe2 text-warning me-1"></i>
            <strong>{{ t.currentLang() === 'en' ? 'አማርኛ' : 'EN' }}</strong>
          </button>
        </div>
      </div>
    </div>

    <!-- Main Navigation Header -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-glass sticky-top py-2 py-lg-3">
      <div class="container">
        <!-- Logo / Brand -->
        <a class="navbar-brand d-flex align-items-center gap-2" routerLink="/">
          <div class="brand-logo-container d-flex align-items-center justify-content-center flex-shrink-0">
            <img src="/images/logo.png" alt="Zener Home Logo" class="brand-logo-img">
          </div>
          <div>
            <div class="brand-title fw-extrabold letter-spacing-1">ZENER HOME</div>
            <div class="brand-subtitle text-uppercase">{{ t.t('brand.tagline') }}</div>
          </div>
        </a>

        <!-- Mobile Toggle Button -->
        <button class="navbar-toggler border-0 shadow-none p-2" 
                type="button" 
                (click)="isMenuOpen.set(!isMenuOpen())"
                aria-controls="navbarNav" 
                [attr.aria-expanded]="isMenuOpen()" 
                aria-label="Toggle navigation">
          <i class="bi" [ngClass]="isMenuOpen() ? 'bi-x-lg text-warning fs-3' : 'bi-list text-warning fs-3'"></i>
        </button>

        <!-- Nav Links -->
        <div class="collapse navbar-collapse" [class.show]="isMenuOpen()" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1 my-3 my-lg-0">
            <li class="nav-item">
              <a class="nav-link px-3" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">
                {{ t.t('nav.home') }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" routerLink="/services" routerLinkActive="active" (click)="closeMenu()">
                {{ t.t('nav.services') }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" routerLink="/projects" routerLinkActive="active" (click)="closeMenu()">
                {{ t.t('nav.projects') }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" routerLink="/furniture" routerLinkActive="active" (click)="closeMenu()">
                {{ t.t('nav.furniture') }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" routerLink="/about" routerLinkActive="active" (click)="closeMenu()">
                {{ t.t('nav.about') }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" routerLink="/testimonials" routerLinkActive="active" (click)="closeMenu()">
                {{ t.t('nav.testimonials') }}
              </a>
            </li>
            <li class="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a class="btn btn-primary-orange btn-sm px-3 py-2 w-100 w-lg-auto" routerLink="/contact" (click)="closeMenu()">
                <i class="bi bi-chat-dots-fill me-1"></i>
                {{ t.t('btn.contactUs') }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .top-bar {
      background: var(--bg-top-bar);
      font-size: 0.78rem;
    }
    .hover-orange:hover {
      color: var(--color-primary-light) !important;
    }
    .social-top-link {
      color: #CBD5E1;
      font-size: 0.85rem;
      transition: color 0.2s ease, transform 0.2s ease;
      text-decoration: none;
    }
    .social-top-link:hover {
      color: var(--color-primary-light);
      transform: translateY(-1px);
    }
    .theme-toggle-btn {
      background: rgba(232, 106, 23, 0.15);
      color: #FFF;
      font-size: 0.85rem;
      border: 1px solid rgba(232, 106, 23, 0.3) !important;
      transition: all 0.2s ease;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 24px;
    }
    .theme-toggle-btn:hover {
      background: var(--color-primary);
      color: #FFF;
    }
    .theme-light .theme-toggle-btn {
      background: #E2E8F0;
      border-color: #CBD5E1 !important;
    }
    .lang-switch-btn {
      background: rgba(232, 106, 23, 0.15);
      color: #FFF;
      font-size: 0.75rem;
      border: 1px solid rgba(232, 106, 23, 0.3) !important;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .lang-switch-btn:hover {
      background: var(--color-primary);
      color: #FFF;
    }
    .brand-logo-container {
      height: 44px;
      width: 44px;
      background: #FFFFFF;
      border: 1px solid rgba(232, 106, 23, 0.4);
      border-radius: 8px;
      padding: 2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      overflow: hidden;
    }
    .brand-logo-img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 6px;
    }
    .brand-title {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--color-text-main);
      line-height: 1.1;
      letter-spacing: 0.08em;
    }
    .brand-subtitle {
      font-size: 0.62rem;
      color: var(--color-primary-light);
      letter-spacing: 0.06em;
      font-weight: 600;
    }
    .nav-link {
      color: var(--color-text-sub) !important;
      font-weight: 500;
      font-size: 0.92rem;
      transition: all 0.2s ease;
      border-radius: 6px;
    }
    .nav-link:hover, .nav-link.active {
      color: var(--color-primary-light) !important;
      background: rgba(232, 106, 23, 0.08);
    }
    @media (max-width: 991.98px) {
      .navbar-collapse {
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: 12px;
        padding: 1rem;
        margin-top: 0.5rem;
      }
      .nav-link {
        padding: 0.6rem 1rem;
      }
    }
  `]
})
export class NavbarComponent {
  readonly t = inject(TranslationService);
  readonly themeService = inject(ThemeService);
  readonly isMenuOpen = signal<boolean>(false);

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
