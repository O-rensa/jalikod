/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { RootComponent } from './root.component';
import { rootConfig } from './root.config';

bootstrapApplication(RootComponent, rootConfig)
  .catch((err) => console.error(err));
