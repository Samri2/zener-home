import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { LicenseBadgeComponent } from '../../shared/components/license-badge/license-badge.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, LicenseBadgeComponent],
  template: `
    <!-- Header -->
    <div class="page-header py-5 bg-surface-glass border-bottom border-secondary border-opacity-25 mb-5">
      <div class="container text-center py-4">
        <span class="badge gradient-badge px-3 py-1 text-uppercase mb-2">
          {{ t.isAmharic() ? 'ስለ ድርጅታችን' : 'Corporate Profile' }}
        </span>
        <h1 class="display-5 fw-extrabold text-white mb-3">
          {{ t.isAmharic() ? 'ስለ ዚነር ሆም ኃ/የተ/የግ/ማ' : 'About Zener Home P.L.C.' }}
        </h1>
        <p class="lead text-light-sub max-w-700 mx-auto mb-0">
          {{ t.t('brand.positioning') }}
        </p>
      </div>
    </div>

    <div class="container pb-5">
      
      <!-- Company Overview Story -->
      <div class="row align-items-center g-5 mb-5">
        <div class="col-lg-6">
          <div class="d-inline-flex align-items-center gap-2 mb-3">
            <span class="badge gradient-badge text-uppercase">{{ t.isAmharic() ? 'የስራ ልምድ' : 'Established Excellence' }}</span>
          </div>
          <h2 class="text-white fw-bold mb-3">
            {{ t.isAmharic() ? 'የፊኒሺንግ ስራን በከፍተኛ ጥራት እና ታማኝነት እናስረክባለን' : 'Engineering Refined Living & Commercial Interiors' }}
          </h2>
          <p class="text-light-sub mb-3">
            {{ t.isAmharic() 
                ? 'ዚነር ሆም ኃ/የተ/የግ/ማ በአዲስ አበባ ከተማ አስተዳደር ንግድ ቢሮ የተመዘገበና በደረጃ 51212 ህጋዊ የፊኒሺንግ ስራዎች ተቋራጭ ነው። በዋና ስራ አስኪያጅ ፍቃዱ ወርቁ በለጠ የሚመራው ድርጅታችን በርካታ ባለከፍተኛ ደረጃ ቪላዎችን፣ ሆቴሎችን፣ የቤተሰብ አፓርትመንቶችንና ተቋማዊ ህንፃዎችን በተሟላ ሁኔታ አጠናቆ አስረክቧል።' 
                : 'Zener Home P.L.C. is an officially licensed Category 51212 Finishing Contractor recognized by the Addis Ababa City Administration Trade Bureau. Led by General Manager Fikadu Worku Belete, our multidisciplinary team of engineers, interior designers, and master woodworkers transforms structural shells into luxurious, fully functional spaces.' }}
          </p>
          <p class="text-light-sub mb-4">
            {{ t.isAmharic() 
                ? 'ስራዎቻችን ከ3D ዲዛይን እና የቦታ እቅድ ጀምሮ የጂፕሰም ጣሪያ፣ መብራቶች፣ ወለል፣ ቀለም እና በእንጨት ውጤቶች ማምረቻችን የሚዘጋጁ የወጥ ቤት ካቢኔቶችና ፈርኒቸሮችን ያካትታል።' 
                : 'From photorealistic 3D visualization and BOQ development to on-site gypsum coffered ceilings, architectural LED arrays, and precision millwork furniture manufactured in our modern workshop.' }}
          </p>

          <div class="d-flex flex-wrap gap-4 pt-2">
            <div>
              <h4 class="text-orange-glow fw-bold mb-0">8+ Years</h4>
              <small class="text-white-50">{{ t.isAmharic() ? 'የስራ ልምድ' : 'Industry Presence' }}</small>
            </div>
            <div class="border-start border-secondary border-opacity-50 ps-4">
              <h4 class="text-orange-glow fw-bold mb-0">10+</h4>
              <small class="text-white-50">{{ t.isAmharic() ? 'ዋና ዋና ፕሮጀክቶች' : 'Flagship Sites' }}</small>
            </div>
            <div class="border-start border-secondary border-opacity-50 ps-4">
              <h4 class="text-orange-glow fw-bold mb-0">100%</h4>
              <small class="text-white-50">{{ t.isAmharic() ? 'ህጋዊ ዋስትና' : 'Licensed & Bonded' }}</small>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="card-luxury p-3">
            <img src="/images/pages/page-05.jpg" 
                 alt="Zener Home Architectural Finishing" 
                 class="img-fluid rounded-3 w-100 object-fit-cover about-img">
          </div>
        </div>
      </div>

      <!-- Verified License Box -->
      <div class="mb-5">
        <app-license-badge></app-license-badge>
      </div>

      <!-- Core Values / Pillars -->
      <div class="row g-4 mb-5">
        <div class="col-md-4">
          <div class="card-luxury p-4 h-100">
            <div class="value-icon-box d-flex align-items-center justify-content-center mb-3">
              <i class="bi bi-gem text-warning fs-3"></i>
            </div>
            <h4 class="text-white fw-bold mb-2">{{ t.isAmharic() ? 'የጥራት ቁርጠኝነት' : 'Uncompromising Quality' }}</h4>
            <p class="text-light-sub small mb-0">
              {{ t.isAmharic() 
                  ? 'ከውጪ ሀገር እና ከሀገር ውስጥ የሚመጡ ጥራት ያላቸውን ቁሳቁሶች በመጠቀም ረጅም እድሜ የሚቆዩ ስራዎችን እንሰራለን።' 
                  : 'We employ high-density moisture resistant cores, German hardware fittings, certified electrical fixtures, and weather-proof exterior treatments.' }}
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card-luxury p-4 h-100">
            <div class="value-icon-box d-flex align-items-center justify-content-center mb-3">
              <i class="bi bi-clock-history text-warning fs-3"></i>
            </div>
            <h4 class="text-white fw-bold mb-2">{{ t.isAmharic() ? 'የጊዜ እና የበጀት ታማኝነት' : 'Timeline & Budget Respect' }}</h4>
            <p class="text-light-sub small mb-0">
              {{ t.isAmharic() 
                  ? 'ውል በተገባበት ቀንና በተስማማነው በጀት መሰረት ስራን በወቅቱ እናስረክባለን።' 
                  : 'Transparent bill of quantities (BOQ) with fixed milestone delivery schedules to ensure on-time and within-budget completions.' }}
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card-luxury p-4 h-100">
            <div class="value-icon-box d-flex align-items-center justify-content-center mb-3">
              <i class="bi bi-shield-check text-warning fs-3"></i>
            </div>
            <h4 class="text-white fw-bold mb-2">{{ t.isAmharic() ? 'ህጋዊ ኮንትራት እና ፈቃድ' : 'Full Legal Licensing' }}</h4>
            <p class="text-light-sub small mb-0">
              {{ t.isAmharic() 
                  ? 'የተሟላ የንግድ ፈቃድ (ቁጥር 2931566) ያለው እና በአዲስ አበባ ንግድ ቢሮ የተመዘገበ ህጋዊ ድርጅት ነን።' 
                  : 'Formally registered under Category 51212 with complete documentation and clear warranty protocols.' }}
            </p>
          </div>
        </div>
      </div>

      <!-- Workshop & Facility -->
      <div class="card-luxury p-4 p-md-5 mb-5">
        <div class="row align-items-center g-4">
          <div class="col-lg-7">
            <span class="badge gradient-badge mb-2 px-3 py-1 text-uppercase">{{ t.isAmharic() ? 'የማምረቻ ማዕከል' : 'Joinery Workshop' }}</span>
            <h3 class="text-white fw-bold mb-3">
              {{ t.isAmharic() ? 'ዘመናዊ የእንጨትና የፈርኒቸር ማምረቻ' : 'State-of-the-Art Woodwork & Assembly Facility' }}
            </h3>
            <p class="text-light-sub mb-3">
              {{ t.isAmharic() 
                  ? 'በማምረቻችን ውስጥ ያሉ ዘመናዊ ማሽነሪዎች እና የእንጨት መቁረጫዎች ጥራት ያላቸው የወጥ ቤት ካቢኔቶችን፣ አልጋዎችን፣ የቲቪ ግድግዳዎችን እና የቢሮ እቃዎችን በከፍተኛ ጥንቃቄ ለማምረት ያስችሉናል።' 
                  : 'Equipped with precision panel saws, automatic edge-banders, CNC routing tools, and dust-free spray booths, our workshop produces millimeter-accurate millwork cabinetry and bespoke furniture.' }}
            </p>
            <div class="d-flex flex-wrap gap-3">
              <a routerLink="/furniture" class="btn btn-primary-orange">
                <i class="bi bi-grid"></i>
                {{ t.isAmharic() ? 'የቤት ዕቃዎቻችንን ይመልከቱ' : 'Explore Furniture Portfolio' }}
              </a>
              <a routerLink="/contact" class="btn btn-outline-orange">
                {{ t.isAmharic() ? 'ቢሮአችንን ይጎብኙ' : 'Visit Our Office in Lebu' }}
              </a>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="rounded-3 overflow-hidden">
              <img src="/images/pages/page-02.jpg" 
                   alt="Modern Workshop Woodwork" 
                   class="img-fluid w-100 object-fit-cover rounded-3">
            </div>
          </div>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .max-w-700 {
      max-width: 700px;
    }
    .about-img {
      height: 420px;
    }
    .value-icon-box {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      background: rgba(232, 106, 23, 0.15);
      border: 1px solid rgba(232, 106, 23, 0.3);
    }
    .text-light-sub {
      color: #CBD5E1;
    }
  `]
})
export class AboutComponent {
  readonly t = inject(TranslationService);
}
