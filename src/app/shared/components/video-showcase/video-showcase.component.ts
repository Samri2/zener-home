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
  duration: string;
  videoSrc: string;
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
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end gap-3 mb-3 mb-md-4">
        <div>
          <span class="badge gradient-badge px-3 py-1 text-uppercase mb-2">
            <i class="bi bi-play-circle-fill text-warning me-1"></i>
            {{ t.isAmharic() ? 'የስራ ቦታ ቪዲዮዎች' : 'On-Site Video Walkthroughs' }}
          </span>
          <h2 class="text-white fw-bold mb-1 fs-4 fs-md-2">
            {{ t.isAmharic() ? 'የተሰሩ ስራዎች እና ሪልስ (Reels)' : 'Featured Project Video Reels' }}
          </h2>
          <p class="text-light-sub small fs-md-6 mb-0 d-none d-sm-block">
            {{ t.isAmharic() ? 'በቀጥታ ከስራ ቦታ የተቀረጹ የቪላ፣ አፓርትመንትና ተቋማት ፊኒሺንግ ቪዲዮዎች' : 'Watch real site walkthroughs, false ceiling installations, TV walls, and luxury villa deliveries' }}
          </p>
        </div>
        <a href="https://web.facebook.com/zenerfinishing" target="_blank" rel="noopener noreferrer" class="btn btn-outline-orange btn-sm px-3 py-2">
          <i class="bi bi-facebook me-1"></i>
          {{ t.isAmharic() ? 'ፌስቡክ ላይ ይመልከቱ' : 'Watch on Facebook' }}
        </a>
      </div>

      <!-- Video Grid (2 cols mobile, 2 cols tablet, 3 cols desktop) -->
      <div class="row g-3 g-md-4">
        @for (video of videos; track video.id) {
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="card-luxury h-100 overflow-hidden d-flex flex-column justify-content-between">
              
              <!-- Video Preview / Thumbnail with Play Button -->
              <div class="position-relative video-thumbnail-container overflow-hidden cursor-pointer" (click)="activeVideo.set(video)">
                <img [src]="video.thumbnail" [alt]="video.title" class="img-fluid w-100 video-thumb-img object-fit-cover">
                
                <!-- Dark Gradient Overlay -->
                <div class="video-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-2 p-md-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="badge bg-dark bg-opacity-75 text-warning border border-secondary border-opacity-50 small font-xs">
                      {{ t.isAmharic() ? video.categoryAm : video.category }}
                    </span>
                    <span class="badge bg-black bg-opacity-75 text-white small font-xs">
                      <i class="bi bi-camera-video me-1"></i> {{ video.duration }}
                    </span>
                  </div>

                  <!-- Central Play Button Trigger -->
                  <button type="button" class="play-btn-circle mx-auto d-flex align-items-center justify-content-center border-0 shadow" aria-label="Play video">
                    <i class="bi bi-play-fill text-white fs-2 ms-1"></i>
                  </button>

                  <div class="small text-white text-shadow-sm d-flex align-items-center gap-1 font-xs">
                    <i class="bi bi-geo-alt-fill text-warning"></i> {{ video.location }}
                  </div>
                </div>
              </div>

              <!-- Content info -->
              <div class="p-3 d-flex flex-column justify-content-between flex-grow-1">
                <div>
                  <h5 class="text-white fw-bold mb-1 mb-md-2 fs-6 fs-md-5">
                    {{ t.isAmharic() ? video.titleAm : video.title }}
                  </h5>
                  <p class="text-light-sub small mb-2 text-truncate-2 d-none d-sm-block">
                    {{ t.isAmharic() ? video.descriptionAm : video.description }}
                  </p>
                </div>

                <div class="pt-2 border-top border-secondary border-opacity-25 d-flex gap-2">
                  <button type="button" class="btn btn-sm btn-primary-orange flex-grow-1 py-1 py-md-2 d-flex align-items-center justify-content-center gap-1 font-xs fs-sm-6" (click)="activeVideo.set(video)">
                    <i class="bi bi-play-circle"></i>
                    <span>{{ t.isAmharic() ? 'ቪዲዮ ክፈት' : 'Watch Video' }}</span>
                  </button>
                  <a [href]="video.fbVideoUrl" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-light d-flex align-items-center justify-content-center px-2" title="Facebook Reel">
                    <i class="bi bi-facebook"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        }
      </div>

      <!-- Video Player Modal -->
      @if (activeVideo()) {
        <div class="custom-modal-overlay" (click)="activeVideo.set(null)">
          <div class="modal-dialog-custom card-luxury p-3 p-md-4 overflow-hidden" (click)="$event.stopPropagation()">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h5 class="text-white fw-bold mb-0 fs-6 fs-md-5 text-truncate pe-2">
                {{ t.isAmharic() ? activeVideo()?.titleAm : activeVideo()?.title }}
              </h5>
              <button type="button" class="btn-close-custom flex-shrink-0" (click)="activeVideo.set(null)">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>

            <!-- Video Player -->
            <div class="video-player-container rounded-3 overflow-hidden bg-black mb-3">
              <video [src]="activeVideo()?.videoSrc" controls autoplay playsinline class="w-100 h-100 modal-video-tag"></video>
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <span class="text-warning small">
                <i class="bi bi-geo-alt-fill me-1"></i>{{ activeVideo()?.location }}
              </span>
              <a [href]="activeVideo()?.fbVideoUrl" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-orange">
                <i class="bi bi-facebook me-1"></i> Facebook
              </a>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .video-thumbnail-container {
      height: 180px;
      background: #000;
    }
    @media (min-width: 768px) {
      .video-thumbnail-container {
        height: 220px;
      }
    }
    .video-thumb-img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .cursor-pointer {
      cursor: pointer;
    }
    .card-luxury:hover .video-thumb-img {
      transform: scale(1.06);
    }
    .video-overlay {
      background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.85) 100%);
    }
    .play-btn-circle {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(232, 106, 23, 0.9);
      box-shadow: 0 0 20px rgba(232, 106, 23, 0.7);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @media (min-width: 768px) {
      .play-btn-circle {
        width: 56px;
        height: 56px;
      }
    }
    .play-btn-circle:hover {
      background: var(--color-primary-light);
      transform: scale(1.15);
      box-shadow: 0 0 30px rgba(232, 106, 23, 0.9);
    }
    .modal-dialog-custom {
      max-width: 820px;
      width: 100%;
    }
    .video-player-container {
      max-height: 450px;
    }
    .modal-video-tag {
      max-height: 450px;
      object-fit: contain;
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
    }
    .text-light-sub {
      color: var(--color-text-sub);
    }
    .text-shadow-sm {
      text-shadow: 0 1px 3px rgba(0,0,0,0.8);
    }
    .text-truncate-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .font-xs {
      font-size: 0.75rem !important;
    }
  `]
})
export class VideoShowcaseComponent {
  readonly t = inject(TranslationService);
  readonly activeVideo = signal<VideoItem | null>(null);

  readonly videos: VideoItem[] = [
    {
      id: 'vid-site-01',
      title: 'Project Site 1 - Villa False Ceiling & Ambient Light Walkthrough',
      titleAm: 'ፕሮጀክት ሳይት 1 - የቪላ ጂፕሰም ጣሪያ እና መብራቶች ቪዲዮ',
      category: 'Residential Villa',
      categoryAm: 'የመኖሪያ ቪላ',
      location: 'Addis Ababa Site 1',
      thumbnail: '/images/projects/site-01/photo-01.jpg',
      duration: 'Reel / 0:58',
      videoSrc: '/videos/site-video-01.mp4',
      fbVideoUrl: 'https://web.facebook.com/zenerfinishing',
      description: 'On-site walkthrough of multi-tier gypsum false ceilings, concealed 3000K warm LED channels, and solid wood door fittings.',
      descriptionAm: 'የተሟላ የጂፕሰም ጣሪያ፣ የኤሌክትሪክ መብራቶችና ዘመናዊ በሮች አሰራር ከስራ ቦታ።'
    },
    {
      id: 'vid-site-02',
      title: 'Project Site 2 - Contemporary Villa Living & TV Slat Wall',
      titleAm: 'ፕሮጀክት ሳይት 2 - የሳሎን ቲቪ ግድግዳ እና የጣሪያ ስራ',
      category: 'Living & Media Wall',
      categoryAm: 'የሳሎን ቲቪ ግድግዳ',
      location: 'Addis Ababa Site 2',
      thumbnail: '/images/projects/site-02/photo-01.jpg',
      duration: 'Video / 1:15',
      videoSrc: '/videos/site-video-02.mp4',
      fbVideoUrl: 'https://web.facebook.com/zenerfinishing',
      description: 'Living room acoustic timber slat wall installation with floating media console and polished large-format porcelain floors.',
      descriptionAm: 'የሳሎን ቲቪ ግድግዳ የእንጨት ስራ ከተንሳፋፊ ካቢኔት እና የሚያብረቀርቁ ወለሎች ጋር።'
    },
    {
      id: 'vid-site-03',
      title: 'Project Site 3 - Luxury Duplex Floating Stairs & Glass Railing',
      titleAm: 'ፕሮጀክት ሳይት 3 - የቅንጦት ዱፕሌክስ ተንሳፋፊ ደረጃ እና መስታወት',
      category: 'Duplex Villa',
      categoryAm: 'ባለ ሁለት ፎቅ ቪላ',
      location: 'Bole Bulbula Site 3',
      thumbnail: '/images/projects/site-03/photo-01.jpg',
      duration: 'Reel / 1:12',
      videoSrc: '/videos/site-video-03.mp4',
      fbVideoUrl: 'https://web.facebook.com/zenerfinishing',
      description: 'Cantilevered solid wood floating steps with 12mm frameless tempered glass balustrades and custom kitchen island.',
      descriptionAm: 'ተንሳፋፊ የእንጨት ደረጃዎች፣ የጸና የመስታወት መከላከያ እና ዘመናዊ የወጥ ቤት ካቢኔት።'
    },
    {
      id: 'vid-site-06',
      title: 'Project Site 6 - Grand Multi-Level Villa Facade & Magnetic Lights',
      titleAm: 'ፕሮጀክት ሳይት 6 - ባለብዙ ፎቅ ቪላ እና መግነጢሳዊ መብራቶች',
      category: 'Grand Residence',
      categoryAm: 'ታላቅ የመኖሪያ ቪላ',
      location: 'Lebu Site 6',
      thumbnail: '/images/projects/site-06/photo-01.jpg',
      duration: 'Video / 1:30',
      videoSrc: '/videos/site-video-04.mp4',
      fbVideoUrl: 'https://web.facebook.com/zenerfinishing',
      description: 'Facade stone cladding walkthrough, magnetic track lighting rail integration, and living room millwork.',
      descriptionAm: 'የውጪ ግድግዳ ፊኒሺንግ፣ ዘመናዊ መግነጢሳዊ የትራክ መብራቶች እና የሳሎን ካቢኔቶች።'
    },
    {
      id: 'vid-site-08',
      title: 'Project Site 8 - Flagship Villa Complex Turnkey Handover',
      titleAm: 'ፕሮጀክት ሳይት 8 - ዋና የቅንጦት ቪላ ኮምፕሌክስ የተሟላ ርክክብ',
      category: 'Flagship Villa',
      categoryAm: 'ዋና የቅንጦት ቪላ',
      location: 'Addis Ababa Site 8',
      thumbnail: '/images/projects/site-08/photo-01.jpg',
      duration: 'Video / 2:10',
      videoSrc: '/videos/site-video-05.mp4',
      fbVideoUrl: 'https://web.facebook.com/zenerfinishing',
      description: 'Flagship multi-unit turnkey handover showcasing bespoke kitchens, timber pergolas, and coffered ceilings.',
      descriptionAm: 'የተሟላ የቪላ ፊኒሺንግ ርክክብ፤ ዘመናዊ ኩሽና፣ የቴራስ ፐርጎላ እና የጣሪያ ጌጦች።'
    },
    {
      id: 'vid-ebc-atrium',
      title: 'Ethiopian Broadcasting Corporation (EBC) - Grand Lobby & Columns',
      titleAm: 'የኢትዮጵያ ብሮድካስቲንግ ኮርፖሬሽን (ኢቢሲ) - ሎቢ እና አትሪየም',
      category: 'Institutional / Commercial',
      categoryAm: 'መንግስታዊ / የንግድ ህንፃ',
      location: 'EBC Headquarters, Addis Ababa',
      thumbnail: '/images/projects/ebc/photo-01.jpg',
      duration: 'Reel / 1:45',
      videoSrc: '/videos/site-video-06.mp4',
      fbVideoUrl: 'https://web.facebook.com/zenerfinishing',
      description: 'Grand lobby atrium with circular column wood cladding, corporate reception counters, and acoustic linear baffles.',
      descriptionAm: 'የኢቢሲ ዋና ሎቢ፤ በእንጨት የተዋቡ አምዶች፣ የኮርፖሬት ሪሴፕሽን እና የጣሪያ አኮስቲክ ባፍሎች።'
    }
  ];
}
