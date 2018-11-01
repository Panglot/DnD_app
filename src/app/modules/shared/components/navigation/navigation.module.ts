import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
    declarations: [ NavigationComponent ],
    imports: [
        CommonModule,
        AppRoutingModule,
        MatMenuModule,
        MatButtonModule
    ],
    exports: [ NavigationComponent ]

})
export class NavigationModule {}
