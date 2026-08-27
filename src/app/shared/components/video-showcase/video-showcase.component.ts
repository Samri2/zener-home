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
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
        <div>
          <span class="badge gradient-badge px-3 py-1 text-uppercase mb-2">
            <i class="bi bi-play-circle-fill text-warning me-1"></i>
            {{ t.isAmharic() ? 'የስራ ቦታ ቪዲዮዎች' : 'On-Site Video Walkthroughs' }}
          </span>
          <h2 class="text-white fw-bold mb-1">
            {{ t.isAmharic() ? 'የተሰሩ ስራዎች እና ሪልስ (Reels)' : 'Featured Project Video Reels' }}
          </h2>
          <p class="text-light-sub mb-0">
            {{ t.isAmharic() ? 'በቀጥታ ከስራ ቦታ የተቀረጹ የፊኒሺንግ እና የፈርኒቸር ዝግጅት ቪዲዮዎች' : 'Real site transformation videos, TV wall fittings, and ceiling finishing' }}
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
              <div class="position-relative video-thumbnail-container overflow-hidden cursor-pointer" (click)="activeVideo.set(video)">
                <img [src]="video.thumbnail" [alt]="video.title" class="img-fluid w-100 video-thumb-img object-fit-cover">
                
                <!-- Dark Gradient Overlay -->
                <div class="video-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="badge bg-dark bg-opacity-75 text-warning border border-secondary border-opacity-50 small">
                      {{ t.isAmharic() ? video.categoryAm : video.category }}
                    </span>
                    <span class="badge bg-black bg-opacity-75 text-white small">
                      <i class="bi bi-camera-video me-1"></i> {{ video.duration }}
                    </span>
                  </div>

                  <!-- Central Play Button Trigger -->
                  <button type="button" class="play-btn-circle mx-auto d-flex align-items-center justify-content-center border-0 shadow" aria-label="Play video">
                    <i class="bi bi-play-fill text-white fs-1 ms-1"></i>
                  </button>

                  <div class="small text-white text-shadow-sm d-flex align-items-center gap-1">
                    <i class="bi bi-geo-alt-fill text-warning"></i> {{ video.location }}
                  </div>
                </div>
              </div>

              <!-- Content info -->
              <div class="p-3 p-sm-4 d-flex flex-column justify-content-between flex-grow-1">
                <div>
                  <h5 class="text-white fw-bold mb-2">
                    {{ t.isAmharic() ? video.titleAm : video.title }}
                  </h5>
                  <p class="text-light-sub small mb-3">
                    {{ t.isAmharic() ? video.descriptionAm : video.description }}
                  </p>
                </div>

                <div class="pt-2 border-top border-secondary border-opacity-25 d-flex gap-2">
                  <button type="button" class="btn btn-sm btn-primary-orange flex-grow-1 d-flex align-items-center justify-content-center gap-1" (click)="activeVideo.set(video)">
                    <i class="bi bi-play-circle"></i>
                    <span>{{ t.isAmharic() ? 'ቪዲዮውን ይመልከቱ' : 'Watch Video' }}</span>
                  </button>
                  <a [href]="video.fbVideoUrl" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-light d-flex align-items-center justify-content-center" title="Facebook Reel">
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
              <h5 class="text-white fw-bold mb-0">
                {{ t.isAmharic() ? activeVideo()?.titleAm : activeVideo()?.title }}
              </h5>
              <button type="button" class="btn-close-custom" (click)="activeVideo.set(null)">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>

            <!-- Video Player -->
            <div class="video-player-container rounded-3 overflow-hidden bg-black mb-3">
              <video [src]="activeVideo()?.videoSrc" controls autoplay class="w-100 h-100"></video>
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
      height: 230px;
      background: #000;
    }
    .video-thumb-img {
      height: 230px;
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
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: rgba(232, 106, 23, 0.9);
      box-shadow: 0 0 25px rgba(232, 106, 23, 0.7);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .play-btn-circle:hover {
      background: var(--color-primary-light);
      transform: scale(1.15);
      box-shadow: 0 0 35px rgba(232, 106, 23, 0.9);
    }
    .modal-dialog-custom {
      max-width: 800px;
      width: 100%;
    }
    .video-player-container {
      max-height: 460px;
    }
    .video-player-container video {
      max-height: 460px;
      object-fit: contain;
    }
    .btn-close-custom {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #FFF;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .text-light-sub {
      color: #CBD5E1;
    }
    .text-shadow-sm {
      text-shadow: 0 1px 3px rgba(0,0,0,0.8);
    }
  `]
})
export class VideoShowcaseComponent {
  readonly t = inject(TranslationService);
  readonly activeVideo = signal<VideoItem | null>(null);

  readonly videos: VideoItem[] = [
    {
      id: 'vid-tv-wall',
      title: 'Luxury WPC & Fluted Wall TV Unit Installation',
      titleAm: 'ዘመናዊ የደብሊውፒሲ እና የእንጨት ቲቪ ግድግዳ ገጠማ',
      category: 'Living & Woodwork',
      categoryAm: 'የሳሎን እና የእንጨት ስራ',
      location: 'Bole Bulbula Site',
      thumbnail: '/images/projects/site-01/photo-01.jpg',
      duration: 'Reel / 0:58',
      videoSrc: '/videos/site-video-01.mp4',
      fbVideoUrl: 'https://web.facebook.com/zenerfinishing',
      description: 'Step-by-step assembly of fluted timber panels, LED channels, and cantilevered floating TV drawers.',
      descriptionAm: 'የእንጨት ፓነሎች፣ የኤልኢዲ መብራቶችና ተንሳፋፊ መሳቢያዎች አገጣጠም ሂደት።'
    },
    {
      id: 'vid-gypsum-lighting',
      title: 'Architectural False Ceiling & Magnetic Track Lights',
      titleAm: 'የጂፕሰም ጣሪያ እና ዘመናዊ መግነጢሳዊ መብራቶች',
      category: 'Gypsum & Electrical',
      categoryAm: 'የጂፕሰም እና ኤሌክትሪክ ስራ',
      location: 'Project Site 8 Villa',
      thumbnail: '/images/projects/site-08/photo-01.jpg',
      duration: 'Video / 1:45',
      videoSrc: '/videos/site-video-02.mp4',
      fbVideoUrl: 'https://web.facebook.com/zenerfinishing',
      description: 'On-site gypsum ceiling craftsmanship with seamless cove channels and modern magnetic track lighting.',
      descriptionAm: 'የጂፕሰም ጣሪያ አሰራር እና ዘመናዊ የትራክ መብራቶች ዝርጋታ።'
    },
    {
      id: 'vid-kitchen-handover',
      title: 'Modern Modular Kitchen Cabinetry Handover',
      titleAm: 'የተሟላ ዘመናዊ የወጥ ቤት ካቢኔት ርክክብ',
      category: 'Custom Kitchen',
      categoryAm: 'የወጥ ቤት ስራ',
      location: 'Project Site 3 Duplex',
      thumbnail: '/images/projects/site-03/photo-01.jpg',
      duration: 'Reel / 1:12',
      videoSrc: '/videos/site-video-03.mp4',
      fbVideoUrl: 'https://web.facebook.com/zenerfinishing',
      description: 'Completed kitchen walkthrough showcasing quartz worktops, soft-close hardware, and ambient undertank lighting.',
      descriptionAm: 'የኳርትዝ ድንጋይ፣ የጀርመን መገጣጠሚያዎችና የሚያማምሩ ካቢኔቶች የተሟላ ርክክብ።'
    }
  ];
}
