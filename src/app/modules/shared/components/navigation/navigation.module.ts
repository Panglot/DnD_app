import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ NavigationComponent ],
    imports: [ MatMenuModule, MatButtonModule, CommonModule ],
    exports: [ NavigationComponent ]

})
export class NavigationModule {}
