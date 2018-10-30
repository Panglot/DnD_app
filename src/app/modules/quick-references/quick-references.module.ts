import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombatQRFModule } from './combat-quick-reference/combat-qrf.module';
import { QuickRefComponent } from './quick-reference.component';

@NgModule({
    declarations: [ QuickRefComponent ],
    imports: [
        CommonModule,
        CombatQRFModule
    ],
    exports: [ CombatQRFModule, QuickRefComponent ]
})
export class QuickReferencesModule {}
