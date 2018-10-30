
import { Routes } from '@angular/router';

import { QuickRefComponent } from './quick-reference.component';
import { CombatQRFComponent } from './combat-quick-reference/combat-qrf.component';

export const QuickReferenceRoutes: Routes = [
    {
        path: 'quick-reference',
        component: QuickRefComponent,
        children: [
            { path: 'test', component: CombatQRFComponent },
            { path: 'test2', component: CombatQRFComponent }
        ]
    },
    {
        path: 'quick-reference/combat',
        component: CombatQRFComponent
    }
];
