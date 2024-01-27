import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import * as sharedPostsEffects from './shared-posts/shared-posts.effects';

import { sharedPostsFeature } from './shared-posts/shared-posts.store';

const storeEffects = [sharedPostsEffects];
const storeFeatures = [sharedPostsFeature];

export const provideStoreProviders = () => [
  ...storeEffects.map((storeEffect) => provideEffects(storeEffect)),
  ...storeFeatures.map((storeFeature) => provideState(storeFeature)),
];
