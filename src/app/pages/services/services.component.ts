import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { ServiceService } from '../../core/services/service.service';
import { LicenseBadgeComponent } from '../../shared/components/license-badge/license-badge.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, LicenseBadgeComponent],
  template: `
    <!-- Page Header -->
    <div class="page-header py-5 bg-surface-glass border-bottom border-secondary border-opacity-25 mb-5">
      <div class="container text-center py-4">
        <span class="badge gradient-badge px-3 py-1 text-uppercase mb-2">
          {{ t.isAmharic() ? 'የሙያ ዘርፎቻችን' : 'Comprehensive Capabilities' }}
        </span>
        <h1 class="display-5 fw-extrabold text-white mb-3">
          {{ t.isAmharic() ? 'የፊኒሺንግ እና የዲዛይን አገልግሎቶች' : 'Turnkey Finishing, Furniture & Design' }}
        </h1>
        <p class="lead text-light-sub max-w-700 mx-auto mb-0">
          {{ t.t('services.subtitle') }}
        </p>
      </div>
    </div>

    <div class="container pb-5">
      <!-- Section 1: Detailed Services Breakdown -->
      <div class="d-grid gap-5 mb-5">
        @for (service of serviceService.getServices(); track service.id; let isEven = $even) {
          <div class="card-luxury p-4 p-md-5">
            <div class="row align-items-center g-5" [ngClass]="{'flex-md-row-reverse': !isEven}">
              
              <!-- Service Info -->
              <div class="col-lg-6">
                <div class="d-inline-flex align-items-center gap-2 mb-3">
                  <div class="service-mini-icon d-flex align-items-center justify-content-center">
                    <i class="bi {{ service.icon }} text-warning fs-4"></i>
                  </div>
                  <span class="badge gradient-badge text-uppercase">{{ service.category }}</span>
                </div>

                <h2 class="text-white fw-bold mb-3">
                  {{ t.isAmharic() ? service.titleAm : service.title }}
                </h2>

                <p class="text-light-sub mb-4">
                  {{ t.isAmharic() ? service.shortDescAm : service.shortDesc }}
                </p>

                <h6 class="text-white fw-bold mb-3">
                  {{ t.isAmharic() ? 'የስራው ዝርዝር መስፈርቶች:' : 'What We Deliver:' }}
                </h6>

                <ul class="list-unstyled d-grid gap-2 mb-4 text-light-sub small">
                  @for (item of (t.isAmharic() ? service.detailsAm : service.details); track $index) {
                    <li class="d-flex align-items-start gap-2">
                      <i class="bi bi-check2-circle text-warning fs-5 lh-1"></i>
                      <span>{{ item }}</span>
                    </li>
                  }
                </ul>

                <div class="d-flex flex-wrap gap-3">
                  <a routerLink="/contact" class="btn btn-primary-orange">
                    <i class="bi bi-chat-dots-fill"></i>
                    {{ t.isAmharic() ? 'ይህንን ስራ ያነጋግሩን' : 'Inquire for This Service' }}
                  </a>
                  <a routerLink="/projects" class="btn btn-outline-orange">
                    {{ t.isAmharic() ? 'የተሰሩ ስራዎችን ይመልከቱ' : 'View Related Projects' }}
                  </a>
                </div>
              </div>

              <!-- Service Image -->
              <div class="col-lg-6">
                <div class="service-img-wrapper rounded-3 overflow-hidden">
                  <img [src]="service.image" [alt]="service.title" class="img-fluid w-100 object-fit-cover">
                </div>
              </div>

            </div>
          </div>
        }
      </div>

      <!-- Trust Badge -->
      <div class="mb-5">
        <app-license-badge></app-license-badge>
      </div>

      <!-- Turnkey Warranty Card -->
      <div class="card-luxury p-4 p-md-5">
        <div class="row align-items-center g-4">
          <div class="col-md-8">
            <h3 class="text-white fw-bold mb-2">
              {{ t.isAmharic() ? 'የጥራት እና የጊዜ ዋስትና' : 'Guaranteed Craftsmanship & Fixed Pricing' }}
            </h3>
            <p class="text-light-sub mb-0">
              {{ t.isAmharic() 
                  ? 'ዚነር ሆም በውል መሰረት የተሟላ የፊኒሺንግ ስራን በጊዜና በበጀት ያስረክባል። የፈቃድ ቁጥር 2931566' 
                  : 'We operate strictly under signed engineering contracts, milestones transparency, and post-handover warranty support for all finishing and custom furniture.' }}
            </p>
          </div>
          <div class="col-md-4 text-md-end">
            <a href="https://wa.me/251910900931" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp px-4 py-3">
              <i class="bi bi-whatsapp me-2"></i>
              {{ t.isAmharic() ? 'በዋትስአፕ ያነጋግሩን' : 'Chat with Engineer' }}
            </a>
          </div>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .max-w-700 {
      max-width: 700px;
    }
    .service-mini-icon {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: rgba(232, 106, 23, 0.15);
      border: 1px solid rgba(232, 106, 23, 0.3);
    }
    .service-img-wrapper {
      max-height: 400px;
      box-shadow: 0 15px 35px rgba(0,0,0,0.5);
    }
    .service-img-wrapper img {
      max-height: 400px;
      object-fit: cover;
    }
    .text-light-sub {
      color: #CBD5E1;
    }
  `]
})
export class ServicesComponent {
  readonly t = inject(TranslationService);
  readonly serviceService = inject(ServiceService);
}
