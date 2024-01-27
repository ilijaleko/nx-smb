import { Routes } from '@angular/router';

export const SHARED_POSTS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./shared-post-list/shared-post-list.component').then(
        (m) => m.SharedPostListComponent
      ),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./shared-post-details/shared-post-details.component').then(
        (m) => m.SharedPostDetailsComponent
      ),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./shared-post-create/shared-post-create.component').then(
        (m) => m.SharedPostCreateComponent
      ),
  },
];
