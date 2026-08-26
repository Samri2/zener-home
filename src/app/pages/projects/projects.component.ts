import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../core/models/project.model';
import { ProjectModalComponent } from '../../shared/components/project-modal/project-modal.component';
import { VideoShowcaseComponent } from '../../shared/components/video-showcase/video-showcase.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent, VideoShowcaseComponent],
  template: `
    <!-- Header -->
    <div class="page-header py-4 py-md-5 bg-surface-glass border-bottom border-secondary border-opacity-25 mb-4 mb-md-5">
      <div class="container text-center py-3 py-md-4">
        <span class="badge gradient-badge px-3 py-1 text-uppercase mb-2">
          {{ t.isAmharic() ? 'የተጠናቀቁ ፕሮጀክቶች' : 'Project Portfolio' }}
        </span>
        <h1 class="display-5 fw-extrabold text-white mb-3">
          {{ t.isAmharic() ? 'የተሰሩ የፊኒሺንግ እና ዲዛይን ስራዎች' : 'Completed Architectural Finishing Works' }}
        </h1>
        <p class="lead text-light-sub max-w-700 mx-auto mb-0">
          {{ t.isAmharic() 
              ? 'በአዲስ አበባ እና በዙሪያዋ የተሰሩ ቪላዎች፣ አፓርትመንቶች፣ ሆቴሎች እና የንግድ ተቋማት' 
              : 'Explore our track record of residential villas, multi-unit apartments, corporate offices, and hospitality projects.' }}
        </p>
      </div>
    </div>

    <div class="container pb-5">
      <!-- Category Filter Tabs (Responsive Scrollable on Mobile) -->
      <div class="filter-tabs-wrapper d-flex flex-nowrap flex-md-wrap justify-content-start justify-content-md-center gap-2 mb-4 mb-md-5 overflow-x-auto pb-2">
        <button type="button" 
                class="btn filter-btn px-3 px-md-4 py-2 flex-shrink-0" 
                [class.active]="selectedCategory() === 'all'"
                (click)="selectedCategory.set('all')">
          {{ t.isAmharic() ? 'ሁሉም ፕሮጀክቶች' : 'All Projects' }}
        </button>
        <button type="button" 
                class="btn filter-btn px-3 px-md-4 py-2 flex-shrink-0" 
                [class.active]="selectedCategory() === 'residential'"
                (click)="selectedCategory.set('residential')">
          {{ t.isAmharic() ? 'መኖሪያ ቪላዎች' : 'Residential Villas' }}
        </button>
        <button type="button" 
                class="btn filter-btn px-3 px-md-4 py-2 flex-shrink-0" 
                [class.active]="selectedCategory() === 'apartment'"
                (click)="selectedCategory.set('apartment')">
          {{ t.isAmharic() ? 'አፓርትመንቶች' : 'Apartments' }}
        </button>
        <button type="button" 
                class="btn filter-btn px-3 px-md-4 py-2 flex-shrink-0" 
                [class.active]="selectedCategory() === 'commercial'"
                (click)="selectedCategory.set('commercial')">
          {{ t.isAmharic() ? 'የንግድና ተቋማት' : 'Commercial' }}
        </button>
        <button type="button" 
                class="btn filter-btn px-3 px-md-4 py-2 flex-shrink-0" 
                [class.active]="selectedCategory() === 'hospitality'"
                (click)="selectedCategory.set('hospitality')">
          {{ t.isAmharic() ? 'ሆቴልና መስተንግዶ' : 'Hotels & Spa' }}
        </button>
      </div>

      <!-- Project Cards Grid (1 col mobile, 2 col tablet, 3 col desktop) -->
      <div class="row g-4 mb-5">
        @for (project of filteredProjects(); track project.id) {
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card-luxury h-100 overflow-hidden cursor-pointer" (click)="activeModalProject.set(project)">
              <div class="img-zoom-container position-relative">
                <img [src]="project.image" [alt]="project.title" class="img-fluid w-100 project-img object-fit-cover">
                <div class="position-absolute top-0 start-0 m-3">
                  <span class="badge bg-dark bg-opacity-75 text-warning border border-secondary border-opacity-50">
                    {{ t.isAmharic() ? project.categoryLabelAm : project.categoryLabel }}
                  </span>
                </div>
                <div class="position-absolute bottom-0 end-0 m-3">
                  <span class="badge bg-black bg-opacity-75 text-white small">
                    <i class="bi bi-calendar3"></i> {{ project.year }}
                  </span>
                </div>
              </div>

              <div class="p-3 p-sm-4 d-flex flex-column justify-content-between flex-grow-1">
                <div>
                  <div class="text-warning small mb-1 d-flex align-items-center gap-1">
                    <i class="bi bi-geo-alt-fill"></i>
                    {{ t.isAmharic() ? project.locationAm : project.location }}
                  </div>
                  <h4 class="text-white fw-bold mb-2 fs-5">
                    {{ t.isAmharic() ? project.titleAm : project.title }}
                  </h4>
                  <p class="text-light-sub small text-truncate-2 mb-3">
                    {{ t.isAmharic() ? project.scopeAm : project.scope }}
                  </p>
                </div>

                <div class="d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25">
                  <span class="small text-white-50">
                    {{ project.gallery ? project.gallery.length + ' Photos' : '1 Photo' }}
                  </span>
                  <button type="button" class="btn btn-outline-light btn-sm px-3">
                    <i class="bi bi-arrows-fullscreen me-1"></i> {{ t.t('btn.viewProject') }}
                  </button>
                </div>
              </div>

            </div>
          </div>
        }
      </div>

      <!-- Embedded Video Walkthroughs -->
      <div class="mb-5">
        <app-video-showcase></app-video-showcase>
      </div>

      <!-- Turnkey CTA -->
      <div class="card-luxury p-4 p-md-5 text-center">
        <h3 class="text-white fw-bold mb-2">
          {{ t.isAmharic() ? 'የእርስዎን ፕሮጀክት አብረን እንገንባ' : 'Have a Site Ready for Finishing?' }}
        </h3>
        <p class="text-light-sub max-w-700 mx-auto mb-4">
          {{ t.isAmharic() 
              ? 'ከንድፍ ጀምሮ እስከ ሙሉ ፊኒሺንግ እና ፈርኒቸር ስራዎችን በታማኝነት እናስረክባለን።' 
              : 'Our engineers will inspect your site in Addis Ababa, prepare 3D design concepts, and deliver a detailed transparent bill of quantities (BOQ).' }}
        </p>
        <div class="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <a [href]="getGeneralWhatsApp()" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp px-4 py-3">
            <i class="bi bi-whatsapp me-2"></i>
            {{ t.isAmharic() ? 'በዋትስአፕ ያነጋግሩን' : 'Discuss on WhatsApp' }}
          </a>
          <a href="tel:0910900931" class="btn btn-outline-orange px-4 py-3">
            <i class="bi bi-telephone me-2"></i>
            0910 900 931
          </a>
        </div>
      </div>

    </div>

    <app-project-modal [project]="activeModalProject()" (close)="activeModalProject.set(null)"></app-project-modal>
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
    .project-img {
      height: 220px;
    }
    @media (min-width: 768px) {
      .project-img {
        height: 250px;
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
export class ProjectsComponent {
  readonly t = inject(TranslationService);
  readonly projectService = inject(ProjectService);

  readonly selectedCategory = signal<string>('all');
  readonly activeModalProject = signal<Project | null>(null);

  readonly filteredProjects = computed(() => {
    return this.projectService.getProjectsByCategory(this.selectedCategory());
  });

  getGeneralWhatsApp(): string {
    const text = encodeURIComponent(
      'Hello Zener Home Engineering team, I have a construction/finishing project in Addis Ababa and would like to arrange a site consultation.'
    );
    return `https://wa.me/251910900931?text=${text}`;
  }
}
