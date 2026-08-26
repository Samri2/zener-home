import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../core/services/translation.service';
import { LicenseBadgeComponent } from '../../shared/components/license-badge/license-badge.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, LicenseBadgeComponent],
  template: `
    <!-- Header -->
    <div class="page-header py-4 py-md-5 bg-surface-glass border-bottom border-secondary border-opacity-25 mb-4 mb-md-5">
      <div class="container text-center py-3 py-md-4">
        <span class="badge gradient-badge px-3 py-1 text-uppercase mb-2">
          {{ t.t('btn.contactUs') }}
        </span>
        <h1 class="display-5 fw-extrabold text-white mb-3">
          {{ t.isAmharic() ? 'ቢሮአችንን ይጎብኙ ወይም በቀጥታ ይደውሉ' : 'Get In Touch with Zener Home P.L.C.' }}
        </h1>
        <p class="lead text-light-sub max-w-700 mx-auto mb-0">
          {{ t.t('contact.subtitle') }}
        </p>
      </div>
    </div>

    <div class="container pb-5">
      <div class="row g-4 g-lg-5 mb-5">
        
        <!-- Contact Info Column -->
        <div class="col-12 col-lg-5">
          <div class="card-luxury p-3 p-sm-4 p-md-5 h-100 d-flex flex-column justify-content-between">
            <div>
              <h3 class="text-white fw-bold mb-4 fs-4">
                {{ t.isAmharic() ? 'የመገኛ አድራሻ እና ስልኮች' : 'Office & Workshop Location' }}
              </h3>

              <div class="d-grid gap-3 gap-md-4 mb-4">
                <!-- Location -->
                <div class="d-flex align-items-start gap-3">
                  <div class="contact-icon-box d-flex align-items-center justify-content-center flex-shrink-0">
                    <i class="bi bi-geo-alt-fill text-warning fs-4"></i>
                  </div>
                  <div>
                    <h6 class="text-white fw-bold mb-1">{{ t.isAmharic() ? 'ዋና ቢሮ አድራሻ' : 'Head Office Address' }}</h6>
                    <p class="text-light-sub small mb-0">{{ t.t('contact.address') }}</p>
                  </div>
                </div>

                <!-- Phones -->
                <div class="d-flex align-items-start gap-3">
                  <div class="contact-icon-box d-flex align-items-center justify-content-center flex-shrink-0">
                    <i class="bi bi-telephone-fill text-warning fs-4"></i>
                  </div>
                  <div>
                    <h6 class="text-white fw-bold mb-1">{{ t.isAmharic() ? 'ስልክ ቁጥሮች' : 'Direct Phone Lines' }}</h6>
                    <p class="text-light-sub small mb-1">
                      <a href="tel:0910900931" class="text-warning text-decoration-none fw-semibold">0910 900 931</a> / 
                      <a href="tel:0922166213" class="text-warning text-decoration-none fw-semibold"> 0922 166 213</a>
                    </p>
                    <small class="text-white-50">{{ t.isAmharic() ? 'ከሰኞ - ቅዳሜ: 2:30 - 12:00' : 'Monday - Saturday: 8:30 AM - 6:00 PM' }}</small>
                  </div>
                </div>

                <!-- Email -->
                <div class="d-flex align-items-start gap-3">
                  <div class="contact-icon-box d-flex align-items-center justify-content-center flex-shrink-0">
                    <i class="bi bi-envelope-fill text-warning fs-4"></i>
                  </div>
                  <div>
                    <h6 class="text-white fw-bold mb-1">{{ t.isAmharic() ? 'ኢሜይል' : 'Email Address' }}</h6>
                    <p class="text-light-sub small mb-0">
                      <a href="mailto:Zenerfinishingzf@gmail.com" class="text-light text-decoration-none text-break">
                        Zenerfinishingzf&#64;gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <!-- Leadership -->
                <div class="d-flex align-items-start gap-3">
                  <div class="contact-icon-box d-flex align-items-center justify-content-center flex-shrink-0">
                    <i class="bi bi-person-badge-fill text-warning fs-4"></i>
                  </div>
                  <div>
                    <h6 class="text-white fw-bold mb-1">{{ t.isAmharic() ? 'ዋና ስራ አስኪያጅ' : 'General Management' }}</h6>
                    <p class="text-light-sub small mb-0">{{ t.isAmharic() ? 'ፍቃዱ ወርቁ በለጠ (Fikadu Worku Belete)' : 'Fikadu Worku Belete' }}</p>
                  </div>
                </div>

              </div>
            </div>

            <!-- Fast WhatsApp Button -->
            <a href="https://wa.me/251910900931" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp py-3 d-flex align-items-center justify-content-center gap-2 w-100">
              <i class="bi bi-whatsapp fs-5"></i>
              <span>{{ t.t('btn.chatWhatsapp') }}</span>
            </a>

          </div>
        </div>

        <!-- Interactive Contact Form -->
        <div class="col-12 col-lg-7">
          <div class="card-luxury p-3 p-sm-4 p-md-5">
            <h3 class="text-white fw-bold mb-2 fs-4">
              {{ t.isAmharic() ? 'የመልዕክት ወይም የፕሮጀክት ጥያቄ ይላኩ' : 'Send an Inquiry or Schedule Site Visit' }}
            </h3>
            <p class="text-light-sub small mb-4">
              {{ t.isAmharic() ? 'መረጃዎን ይሙሉ፤ በ24 ሰዓታት ውስጥ ኢንጂነሮቻችን መልስ ይሰጡዎታል።' : 'Fill out your project requirements and our team will get in touch with you promptly.' }}
            </p>

            @if (formSubmitted()) {
              <div class="alert alert-success bg-success bg-opacity-25 text-white border-success p-4 rounded-3 text-center">
                <i class="bi bi-check-circle-fill fs-2 text-success d-block mb-2"></i>
                <h5 class="fw-bold">{{ t.isAmharic() ? 'መልዕክትዎ በተሳካ ሁኔታ ደርሶናል!' : 'Thank you! Your message has been sent.' }}</h5>
                <p class="small mb-3">{{ t.isAmharic() ? 'ኢንጂነሮቻችን በአጭር ጊዜ ውስጥ ያነጋግሩዎታል።' : 'Our project engineers will contact you shortly.' }}</p>
                <button type="button" class="btn btn-sm btn-outline-light" (click)="formSubmitted.set(false)">
                  {{ t.isAmharic() ? 'ሌላ መልዕክት ላክ' : 'Send Another Message' }}
                </button>
              </div>
            } @else {
              <form (ngSubmit)="submitForm()">
                <div class="row g-3 mb-3">
                  <div class="col-12 col-md-6">
                    <label class="text-white-50 small mb-1">{{ t.isAmharic() ? 'ሙሉ ስም *' : 'Full Name *' }}</label>
                    <input type="text" class="form-control form-control-dark" [(ngModel)]="formData.name" name="name" required placeholder="Abebe Kebede">
                  </div>
                  <div class="col-12 col-md-6">
                    <label class="text-white-50 small mb-1">{{ t.isAmharic() ? 'ስልክ ቁጥር *' : 'Phone Number *' }}</label>
                    <input type="tel" class="form-control form-control-dark" [(ngModel)]="formData.phone" name="phone" required placeholder="0911 000 000">
                  </div>
                </div>

                <div class="row g-3 mb-3">
                  <div class="col-12 col-md-6">
                    <label class="text-white-50 small mb-1">{{ t.isAmharic() ? 'የፕሮጀክት አይነት' : 'Project Category' }}</label>
                    <select class="form-select form-control-dark" [(ngModel)]="formData.projectType" name="projectType">
                      <option value="residential">{{ t.isAmharic() ? 'መኖሪያ ቪላ (Residential Villa)' : 'Residential Villa' }}</option>
                      <option value="apartment">{{ t.isAmharic() ? 'አፓርትመንት (Apartment)' : 'Apartment Building' }}</option>
                      <option value="commercial">{{ t.isAmharic() ? 'የንግድ ህንፃ / ቢሮ' : 'Commercial / Office' }}</option>
                      <option value="hospitality">{{ t.isAmharic() ? 'ሆቴል / ሬስቶራንት' : 'Hotel / Restaurant / Spa' }}</option>
                      <option value="furniture">{{ t.isAmharic() ? 'የቤት ዕቃ / ካቢኔት ብቻ' : 'Custom Furniture Only' }}</option>
                    </select>
                  </div>
                  <div class="col-12 col-md-6">
                    <label class="text-white-50 small mb-1">{{ t.isAmharic() ? 'የቦታው አድራሻ (ከተማ/ሰፈር)' : 'Project Location / Neighborhood' }}</label>
                    <input type="text" class="form-control form-control-dark" [(ngModel)]="formData.location" name="location" placeholder="e.g. Bole, Bulbula, Lebu, CMC">
                  </div>
                </div>

                <div class="mb-4">
                  <label class="text-white-50 small mb-1">{{ t.isAmharic() ? 'የፕሮጀክቱ ዝርዝር መግለጫ *' : 'Project Details & Scope *' }}</label>
                  <textarea class="form-control form-control-dark" rows="4" [(ngModel)]="formData.message" name="message" required placeholder="{{ t.isAmharic() ? 'ስለሚፈልጉት የፊኒሺንግ ስራ፣ የክፍሎች ብዛት ወይም ፈርኒቸር ይግለጹልን...' : 'Describe your finishing requirements, space dimensions, design preferences, or furniture needs...' }}"></textarea>
                </div>

                <div class="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
                  <button type="submit" class="btn btn-primary-orange px-4 py-3">
                    <i class="bi bi-send-fill me-2"></i>
                    {{ t.isAmharic() ? 'መልዕክቱን ላክ' : 'Send Message' }}
                  </button>

                  <a [href]="getFormWhatsApp()" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light px-3 py-3 small text-center">
                    <i class="bi bi-whatsapp text-success me-1"></i>
                    {{ t.isAmharic() ? 'በቀጥታ በዋትስአፕ ላክ' : 'Send via WhatsApp' }}
                  </a>
                </div>
              </form>
            }

          </div>
        </div>

      </div>

      <!-- Trust Badge -->
      <app-license-badge></app-license-badge>

    </div>
  `,
  styles: [`
    .max-w-700 {
      max-width: 700px;
    }
    .contact-icon-box {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: rgba(232, 106, 23, 0.15);
      border: 1px solid rgba(232, 106, 23, 0.3);
      flex-shrink: 0;
    }
    .form-control-dark {
      background: #0E0E14;
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #FFF;
      border-radius: 8px;
      padding: 0.75rem 1rem;
    }
    .form-control-dark:focus {
      background: #14141D;
      border-color: var(--color-primary);
      color: #FFF;
      box-shadow: 0 0 10px rgba(232, 106, 23, 0.3);
    }
    .text-light-sub {
      color: #CBD5E1;
    }
  `]
})
export class ContactComponent {
  readonly t = inject(TranslationService);
  readonly formSubmitted = signal<boolean>(false);

  readonly formData = {
    name: '',
    phone: '',
    projectType: 'residential',
    location: '',
    message: ''
  };

  submitForm(): void {
    if (!this.formData.name || !this.formData.phone) return;
    this.formSubmitted.set(true);
  }

  getFormWhatsApp(): string {
    const text = encodeURIComponent(
      `Hello Zener Home, my name is ${this.formData.name || 'a client'}. I am inquiring about a ${this.formData.projectType} project in ${this.formData.location || 'Addis Ababa'}. Note: ${this.formData.message || 'Please contact me.'}`
    );
    return `https://wa.me/251910900931?text=${text}`;
  }
}
