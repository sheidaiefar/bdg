import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '@app/pages/home/home.component';
import {AuthGuard} from '@app/core/auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'base-info',
    // canActivate: [AuthGuard],
    loadChildren: () => import('../../pages/base-info/base-info.module').then(m => m.BaseInfoModule)
  },
  {
    path: 'general-budget',
    // canActivate: [AuthGuard],
    loadChildren: () => import('../../pages/general-budget/general-budget.module').then(m => m.GeneralBudgetModule)
  },
  {
    path: 'cardboard',
    // canActivate: [AuthGuard],
    loadChildren: () => import('../../pages/cardboard/cardboard.module').then(m => m.CardboardModule)
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
