import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-license-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="license-card p-3 p-sm-4 rounded-4 position-relative overflow-hidden">
      <div class="glow-accent"></div>
      <div class="row align-items-center g-3">
        <div class="col-auto">
          <div class="badge-icon-box d-flex align-items-center justify-content-center">
            <i class="bi bi-patch-check-fill fs-2 fs-sm-1 text-warning"></i>
          </div>
        </div>
        <div class="col-12 col-sm">
          <div class="d-flex flex-wrap align-items-center gap-2 mb-1">
            <span class="badge bg-warning text-dark fw-bold px-2 px-sm-3 py-1 text-uppercase letter-spacing-1 small">
              {{ t.isAmharic() ? 'ህጋዊ የተረጋገጠ ተቋራጭ' : 'Certified Finishing Contractor' }}
            </span>
            <span class="text-white-50 small">
              {{ t.isAmharic() ? 'ደረጃ 51212' : 'Category Code: 51212' }}
            </span>
          </div>
          <h4 class="text-white fw-bold mb-1 fs-5 fs-sm-4">
            {{ t.isAmharic() ? 'ዚነር ሆም ኃ/የተ/የግ/ማ (Zener Home P.L.C.)' : 'Zener Home P.L.C.' }}
          </h4>
          <p class="text-light-sub small mb-2">
            {{ t.t('trust.desc') }}
          </p>
          <div class="d-flex flex-wrap gap-2 gap-sm-3 small text-white-50">
            <span class="d-flex align-items-center gap-1">
              <i class="bi bi-file-earmark-text text-warning"></i>
              <strong>{{ t.isAmharic() ? 'የንግድ ፈቃድ:' : 'License No:' }}</strong> 2931566
            </span>
            <span class="d-flex align-items-center gap-1">
              <i class="bi bi-person-badge text-warning"></i>
              <strong>{{ t.isAmharic() ? 'ስራ አስኪያጅ:' : 'GM:' }}</strong> {{ t.isAmharic() ? 'ፍቃዱ ወርቁ በለጠ' : 'Fikadu Worku Belete' }}
            </span>
            <span class="d-flex align-items-center gap-1">
              <i class="bi bi-geo-alt text-warning"></i>
              {{ t.isAmharic() ? 'ንፋስ ስልክ ላፍቶ / ሌቡ፣ አዲስ አበባ' : 'Lebu, Addis Ababa' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .license-card {
      background: linear-gradient(145deg, rgba(28, 28, 38, 0.95), rgba(18, 18, 24, 0.98));
      border: 1px solid rgba(232, 106, 23, 0.35);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05);
    }
    .badge-icon-box {
      width: 52px;
      height: 52px;
      border-radius: 14px;
      background: rgba(232, 106, 23, 0.12);
      border: 1px solid rgba(232, 106, 23, 0.3);
    }
    @media (min-width: 576px) {
      .badge-icon-box {
        width: 64px;
        height: 64px;
        border-radius: 16px;
      }
    }
    .text-light-sub {
      color: #CBD5E1;
    }
    .letter-spacing-1 {
      letter-spacing: 0.05em;
    }
    .glow-accent {
      position: absolute;
      top: -30px;
      right: -30px;
      width: 120px;
      height: 120px;
      background: radial-gradient(circle, rgba(232, 106, 23, 0.15) 0%, transparent 70%);
      pointer-events: none;
    }
  `]
})
export class LicenseBadgeComponent {
  readonly t = inject(TranslationService);
}
