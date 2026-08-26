import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Zener Home | Finishing Construction & Custom Furniture (ዚነር ሆም)'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Services | Zener Home Finishing & Interior'
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'Projects & Portfolio | Zener Home Finishing'
  },
  {
    path: 'furniture',
    loadComponent: () => import('./pages/furniture/furniture.component').then(m => m.FurnitureComponent),
    title: 'Custom Furniture & Cabinetry | Zener Home'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us & Licenses | Zener Home P.L.C.'
  },
  {
    path: 'testimonials',
    loadComponent: () => import('./pages/testimonials/testimonials.component').then(m => m.TestimonialsComponent),
    title: 'Client Testimonials | Zener Home P.L.C.'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact & Get in Touch | Zener Home P.L.C.'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
