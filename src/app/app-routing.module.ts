import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './modules/home/home-routing.module';
import { QuickReferenceRoutes } from './modules/quick-references/quick-reference-routing.module';

const routes: Routes = [
  ...QuickReferenceRoutes,
  ...HomeRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
