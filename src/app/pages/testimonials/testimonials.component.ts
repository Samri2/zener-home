import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { LicenseBadgeComponent } from '../../shared/components/license-badge/license-badge.component';

export interface Testimonial {
  id: string;
  clientName: string;
  clientNameAm: string;
  clientRole: string;
  clientRoleAm: string;
  project: string;
  projectAm: string;
  rating: number;
  image: string;
  quote: string;
  quoteAm: string;
  year: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, RouterLink, LicenseBadgeComponent],
  template: `
    <!-- Page Header -->
    <div class="page-header py-5 bg-surface-glass border-bottom border-secondary border-opacity-25 mb-5">
      <div class="container text-center py-4">
        <span class="badge gradient-badge px-3 py-1 text-uppercase mb-2">
          {{ t.t('testimonials.badge') }}
        </span>
        <h1 class="display-5 fw-extrabold text-white mb-3">
          {{ t.t('testimonials.title') }}
        </h1>
        <p class="lead text-light-sub max-w-700 mx-auto mb-0">
          {{ t.t('testimonials.subtitle') }}
        </p>
      </div>
    </div>

    <div class="container pb-5">
      
      <!-- Key Satisfaction Metrics Bar -->
      <div class="row g-3 g-md-4 mb-5">
        <div class="col-6 col-md-3">
          <div class="card-luxury p-3 p-md-4 text-center h-100">
            <div class="display-6 fw-bold text-orange-glow mb-1">100%</div>
            <div class="text-white-50 small">{{ t.isAmharic() ? 'የተሟላ ርክክብ' : 'Project Handover Rate' }}</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card-luxury p-3 p-md-4 text-center h-100">
            <div class="display-6 fw-bold text-orange-glow mb-1">8+ Years</div>
            <div class="text-white-50 small">{{ t.isAmharic() ? 'የስራ ልምድ' : 'Proven Track Record' }}</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card-luxury p-3 p-md-4 text-center h-100">
            <div class="display-6 fw-bold text-orange-glow mb-1">5.0 ★</div>
            <div class="text-white-50 small">{{ t.isAmharic() ? 'የጥራት ደረጃ' : 'Client Rating Average' }}</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card-luxury p-3 p-md-4 text-center h-100">
            <div class="display-6 fw-bold text-orange-glow mb-1">On Time</div>
            <div class="text-white-50 small">{{ t.isAmharic() ? 'የጊዜ ቁርጠኝነት' : 'Milestone Commitment' }}</div>
          </div>
        </div>
      </div>

      <!-- Testimonials Grid -->
      <div class="row g-4 mb-5">
        @for (item of testimonials; track item.id) {
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card-luxury p-4 h-100 d-flex flex-column justify-content-between">
              
              <div>
                <!-- Rating Stars & Year -->
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div class="text-warning">
                    @for (star of [1,2,3,4,5]; track star) {
                      <i class="bi bi-star-fill me-1"></i>
                    }
                  </div>
                  <span class="badge bg-dark bg-opacity-75 text-white-50 small">
                    {{ item.year }}
                  </span>
                </div>

                <!-- Project Tag -->
                <div class="mb-3">
                  <span class="badge gradient-badge px-2 py-1 small">
                    <i class="bi bi-geo-alt-fill me-1"></i>
                    {{ t.isAmharic() ? item.projectAm : item.project }}
                  </span>
                </div>

                <!-- Quote Text -->
                <p class="text-light-sub mb-4 quote-text">
                  "{{ t.isAmharic() ? item.quoteAm : item.quote }}"
                </p>
              </div>

              <!-- Client Info & Project Thumbnail -->
              <div class="d-flex align-items-center gap-3 pt-3 border-top border-secondary border-opacity-25">
                <div class="client-avatar-wrapper rounded-circle overflow-hidden flex-shrink-0">
                  <img [src]="item.image" [alt]="item.clientName" class="w-100 h-100 object-fit-cover">
                </div>
                <div>
                  <h6 class="text-white fw-bold mb-0">
                    {{ t.isAmharic() ? item.clientNameAm : item.clientName }}
                  </h6>
                  <small class="text-warning">
                    {{ t.isAmharic() ? item.clientRoleAm : item.clientRole }}
                  </small>
                </div>
              </div>

            </div>
          </div>
        }
      </div>

      <!-- Verified License Badge -->
      <div class="mb-5">
        <app-license-badge></app-license-badge>
      </div>

      <!-- Bottom Get In Touch CTA -->
      <div class="card-luxury p-4 p-md-5 text-center">
        <h3 class="text-white fw-bold mb-2">
          {{ t.isAmharic() ? 'ከእኛ ጋር በመስራት የቦታዎን ውበት ይጀምሩ' : 'Experience Our Turnkey Craftsmanship Firsthand' }}
        </h3>
        <p class="text-light-sub max-w-700 mx-auto mb-4">
          {{ t.isAmharic() 
              ? 'በአዲስ አበባ እና በዙሪያዋ ለሚገኙ የፊኒሺንግ ስራዎች ከባለሙያ ኢንጂነሮቻችን ጋር ይወያዩ።' 
              : 'Our project team is ready to inspect your site, provide 3D visual concepts, and deliver exceptional finishing execution.' }}
        </p>
        <div class="d-flex flex-wrap justify-content-center gap-3">
          <a routerLink="/contact" class="btn btn-primary-orange px-4 py-3">
            <i class="bi bi-chat-dots-fill me-2"></i>
            {{ t.t('btn.contactUs') }}
          </a>
          <a href="https://wa.me/251910900931" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp px-4 py-3">
            <i class="bi bi-whatsapp me-2"></i>
            {{ t.t('btn.chatWhatsapp') }}
          </a>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .max-w-700 {
      max-width: 700px;
    }
    .client-avatar-wrapper {
      width: 48px;
      height: 48px;
      border: 2px solid var(--color-primary);
    }
    .quote-text {
      font-style: italic;
      line-height: 1.6;
    }
    .text-light-sub {
      color: #CBD5E1;
    }
  `]
})
export class TestimonialsComponent {
  readonly t = inject(TranslationService);

  readonly testimonials: Testimonial[] = [
    {
      id: 'test-bulbula',
      clientName: 'Ato Henok Tadesse',
      clientNameAm: 'አቶ ሄኖክ ታደሰ',
      clientRole: 'Villa Owner',
      clientRoleAm: 'የቪላው ባለቤት',
      project: 'Bulbula Mazoria Villa',
      projectAm: 'ቡልቡላ ማዞሪያ ቪላ',
      rating: 5,
      image: '/images/pages/page-06.jpg',
      quote: 'Zener Home completely transformed our villa in Bulbula. The pergola terrace, ambient gypsum lighting, and custom kitchen exceeded our highest expectations. Truly turnkey!',
      quoteAm: 'ዚነር ሆም በቡልቡላ ማዞሪያ የሚገኘውን ቪላችንን በሚያስደንቅ ሁኔታ አጠናቆ አስረክቦናል። የቴራስ ፐርጎላው፣ የጣሪያው መብራቶችና የወጥ ቤት ካቢኔቶቹ ጥራት እጅግ የላቀ ነው።',
      year: '2025'
    },
    {
      id: 'test-menanda',
      clientName: 'Menanda Hotel Management',
      clientNameAm: 'የመናንዳ ሆቴል አስተዳደር',
      clientRole: 'Hospitality Director',
      clientRoleAm: 'የሆቴል ዳይሬክተር',
      project: 'Menanda Hotel (Bishoftu)',
      projectAm: 'መናንዳ ሆቴል (ቢሾፍቱ)',
      rating: 5,
      image: '/images/pages/page-08.jpg',
      quote: 'Executing a multi-story hotel with a grand banquet hall requires extreme engineering precision. Zener Home delivered on time and respected our commercial opening schedule.',
      quoteAm: 'ባለብዙ ፎቅ ሆቴል እና ታላቁን የሰርግ አዳራሽ በከፍተኛ ጥራትና በታቀደው ጊዜ መሰረት ሰርተው አስረክበውናል። ለሆቴል ስራቸው ምስጋናችን የላቀ ነው።',
      year: '2024'
    },
    {
      id: 'test-mahi',
      clientName: 'W/ro Mahlet Solomon',
      clientNameAm: 'ወ/ሮ ማህሌት ሰለሞን',
      clientRole: 'Spa Founder & Owner',
      clientRoleAm: 'የስፓና ሳሎኑ ባለቤት',
      project: 'Mahi Spa & Beauty Salon',
      projectAm: 'ማሂ ስፓ እና የውበት ሳሎን',
      rating: 5,
      image: '/images/pages/page-10.jpg',
      quote: 'The custom reception desk and soothing ambiance created by Zener Home gave our salon a 5-star luxury identity. Our clients constantly compliment the interior woodwork.',
      quoteAm: 'የተሰራው የሪሴፕሽን ጠረጴዛ፣ የእንጨት መደርደሪያዎች እና የተረጋጋው የመብራት ዲዛይን ለሳሎናችን ልዩ ድምቀት ሰጥቶታል። ደንበኞቻችን ሁልጊዜ ያደንቁታል።',
      year: '2024'
    },
    {
      id: 'test-ebc',
      clientName: 'Project Management Team',
      clientNameAm: 'የፕሮጀክት አስተባባሪ ቡድን',
      clientRole: 'Facilities Coordination',
      clientRoleAm: 'የህንፃ አስተባባሪ',
      project: 'EBC Headquarters Lobby',
      projectAm: 'የኢቢሲ ዋና ህንፃ ሎቢ',
      rating: 5,
      image: '/images/pages/page-11.jpg',
      quote: 'Handling institutional atrium finishing demands strict adherence to specifications. Zener Home demonstrated seasoned craftsmanship and safety discipline on-site.',
      quoteAm: 'የዋናው ሎቢና የአትሪየም ፊኒሺንግ ስራዎች በተሰጠው የንድፍ መስፈርት መሰረት በከፍተኛ የባለሙያ ብቃት ተከናውነዋል።',
      year: '2025'
    },
    {
      id: 'test-chichinia',
      clientName: 'Dr. Yared Bekele',
      clientNameAm: 'ዶ/ር ያሬድ በቀለ',
      clientRole: 'Residence Owner',
      clientRoleAm: 'የመኖሪያ ቪላ ባለቤት',
      project: 'Chichinia Area Residential',
      projectAm: 'ቺቺኒያ የመኖሪያ ቪላ',
      rating: 5,
      image: '/images/pages/page-04.jpg',
      quote: 'The double-height chandelier ceiling and custom bedroom fluted wood headboard are breathtaking. Professional supervision and genuine transparent contract from day one.',
      quoteAm: 'ባለ ሁለት ፎቅ ከፍታ ያለው የሳሎን ጣሪያ እና የመኝታ ቤቱ የእንጨት ዲዛይን እጅግ ውብ ነው። ከጅምሩ እስከ ርክክብ በታማኝነትና በቅንነት ሰርተዋል።',
      year: '2024'
    },
    {
      id: 'test-addisu',
      clientName: 'Ato Daniel Girma',
      clientNameAm: 'አቶ ዳንኤል ግርማ',
      clientRole: 'Apartment Developer',
      clientRoleAm: 'የአፓርትመንት ገንቢ',
      project: 'Addisu Gebeya Apartment',
      projectAm: 'አዲሱ ገበያ አፓርትመንት',
      rating: 5,
      image: '/images/pages/page-05.jpg',
      quote: 'From exterior weatherproof silicone coating to interior units and robust metal entrance gate, Zener Home delivered complete turnkey reliability for all our tenants.',
      quoteAm: 'የአፓርትመንቱን የውጪ ቀለም፣ የደረጃ መከላከያዎች እና የመግቢያ በሮች በጥራት አጠናቀው አስረክበውናል። በስራቸው በጣም ረክተናል።',
      year: '2023'
    }
  ];
}

