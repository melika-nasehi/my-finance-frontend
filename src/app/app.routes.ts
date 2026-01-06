import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'transactions',
    loadComponent: () => import('./pages/transactions/transactions').then(m => m.Transactions)
  },
  {
    path: 'accounts',
    loadComponent: () => import('./pages/account/account').then(m => m.Account)
  },
  {
    path: 'plans',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'configuration',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  // مسیر پیش‌فرض
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // مسیر برای لینک‌های اشتباه
  { path: '**', redirectTo: 'home' }
];