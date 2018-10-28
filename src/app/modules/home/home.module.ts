import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
    imports: [],
    providers: [],
    bootstrap: []
  })
  export class HomeModule {}
