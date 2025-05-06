import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ROOTROUTES } from './root.routes';
import { provideHttpClient } from '@angular/common/http';

export const rootConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(ROOTROUTES),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(FormsModule),
    importProvidersFrom(CommonModule),
  ]
};
