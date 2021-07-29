import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AffairsComponent} from '@app/pages/base-info/affairs/affairs.component';

const routes: Routes = [
  {path: '', redirectTo: 'affairs', pathMatch: 'full'},
  {path: 'affairs', component: AffairsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseInfoRoutingModule {
}
