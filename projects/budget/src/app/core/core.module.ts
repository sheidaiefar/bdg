import {NgModule} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {ErrorhandlerInterceptor} from './interceptors/errorhandler.interceptor';
import {ToastComponent} from '@app/shared/shared-common/toast/toast.component';
import {ToastrModule, ToastrService} from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      toastComponent: ToastComponent,
      timeOut: 0,
      positionClass: 'toast-bottom-left',
      progressBar: true,
      toastClass: 'success'
    })
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorhandlerInterceptor,
      multi: true,
      deps: [TranslateService, ToastrService]
    }
  ]
})
export class CoreModule {
}
