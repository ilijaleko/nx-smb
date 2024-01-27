import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SharedPostsActions } from './shared-posts.actions';
import { SharedPostsService } from '../../../shared/services/shared-posts.service';
import { catchError, map, of, switchMap } from 'rxjs';

export const saveSharedPost = createEffect(
  (
    actions$ = inject(Actions),
    sharedPostsService = inject(SharedPostsService)
  ) => {
    return actions$.pipe(
      ofType(SharedPostsActions.saveSharedPost),
      switchMap(({ sharedPost }) => {
        return sharedPostsService.saveSharedPost(sharedPost).pipe(
          map((sharedPost) =>
            SharedPostsActions.saveSharedPostSuccess({ sharedPost })
          ),
          catchError((error) =>
            of(SharedPostsActions.saveSharedPostFailure({ error }))
          )
        );
      })
    );
  },
  { functional: true }
);
