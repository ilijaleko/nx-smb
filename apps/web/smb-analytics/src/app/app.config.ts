import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '../shared/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
    provideStore(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: import.meta.env.NG_APP_FIREBASE_API_KEY,
          authDomain: import.meta.env.NG_APP_FIREBASE_AUTH_DOMAIN,
          projectId: import.meta.env.NG_APP_FIREBASE_PROJECT_ID,
          storageBucket: import.meta.env.NG_APP_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: import.meta.env
            .NG_APP_FIREBASE_MESSAGING_SENDER_ID,
          appId: import.meta.env.NG_APP_FIREBASE_APP_ID,
          measurementId: import.meta.env.NG_APP_FIREBASE_MEASUREMENT_ID,
        })
      ),
      provideAuth(() => getAuth())
    ),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
};
