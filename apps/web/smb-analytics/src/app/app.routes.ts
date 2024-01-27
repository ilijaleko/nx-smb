import { Route } from '@angular/router';
import {
  redirectUnauthorizedTo,
  canActivate,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

const redirectToLogin = redirectUnauthorizedTo(['auth']);
const redirectToDashboard = redirectLoggedInTo(['dashboard']);

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    ...canActivate(() => redirectToLogin),
  },
  {
    path: 'analytics',
    loadChildren: () =>
      import('./pages/analytics/analytics.routes').then(
        (m) => m.ANALYTICS_ROUTES
      ),
    ...canActivate(() => redirectToLogin),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((m) => m.AUTH_ROUTES),
    ...canActivate(() => redirectToDashboard),
  },
];
