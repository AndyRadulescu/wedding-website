import {APP_INITIALIZER, ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {routes} from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@ngneat/transloco';

const initialize = () => {
  return () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDUxOuD0l6dDE4qT-ullBT9xCZY4spbm5w",
      authDomain: "wedding-website-6365a.firebaseapp.com",
      projectId: "wedding-website-6365a",
      storageBucket: "wedding-website-6365a.appspot.com",
      messagingSenderId: "978884966792",
      appId: "1:978884966792:web:c271201ea166363d7e223d",
      measurementId: "G-CXD39TTK9R"
    };

// Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: initialize,
      multi: true,
    }, provideHttpClient(), provideTransloco({
        config: {
          availableLangs: ['en', 'de', 'ro'],
          defaultLang: 'en',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
      })
  ]
};
