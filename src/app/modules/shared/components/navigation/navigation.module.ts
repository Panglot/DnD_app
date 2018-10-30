import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [ NavigationComponent ],
    imports: [ MatMenuModule, MatButtonModule ],
    exports: [ NavigationComponent ]

})
export class NavigationModule {}
