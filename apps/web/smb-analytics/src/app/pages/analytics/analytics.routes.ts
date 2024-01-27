import { Routes } from '@angular/router';

export const ANALYTICS_ROUTES: Routes = [
  // TODO: Redirect is temporary until we have analytics dashboard
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shared-posts',
  },
  {
    path: 'shared-posts',
    loadChildren: () =>
      import('./shared-posts/shared-posts.routes').then(
        (m) => m.SHARED_POSTS_ROUTES
      ),
  },
];
