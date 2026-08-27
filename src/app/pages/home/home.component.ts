import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { ProjectService } from '../../core/services/project.service';
import { FurnitureService } from '../../core/services/furniture.service';
import { ServiceService } from '../../core/services/service.service';
import { Project } from '../../core/models/project.model';
import { FurnitureItem } from '../../core/models/furniture.model';
import { LicenseBadgeComponent } from '../../shared/components/license-badge/license-badge.component';
import { ProjectModalComponent } from '../../shared/components/project-modal/project-modal.component';
import { FurnitureModalComponent } from '../../shared/components/furniture-modal/furniture-modal.component';
import { VideoShowcaseComponent } from '../../shared/components/video-showcase/video-showcase.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    LicenseBadgeComponent, 
    ProjectModalComponent, 
    FurnitureModalComponent,
    VideoShowcaseComponent
  ],
  template: `
    <!-- Hero Section with comfortable spacing on mobile & desktop -->
    <section class="hero-section position-relative overflow-hidden py-4 py-md-5 py-lg-6">
      <div class="hero-bg-overlay"></div>
      <div class="container position-relative z-2">
        <div class="row align-items-center g-4 g-lg-5">
          
          <div class="col-12 col-lg-7">
            <!-- Badge -->
            <div class="d-inline-flex align-items-center gap-2 gradient-badge px-3 py-2 rounded-pill small mb-3 mb-md-4">
              <i class="bi bi-patch-check-fill text-warning"></i>
              <span class="text-truncate">{{ t.t('hero.badge') }}</span>
            </div>

            <!-- Title -->
            <h1 class="display-4 fw-extrabold text-white mb-3 mb-md-4 lh-sm">
              <span class="d-block mb-1">{{ t.isAmharic() ? 'የውብ እና ዘመናዊ ቦታዎች' : 'Mastering Luxury Spaces with' }}</span>
              <span class="gradient-orange-text">{{ t.isAmharic() ? 'የተሟላ የፊኒሺንግ እና የፈርኒቸር ጥበብ' : 'Timeless Architectural Precision' }}</span>
            </h1>

            <!-- Subtitle -->
            <p class="lead text-light-sub mb-4 mb-md-4">
              {{ t.t('hero.subtitle') }}
            </p>

            <!-- Action Buttons with spacing -->
            <div class="d-flex flex-column flex-sm-row gap-3 mb-4 mb-md-4 mb-lg-5">
              <a routerLink="/contact" class="btn btn-primary-orange px-4 py-3 fs-6">
                <i class="bi bi-chat-dots-fill"></i>
                {{ t.t('hero.cta.contact') }}
              </a>
              <a routerLink="/projects" class="btn btn-outline-orange px-4 py-3 fs-6">
                <i class="bi bi-grid-fill"></i>
                {{ t.t('hero.cta.portfolio') }}
              </a>
            </div>

            <!-- Stats Bar with breathing room -->
            <div class="row g-3 g-md-4 stats-row pt-4 border-top border-secondary border-opacity-25 mb-4 mb-lg-0">
              <div class="col-6 col-md-3">
                <div class="stat-number text-orange-glow">{{ t.t('hero.stats.exp') }}</div>
                <div class="stat-label">{{ t.t('hero.stats.expLabel') }}</div>
              </div>
              <div class="col-6 col-md-3">
                <div class="stat-number text-orange-glow">{{ t.t('hero.stats.projects') }}</div>
                <div class="stat-label">{{ t.t('hero.stats.projectsLabel') }}</div>
              </div>
              <div class="col-6 col-md-3">
                <div class="stat-number text-orange-glow">{{ t.t('hero.stats.turnkey') }}</div>
                <div class="stat-label">{{ t.t('hero.stats.turnkeyLabel') }}</div>
              </div>
              <div class="col-6 col-md-3">
                <div class="stat-number text-orange-glow">{{ t.t('hero.stats.budget') }}</div>
                <div class="stat-label">{{ t.t('hero.stats.budgetLabel') }}</div>
              </div>
            </div>

          </div>

          <!-- Hero Image & Badge Card with top margin on mobile -->
          <div class="col-12 col-lg-5 mt-4 mt-lg-0">
            <div class="hero-image-card card-luxury p-2 p-sm-3 position-relative shadow-lg">
              <div class="rounded-3 overflow-hidden position-relative hero-img-container">
                <img src="/images/pages/page-01.jpg" 
                     alt="Zener Home Luxury Finishing" 
                     class="img-fluid w-100 hero-img object-fit-cover">
                <div class="hero-badge-floating p-2 p-sm-3 rounded-3 bg-surface-glass position-absolute bottom-0 start-0 m-2 m-sm-3 border">
                  <div class="d-flex align-items-center gap-2 gap-sm-3">
                    <i class="bi bi-stars fs-4 fs-sm-3 text-warning"></i>
                    <div>
                      <h6 class="text-white mb-0 fw-bold small fs-sm-6">{{ t.isAmharic() ? 'ዚነር ሆም ፊኒሺንግ' : 'Zener Home Finishing' }}</h6>
                      <small class="text-white-50 x-small">{{ t.isAmharic() ? 'የተሟላ የፊኒሺንግ እና ፈርኒቸር ስራ' : 'Turnkey Design & Finishing Execution' }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Trust & Certification Section -->
    <section class="py-3 py-md-4">
      <div class="container">
        <app-license-badge></app-license-badge>
      </div>
    </section>

    <!-- Core Services Overview -->
    <section class="py-4 py-md-5">
      <div class="container">
        <div class="text-center max-w-700 mx-auto mb-4 mb-md-5">
          <span class="badge gradient-badge px-3 py-1 text-uppercase mb-2">{{ t.t('services.badge') }}</span>
          <h2 class="text-white fw-bold mb-3">{{ t.t('services.title') }}</h2>
          <p class="text-light-sub mb-0">{{ t.t('services.subtitle') }}</p>
        </div>

        <div class="row g-4">
          @for (service of serviceService.getServices(); track service.id) {
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card-luxury p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div class="service-icon-box mb-4 d-flex align-items-center justify-content-center">
                    <i class="bi {{ service.icon }} fs-2 text-warning"></i>
                  </div>
                  <h4 class="text-white fw-bold mb-2 fs-5">
                    {{ t.isAmharic() ? service.titleAm : service.title }}
                  </h4>
                  <p class="text-light-sub small mb-3">
                    {{ t.isAmharic() ? service.shortDescAm : service.shortDesc }}
                  </p>
                  <ul class="list-unstyled d-grid gap-2 small text-light-sub mb-4">
                    @for (detail of (t.isAmharic() ? service.detailsAm.slice(0, 3) : service.details.slice(0, 3)); track $index) {
                      <li class="d-flex align-items-start gap-2">
                        <i class="bi bi-check-lg text-warning"></i>
                        <span>{{ detail }}</span>
                      </li>
                    }
                  </ul>
                </div>

                <a routerLink="/services" class="text-orange-glow fw-semibold text-decoration-none d-flex align-items-center gap-2 pt-2">
                  <span>{{ t.isAmharic() ? 'ዝርዝር ይመልከቱ' : 'Explore Service' }}</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Featured Projects Showcase -->
    <section class="py-4 py-md-5 bg-surface-glass border-top border-bottom border-secondary border-opacity-25">
      <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end gap-3 mb-4">
          <div>
            <span class="badge gradient-badge px-3 py-1 text-uppercase mb-2">{{ t.isAmharic() ? 'የተጠናቀቁ ስራዎች' : 'Portfolio Showcase' }}</span>
            <h2 class="text-white fw-bold mb-1 fs-4 fs-md-2">{{ t.isAmharic() ? 'ዋና ዋና ፕሮጀክቶቻችን' : 'Landmark Executed Projects' }}</h2>
            <p class="text-light-sub small fs-md-6 mb-0">{{ t.isAmharic() ? 'በአዲስ አበባ እና በቢሾፍቱ የተጠናቀቁ የቅንጦት ስራዎች' : 'Recent high-end completions across Addis Ababa and Bishoftu' }}</p>
          </div>
          <a routerLink="/projects" class="btn btn-outline-orange btn-sm px-3 py-2 align-self-start align-self-md-auto">
            {{ t.isAmharic() ? 'ሁሉንም ፕሮጀክቶች ይመልከቱ' : 'View All Projects' }}
            <i class="bi bi-arrow-up-right ms-1"></i>
          </a>
        </div>

        <div class="row g-4">
          @for (project of projectService.getFeaturedProjects().slice(0, 6); track project.id) {
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card-luxury h-100 overflow-hidden cursor-pointer" (click)="selectedProject.set(project)">
                <div class="img-zoom-container position-relative">
                  <img [src]="project.image" [alt]="project.title" class="img-fluid w-100 project-card-img object-fit-cover">
                  <div class="position-absolute top-0 start-0 m-3">
                    <span class="badge bg-dark bg-opacity-75 text-warning border border-secondary border-opacity-50">
                      {{ t.isAmharic() ? project.categoryLabelAm : project.categoryLabel }}
                    </span>
                  </div>
                  @if (project.video) {
                    <div class="position-absolute top-0 end-0 m-3">
                      <span class="badge bg-danger text-white">
                        <i class="bi bi-play-circle-fill me-1"></i> Video
                      </span>
                    </div>
                  }
                </div>
                <div class="p-3 p-md-4">
                  <div class="text-warning small mb-1 d-flex align-items-center gap-1">
                    <i class="bi bi-geo-alt"></i>
                    {{ t.isAmharic() ? project.locationAm : project.location }}
                  </div>
                  <h5 class="text-white fw-bold mb-2 fs-6 fs-md-5">
                    {{ t.isAmharic() ? project.titleAm : project.title }}
                  </h5>
                  <p class="text-light-sub small text-truncate-2 mb-3">
                    {{ t.isAmharic() ? project.scopeAm : project.scope }}
                  </p>
                  <button type="button" class="btn btn-outline-light btn-sm w-100">
                    <i class="bi bi-eye me-1"></i> {{ t.t('btn.viewProject') }}
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Video Reels & Walkthroughs Section (With all 6 videos) -->
    <section class="py-4 py-md-5">
      <div class="container">
        <app-video-showcase></app-video-showcase>
      </div>
    </section>

    <!-- Custom Furniture Highlight -->
    <section class="py-4 py-md-5 bg-surface-glass border-top border-bottom border-secondary border-opacity-25">
      <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end gap-3 mb-4">
          <div>
            <span class="badge gradient-badge px-3 py-1 text-uppercase mb-2">{{ t.isAmharic() ? 'የእንጨትና ፈርኒቸር ስራ' : 'Workshop Craft' }}</span>
            <h2 class="text-white fw-bold mb-1 fs-4 fs-md-2">{{ t.isAmharic() ? 'ልዩ የቤትና የቢሮ ዕቃዎች' : 'Bespoke Custom Furniture' }}</h2>
            <p class="text-light-sub small fs-md-6 mb-0">{{ t.isAmharic() ? 'በዘመናዊ ቴክኖሎጂ እና በጥራት የሚመረቱ' : 'Handcrafted modular cabinetry, beds, and entertainment units' }}</p>
          </div>
          <a routerLink="/furniture" class="btn btn-outline-orange btn-sm px-3 py-2 align-self-start align-self-md-auto">
            {{ t.isAmharic() ? 'የፈርኒቸር ዝርዝር' : 'Browse Furniture Shop' }}
            <i class="bi bi-arrow-up-right ms-1"></i>
          </a>
        </div>

        <div class="row g-4">
          @for (item of furnitureService.getFeaturedFurniture().slice(0, 3); track item.id) {
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card-luxury h-100 overflow-hidden cursor-pointer" (click)="selectedFurniture.set(item)">
                <div class="img-zoom-container">
                  <img [src]="item.image" [alt]="item.name" class="img-fluid w-100 furniture-card-img object-fit-cover">
                </div>
                <div class="p-3 p-md-4">
                  <span class="badge gradient-badge px-2 py-1 small mb-2">
                    {{ t.isAmharic() ? item.categoryLabelAm : item.categoryLabel }}
                  </span>
                  <h5 class="text-white fw-bold mb-1 fs-6 fs-md-5">
                    {{ t.isAmharic() ? item.nameAm : item.name }}
                  </h5>
                  <p class="text-light-sub small text-truncate-2 mb-3">
                    {{ t.isAmharic() ? item.descriptionAm : item.description }}
                  </p>
                  <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
                    <span class="small text-warning">
                      <i class="bi bi-clock-history"></i> {{ item.leadTime }}
                    </span>
                    <button type="button" class="btn btn-outline-light btn-sm">
                      {{ t.t('btn.orderFurniture') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Step-by-Step Turnkey Process -->
    <section class="py-4 py-md-5">
      <div class="container">
        <div class="text-center max-w-700 mx-auto mb-4 mb-md-5">
          <span class="badge gradient-badge px-3 py-1 text-uppercase mb-2">{{ t.isAmharic() ? 'አሰራራችን' : 'How We Work' }}</span>
          <h2 class="text-white fw-bold mb-3 fs-4 fs-md-2">{{ t.t('process.title') }}</h2>
          <p class="text-light-sub mb-0">{{ t.isAmharic() ? 'ከመጀመሪያው ውይይት እስከ ቁልፍ ርክክብ በግልጽነትና በሙያዊ ብቃት እንሰራለን' : 'Seamless, transparent, and structured turnkey project execution from start to finish' }}</p>
        </div>

        <div class="row g-3 g-md-4">
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="step-card card-luxury p-4 h-100">
              <div class="step-num mb-2">01</div>
              <h5 class="text-white fw-bold mb-2 fs-6 fs-md-5">{{ t.t('process.step1.title') }}</h5>
              <p class="text-light-sub small mb-0">{{ t.t('process.step1.desc') }}</p>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-3">
            <div class="step-card card-luxury p-4 h-100">
              <div class="step-num mb-2">02</div>
              <h5 class="text-white fw-bold mb-2 fs-6 fs-md-5">{{ t.t('process.step2.title') }}</h5>
              <p class="text-light-sub small mb-0">{{ t.t('process.step2.desc') }}</p>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-3">
            <div class="step-card card-luxury p-4 h-100">
              <div class="step-num mb-2">03</div>
              <h5 class="text-white fw-bold mb-2 fs-6 fs-md-5">{{ t.t('process.step3.title') }}</h5>
              <p class="text-light-sub small mb-0">{{ t.t('process.step3.desc') }}</p>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-3">
            <div class="step-card card-luxury p-4 h-100">
              <div class="step-num mb-2">04</div>
              <h5 class="text-white fw-bold mb-2 fs-6 fs-md-5">{{ t.t('process.step4.title') }}</h5>
              <p class="text-light-sub small mb-0">{{ t.t('process.step4.desc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Get In Touch CTA Banner -->
    <section class="py-4 py-md-5">
      <div class="container">
        <div class="cta-banner card-luxury p-4 p-md-5 text-center position-relative overflow-hidden">
          <div class="glow-cta"></div>
          <h2 class="display-6 fw-bold text-white mb-3 fs-4 fs-md-3">
            {{ t.t('contact.title') }}
          </h2>
          <p class="lead text-light-sub max-w-700 mx-auto mb-4">
            {{ t.t('contact.subtitle') }}
          </p>
          <div class="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <a routerLink="/contact" class="btn btn-primary-orange px-4 py-3 fs-6">
              <i class="bi bi-chat-dots-fill"></i>
              {{ t.isAmharic() ? 'በቀጥታ ያነጋግሩን' : 'Get In Touch' }}
            </a>
            <a href="https://wa.me/251910900931" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp px-4 py-3 fs-6">
              <i class="bi bi-whatsapp"></i>
              {{ t.t('btn.chatWhatsapp') }}
            </a>
            <a href="tel:0910900931" class="btn btn-outline-orange px-4 py-3 fs-6">
              <i class="bi bi-telephone"></i>
              0910 900 931
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Modals -->
    <app-project-modal [project]="selectedProject()" (close)="selectedProject.set(null)"></app-project-modal>
    <app-furniture-modal [item]="selectedFurniture()" (close)="selectedFurniture.set(null)"></app-furniture-modal>
  `,
  styles: [`
    .hero-section {
      min-height: 75vh;
      display: flex;
      align-items: center;
    }
    .hero-bg-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 10% 20%, rgba(232, 106, 23, 0.18) 0%, transparent 50%),
                  radial-gradient(circle at 90% 80%, rgba(201, 84, 12, 0.12) 0%, transparent 60%);
      pointer-events: none;
    }
    .stat-number {
      font-size: 1.45rem;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 0.35rem;
    }
    @media (min-width: 768px) {
      .stat-number {
        font-size: 1.75rem;
      }
    }
    .stat-label {
      font-size: 0.72rem;
      color: #94A3B8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .hero-img {
      height: 260px;
    }
    @media (min-width: 768px) {
      .hero-img {
        height: 420px;
      }
    }
    .hero-badge-floating {
      max-width: 90%;
    }
    .max-w-700 {
      max-width: 700px;
    }
    .service-icon-box {
      width: 52px;
      height: 52px;
      border-radius: 12px;
      background: rgba(232, 106, 23, 0.12);
      border: 1px solid rgba(232, 106, 23, 0.25);
    }
    .project-card-img {
      height: 200px;
    }
    @media (min-width: 768px) {
      .project-card-img {
        height: 230px;
      }
    }
    .furniture-card-img {
      height: 190px;
    }
    @media (min-width: 768px) {
      .furniture-card-img {
        height: 210px;
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
    .step-num {
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--color-primary-light);
      opacity: 0.6;
    }
    @media (min-width: 768px) {
      .step-num {
        font-size: 1.75rem;
      }
    }
    .cta-banner {
      border: 1px solid rgba(232, 106, 23, 0.4);
    }
    .glow-cta {
      position: absolute;
      top: -50px;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(232, 106, 23, 0.2) 0%, transparent 70%);
      pointer-events: none;
    }
    .text-light-sub {
      color: var(--color-text-sub);
    }
    .x-small {
      font-size: 0.72rem;
    }
  `]
})
export class HomeComponent {
  readonly t = inject(TranslationService);
  readonly projectService = inject(ProjectService);
  readonly furnitureService = inject(FurnitureService);
  readonly serviceService = inject(ServiceService);

  readonly selectedProject = signal<Project | null>(null);
  readonly selectedFurniture = signal<FurnitureItem | null>(null);
}
