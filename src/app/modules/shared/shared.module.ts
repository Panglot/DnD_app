import { NgModule } from '@angular/core';
import { NavigationModule } from './components/navigation/navigation.module';

@NgModule({
    declarations: [],
    imports: [ NavigationModule ],
    exports: [ NavigationModule ]
})
export class SharedModule {}
