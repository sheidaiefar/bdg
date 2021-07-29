import {NgModule} from '@angular/core';
import {DynamicMenuComponent} from './dynamic-menu/dynamic-menu.component';
import {SharedLibModule} from '../shared-lib/shared-lib.module';
import {CustomComponentDirective} from './custom-component/custom-component.directive';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {CommonModule} from '@angular/common';
import {ToastComponent} from '@app/shared/shared-common/toast/toast.component';

@NgModule({
  declarations: [DynamicMenuComponent, CustomComponentDirective, BreadcrumbComponent, ToastComponent],
  imports: [CommonModule, SharedLibModule],
  exports: [DynamicMenuComponent, CustomComponentDirective, BreadcrumbComponent, ToastComponent]
})
export class SharedCommonModule {

}
