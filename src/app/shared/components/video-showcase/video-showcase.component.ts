import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../core/services/translation.service';

export interface VideoItem {
  id: string;
  title: string;
  titleAm: string;
  category: string;
  categoryAm: string;
  location: string;
  thumbnail: string;
  videoSrc: string;
  duration: string;
  fbVideoUrl: string;
  description: string;
  descriptionAm: string;
}

@Component({
  selector: 'app-video-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="video-showcase-wrapper">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
        <div>
          <span class="badge gradient-badge px-3 py-1 text-uppercase mb-2">
            <i class="bi bi-play-circle-fill text-warning me-1"></i>
            {{ t.isAmharic() ? 'የስራ ቦታ ቪዲዮዎች' : 'On-Site Video Walkthroughs' }}
          </span>
          <h2 class="text-white fw-bold mb-1">
            {{ t.isAmharic() ? 'የተሰሩ ስራዎች እና ሪልስ (Reels)' : 'Featured Project Video Reels & Walkthroughs' }}
          </h2>
          <p class="text-light-sub mb-0">
            {{ t.isAmharic() ? 'በቀጥታ ከስራ ቦታ የተቀረጹ የፊኒሺንግ እና የፈርኒቸር ዝግጅት ቪዲዮዎች' : 'Real on-site execution footage, TV wall assembly, false ceiling LED work, and kitchen fittings' }}
          </p>
        </div>
        <a href="https://web.facebook.com/zenerfinishing" target="_blank" rel="noopener noreferrer" class="btn btn-outline-orange align-self-start align-self-md-auto">
          <i class="bi bi-facebook me-1"></i>
          {{ t.isAmharic() ? 'ሁሉንም ቪዲዮዎች በፌስቡክ ይመልከቱ' : 'Watch All on Facebook' }}
        </a>
      </div>

      <!-- Video Grid -->
      <div class="row g-4">
        @for (video of videos; track video.id) {
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card-luxury h-100 overflow-hidden d-flex flex-column justify-content-between">
              
              <!-- Video Preview / Thumbnail with Play Button -->
              <div class="position-relative video-thumbnail-container overflow-hidden cursor-pointer" (click)="openVideoPlayer(video)">
                <img [src]="video.thumbnail" [alt]="video.title" class="img-fluid w-100 video-thumb-img object-fit-cover">
                
                <!-- Dark Gradient Overlay -->
                <div class="video-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="badge bg-dark bg-opacity-75 text-warning border border-secondary border-opacity-50 small">
                      {{ t.isAmharic() ? video.categoryAm : video.category }}
                    </span>
                    <span class="badge bg-black bg-opacity-75 text-white small">
                      <i class="bi bi-play-circle-fill text-warning me-1"></i> {{ video.duration }}
                    </span>
                  </div>

                  <!-- Central Play Button Trigger -->
                  <div class="play-btn-circle mx-auto d-flex align-items-center justify-content-center">
                    <i class="bi bi-play-fill text-white fs-1 ms-1"></i>
                  </div>

                  <div class="small text-white text-shadow-sm d-flex align-items-center gap-1">
                    <i class="bi bi-geo-alt-fill text-warning"></i> {{ video.location }}
                  </div>
                </div>
              </div>

              <!-- Content info -->
              <div class="p-3 p-sm-4 d-flex flex-column justify-content-between flex-grow-1">
                <div>
                  <h5 class="text-white fw-bold mb-2 fs-6 fs-md-5">
                    {{ t.isAmharic() ? video.titleAm : video.title }}
                  </h5>
                  <p class="text-light-sub small mb-3">
                    {{ t.isAmharic() ? video.descriptionAm : video.description }}
                  </p>
                </div>

                <div class="pt-2 border-top border-secondary border-opacity-25 d-flex gap-2">
                  <button type="button" class="btn btn-primary-orange btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-2" (click)="openVideoPlayer(video)">
                    <i class="bi bi-play-fill fs-5 lh-1"></i>
                    <span>{{ t.isAmharic() ? 'ቪዲዮውን ይመልከቱ' : 'Play Video' }}</span>
                  </button>
                  <a [href]="video.fbVideoUrl" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light btn-sm px-2" title="Open in Facebook">
                    <i class="bi bi-facebook"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        }
      </div>
    </div>

    <!-- Video Modal Player -->
    @if (activeVideo()) {
      <div class="custom-modal-overlay" (click)="closeVideoPlayer()">
        <div class="video-modal-dialog card-luxury p-2 p-sm-3 p-md-4 overflow-hidden" (click)="$event.stopPropagation()">
          
          <div class="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom border-secondary border-opacity-25">
            <div>
              <h5 class="text-white fw-bold mb-0 small fs-sm-6">
                {{ t.isAmharic() ? activeVideo()?.titleAm : activeVideo()?.title }}
              </h5>
              <small class="text-warning">{{ activeVideo()?.location }}</small>
            </div>
            <button type="button" class="btn-close-custom" (click)="closeVideoPlayer()" aria-label="Close">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>

          <!-- HTML5 Video Element -->
          <div class="video-wrapper rounded-3 overflow-hidden bg-black mb-3">
            <video [src]="activeVideo()?.videoSrc" 
                   controls 
                   autoplay 
                   playsinline 
                   class="w-100 h-100 object-fit-contain">
              Your browser does not support HTML5 video.
            </video>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2">
            <p class="text-light-sub small mb-0">
              {{ t.isAmharic() ? activeVideo()?.descriptionAm : activeVideo()?.description }}
            </p>
            <div class="d-flex gap-2">
              <a href="https://wa.me/251910900931" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm px-3 d-inline-flex align-items-center gap-1">
                <i class="bi bi-whatsapp"></i> {{ t.isAmharic() ? 'በዋትስአፕ ያነጋግሩን' : 'Inquire' }}
              </a>
              <button type="button" class="btn btn-outline-secondary btn-sm text-white px-3" (click)="closeVideoPlayer()">
                {{ t.t('btn.close') }}
              </button>
            </div>
          </div>

        </div>
      </div>
    }
  `,
  styles: [`
    .video-thumbnail-container {
      height: 230px;
      background: #000;
    }
    .video-thumb-img {
      height: 230px;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .card-luxury:hover .video-thumb-img {
      transform: scale(1.06);
    }
    .video-overlay {
      background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.88) 100%);
    }
    .play-btn-circle {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: rgba(232, 106, 23, 0.95);
      box-shadow: 0 0 25px rgba(232, 106, 23, 0.7);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .card-luxury:hover .play-btn-circle {
      background: var(--color-primary-light);
      transform: scale(1.12);
      box-shadow: 0 0 35px rgba(232, 106, 23, 0.9);
    }
    .cursor-pointer {
      cursor: pointer;
    }
    .text-light-sub {
      color: #CBD5E1;
    }
    .text-shadow-sm {
      text-shadow: 0 1px 3px rgba(0,0,0,0.8);
    }
    .video-modal-dialog {
      max-width: 800px;
      width: 100%;
      box-shadow: 0 25px 60px rgba(0,0,0,0.9), 0 0 30px rgba(232, 106, 23, 0.3);
    }
    .video-wrapper {
      max-height: 500px;
      min-height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .video-wrapper video {
      max-height: 500px;
    }
    .btn-close-custom {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #FFF;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .btn-close-custom:hover {
      background: rgba(232, 106, 23, 0.2);
      border-color: var(--color-primary);
      color: var(--color-primary-light);
    }
  `]
})
export class VideoShowcaseComponent {
  readonly t = inject(TranslationService);
  readonly activeVideo = signal<VideoItem | null>(null);

  readonly videos: VideoItem[] = [
    {
      id: 'vid-1',
      title: 'Luxury WPC & Fluted Wall TV Unit Installation',
      titleAm: 'ዘመናዊ የደብሊውፒሲ እና የእንጨት ቲቪ ግድግዳ ገጠማ',
      category: 'Living Room Woodwork',
      categoryAm: 'የሳሎን እና የእንጨት ስራ',
      location: 'Bole Bulbula Site',
      thumbnail: '/images/media/photo-01.jpg',
      videoSrc: '/videos/video-01.mp4',
      duration: '0:58',
      fbVideoUrl: 'https://web.facebook.com/zenerfinishing',
      description: 'On-site execution of vertical acoustic wood slats, integrated warm LED cove lighting, and floating console drawers.',
      descriptionAm: 'የእንጨት ፓነሎች፣ የኤልኢዲ መብራቶችና ተንሳፋፊ መሳቢያዎች አገጣጠም ሂደት።'
    },
    {
      id: 'vid-2',
      title: 'False Ceiling Gypsum & Magnetic Track Spotlight',
      titleAm: 'የጂፕሰም ጣሪያ እና ዘመናዊ መግነጢሳዊ መብራቶች',
      category: 'Gypsum & Electrical',
      categoryAm: 'የጂፕሰም እና ኤሌክትሪክ ስራ',
      location: 'Addis Ababa Residential Villa',
      thumbnail: '/images/media/photo-03.jpg',
      videoSrc: '/videos/video-02.mp4',
      duration: '0:35',
      fbVideoUrl: 'https://web.facebook.com/zenerfinishing',
      description: 'Precision gypsum board multi-tier ceiling construction with flush-mounted magnetic track spotlights.',
      descriptionAm: 'የጂፕሰም ጣሪያ አሰራር እና ዘመናዊ የትራክ መብራቶች ዝርጋታ።'
    },
    {
      id: 'vid-3',
      title: 'Modular Quartz Kitchen Cabinetry Turnkey Handover',
      titleAm: 'የተሟላ ዘመናዊ የወጥ ቤት ካቢኔት ርክክብ',
      category: 'Kitchen & Cabinetry',
      categoryAm: 'የወጥ ቤት ስራ',
      location: 'Bulbula Mazoria Villa',
      thumbnail: '/images/media/photo-55.jpg',
      videoSrc: '/videos/video-03.mp4',
      duration: '0:42',
      fbVideoUrl: 'https://web.facebook.com/zenerfinishing',
      description: 'Custom kitchen walkthrough showing premium quartz stone counters, soft-close hardware, and ambient undertank lighting.',
      descriptionAm: 'የኳርትዝ ድንጋይ፣ የጀርመን መገጣጠሚያዎችና የሚያማምሩ ካቢኔቶች የተሟላ ርክክብ።'
    },
    {
      id: 'vid-4',
      title: 'Master Bedroom Fluted Wood Accent & King Bed',
      titleAm: 'የዋና መኝታ ክፍል የእንጨት ዲዛይን እና የቅንጦት አልጋ',
      category: 'Master Bedroom',
      categoryAm: 'የመኝታ ክፍል ስራ',
      location: 'Chichinia Villa Site',
      thumbnail: '/images/media/photo-28.jpg',
      videoSrc: '/videos/video-04.mp4',
      duration: '1:15',
      fbVideoUrl: 'https://web.facebook.com/zenerfinishing',
      description: 'Floor-to-ceiling upholstered timber headboard with ambient backlit channels and matching cantilevered nightstands.',
      descriptionAm: 'የመኝታ ክፍል የእንጨት ዲዛይን፣ ተንሳፋፊ ኮሞዲኖዎች እና የኤልኢዲ መብራቶች።'
    },
    {
      id: 'vid-5',
      title: 'Floor-to-Ceiling Tinted Glass Sliding Wardrobe',
      titleAm: 'ዘመናዊ የመስታወት ተንሸራታች የልብስ ቁምሳጥን',
      category: 'Wardrobe Systems',
      categoryAm: 'የልብስ ቁምሳጥን',
      location: 'Addisu Gebeya Apartment',
      thumbnail: '/images/media/photo-30.jpg',
      videoSrc: '/videos/video-05.mp4',
      duration: '0:40',
      fbVideoUrl: 'https://web.facebook.com/zenerfinishing',
      description: 'Smoked glass wardrobe doors with motion-sensor interior illumination and organized jewelry shelving.',
      descriptionAm: 'የጭስ መስታወት ተንሸራታች በር እና የውስጥ ሴንሰር መብራቶች ያሉት ቁምሳጥን።'
    },
    {
      id: 'vid-6',
      title: 'Exterior Facade & Natural Stone Cladding',
      titleAm: 'የውጪ ግድግዳ እና የተፈጥሮ ድንጋይ ክላዲንግ',
      category: 'Exterior Facade',
      categoryAm: 'የውጪ ግድግዳ ስራ',
      location: 'Menanda Hotel & Villa',
      thumbnail: '/images/media/photo-50.jpg',
      videoSrc: '/videos/video-06.mp4',
      duration: '0:38',
      fbVideoUrl: 'https://web.facebook.com/zenerfinishing',
      description: 'Natural stone wall cladding installation and weather-resistant protective coatings.',
      descriptionAm: 'የተፈጥሮ ድንጋይ ግድግዳ እና የአየር ሁኔታ የሚቋቋም የውጪ ቀለም።'
    },
    {
      id: 'vid-7',
      title: 'Grand Banquet Ceiling & Hotel Finishing',
      titleAm: 'የሆቴል አዳራሽ የእንጨት ጣሪያ እና ፊኒሺንግ',
      category: 'Commercial Finishing',
      categoryAm: 'የሆቴልና ተቋማት ፊኒሺንግ',
      location: 'Menanda Hotel Bishoftu',
      thumbnail: '/images/media/photo-68.jpg',
      videoSrc: '/videos/video-07.mp4',
      duration: '0:28',
      fbVideoUrl: 'https://web.facebook.com/zenerfinishing',
      description: 'Acoustic coffered timber ceiling and luxury chandelier fitting in hotel banquet ballroom.',
      descriptionAm: 'የሆቴል አዳራሽ የእንጨት ኮፈርድ ጣሪያ እና የሻንደሊየር ገጠማ።'
    }
  ];

  openVideoPlayer(video: VideoItem): void {
    this.activeVideo.set(video);
  }

  closeVideoPlayer(): void {
    this.activeVideo.set(null);
  }
}
