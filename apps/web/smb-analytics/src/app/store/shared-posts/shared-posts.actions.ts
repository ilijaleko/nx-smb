import { createActionGroup, props } from '@ngrx/store';
import { ISharedPost } from '../../../shared/interfaces/shared-post.interface';

export const SharedPostsActions = createActionGroup({
  source: 'Shared Posts API',
  events: {
    loadSharedPosts: props<{ sharedPosts: ISharedPost[] }>(),
    loadSharedPostsSuccess: props<{ sharedPosts: ISharedPost[] }>(),
    loadSharedPostsFailure: props<{ error: string }>(),

    loadSharedPost: props<{ sharedPost: ISharedPost }>(),
    loadSharedPostSuccess: props<{ sharedPost: ISharedPost }>(),
    loadSharedPostFailure: props<{ error: string }>(),

    saveSharedPost: props<{ sharedPost: ISharedPost }>(),
    saveSharedPostSuccess: props<{ sharedPost: ISharedPost }>(),
    saveSharedPostFailure: props<{ error: string }>(),
  },
});
