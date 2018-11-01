
import { Routes } from '@angular/router';

import { QuickRefComponent } from './quick-reference.component';
import { CombatQRFComponent } from './combat-quick-reference/combat-qrf.component';

export const QuickReferenceRoutes: Routes = [
    {
        path: 'quick-reference',
        children: [
            { path: '', component: QuickRefComponent },
            { path: 'combat', component: CombatQRFComponent }
        ]
    }
];

export const QuickReferenceMenu = [
    {
        path: 'quick-reference',
        name: 'Quick Reference',
        children: [
            {
                path: 'combat',
                name: 'Combat',
                base: true
            }
        ]
    }
];
