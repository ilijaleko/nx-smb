import { createFeature, createReducer, on } from '@ngrx/store';
import { ISharedPost } from '../../../shared/interfaces/shared-post.interface';
import { SharedPostsActions } from './shared-posts.actions';

interface SharedPostState {
  sharedPosts: ISharedPost[];
  sharedPost: ISharedPost | null;
  error: string | null;
}

const initialState: SharedPostState = {
  sharedPosts: [],
  sharedPost: null,
  error: null,
};

const reducer = createReducer(
  initialState,
  on(SharedPostsActions.loadSharedPosts, (state) => ({
    ...state,
    error: null,
  })),
  on(SharedPostsActions.loadSharedPostsSuccess, (state, { sharedPosts }) => ({
    ...state,
    sharedPosts,
  })),
  on(SharedPostsActions.loadSharedPostsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(SharedPostsActions.loadSharedPost, (state) => ({
    ...state,
    error: null,
  })),
  on(SharedPostsActions.loadSharedPostSuccess, (state, { sharedPost }) => ({
    ...state,
    sharedPost,
  })),
  on(SharedPostsActions.loadSharedPostFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(SharedPostsActions.saveSharedPost, (state) => ({
    ...state,
    error: null,
  })),
  on(SharedPostsActions.saveSharedPostSuccess, (state, { sharedPost }) => ({
    ...state,
    sharedPost,
  })),
  on(SharedPostsActions.saveSharedPostFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export const sharedPostsFeature = createFeature({
  name: 'sharedPosts',
  reducer,
});
