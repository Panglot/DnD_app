import { Route } from '@angular/router';

import { HomeComponent } from './home.component';

export const HomeRoutes: Route[] = [
      { path: '', component: HomeComponent }
];

export const HomeMenu = [
      { path: '', name: 'Home', base: true }
];
