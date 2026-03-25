import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.page')
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.page')
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects.page')
  },
  {
    path: 'projects/:slug',
    loadComponent: () => import('./features/project-detail/project-detail.page')
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services.page')
  },
  {
    path: 'courses',
    loadComponent: () => import('./features/courses/courses.page')
  },
  {
    path: 'gallery',
    loadComponent: () => import('./features/gallery/gallery.page')
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.page')
  },
  {
    path: 'insights',
    loadComponent: () => import('./features/insights/insights.page')
  },
  {
    path: '**',
    redirectTo: ''
  }
];
