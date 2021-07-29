import {NgModule} from '@angular/core';
import {LayoutModule} from './layout/layout.module';
import {SharedLibModule} from './shared-lib/shared-lib.module';
import {SharedCommonModule} from './shared-common/shared-common.module';

@NgModule({
  declarations: [],
  imports: [
    LayoutModule,
    SharedLibModule,
    SharedCommonModule
  ],
  exports: [
    SharedCommonModule,
    LayoutModule,
    SharedLibModule,]
})
export class SharedModule {
}
