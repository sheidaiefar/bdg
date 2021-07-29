import {NgModule} from '@angular/core';
import {LayoutRoutingModule} from './layout-routing.module';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {SharedLibModule} from '../shared-lib/shared-lib.module';
import {SharedCommonModule} from '../shared-common/shared-common.module';

@NgModule({
  declarations: [
    HeaderComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedLibModule,
    SharedCommonModule
  ],
  exports: []
})
export class LayoutModule {
}
