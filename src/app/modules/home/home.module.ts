import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [ HomeComponent ],
    exports: [ HomeComponent ],
    imports: [ CommonModule, MatListModule, MatButtonModule ],
    providers: [],
    bootstrap: []
  })
  export class HomeModule {}
