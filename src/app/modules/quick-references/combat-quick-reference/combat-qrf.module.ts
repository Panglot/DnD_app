import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombatQRFComponent } from './combat-qrf.component';

@NgModule({
    declarations: [ CombatQRFComponent ],
    exports: [ CombatQRFComponent ],
    imports: [ CommonModule ]
})
export class CombatQRFModule {}
