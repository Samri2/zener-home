import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <div class="app-layout d-flex flex-column min-vh-100">
      <app-navbar></app-navbar>
      
      <main class="flex-grow-1">
        <router-outlet></router-outlet>
      </main>

      <app-footer></app-footer>

      <!-- Floating WhatsApp Quick Action Button -->
      <a href="https://wa.me/251910900931?text=Hello%20Zener%20Home%2C%20I%20have%20an%20inquiry%20regarding%20finishing%20and%20furniture." 
         target="_blank" 
         rel="noopener noreferrer" 
         class="floating-whatsapp-btn d-flex align-items-center justify-content-center shadow-lg"
         title="Chat on WhatsApp (0910 900 931)">
        <i class="bi bi-whatsapp fs-3"></i>
      </a>
    </div>
  `,
  styles: [`
    .app-layout {
      position: relative;
    }
    .floating-whatsapp-btn {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: #25D366;
      color: #FFFFFF;
      z-index: 1040;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      border: 2px solid rgba(255, 255, 255, 0.2);
    }
    .floating-whatsapp-btn:hover {
      background: #20BA5A;
      color: #FFFFFF;
      transform: scale(1.1) translateY(-3px);
      box-shadow: 0 10px 25px rgba(37, 211, 102, 0.5);
    }
  `]
})
export class AppComponent {}

