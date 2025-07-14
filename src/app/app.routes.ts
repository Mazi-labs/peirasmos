import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth-guard';
import { PublicLayout } from './layouts/public-layout/public-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/public/home/home').then((m) => m.Home),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/public/about/about').then((m) => m.About),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/public/contact/contact').then((m) => m.Contact),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/auth/login/login').then((m) => m.Login),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./pages/auth/signup/signup').then((m) => m.Signup),
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./pages/auth/forgot-password/forgot-password').then(
            (m) => m.ForgotPassword
          ),
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import('./pages/auth/reset-password/reset-password').then(
            (m) => m.ResetPassword
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    component: AuthLayout,
    canActivate: [authGuard],
    children: [
      {
        path: 'dash',
        loadComponent: () =>
          import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
