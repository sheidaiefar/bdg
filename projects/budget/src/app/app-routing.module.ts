import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './shared/layout/main-layout/main-layout.component';
import {AuthRedirectComponent} from '@app/shared/shared-common/auth-redirect/auth-redirect.component';
import {AuthGuard} from '@app/core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./shared/layout/layout.module').then((m) => m.LayoutModule)
  },
  {path: 'auth-redirect', component: AuthRedirectComponent},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
