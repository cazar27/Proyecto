import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorHandlerInterceptor } from './core/interceptor/error-handler.interceptor';
import { authInterceptorProvider } from './core/interceptor/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers:
    [
      provideRouter(routes, withComponentInputBinding()),
      provideHttpClient(withFetch(),withInterceptors([authInterceptorProvider,errorHandlerInterceptor])),
      provideClientHydration(),
      provideAnimations(),
      importProvidersFrom(MatNativeDateModule),
      provideAnimationsAsync()
    ]
};
