import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs/internal/Observable';
import {tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class ErrorhandlerInterceptor implements HttpInterceptor {
  constructor(
    private translate: TranslateService,
    private toastrService: ToastrService,
  ) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        (resp) => {
        },
        (error) => {
          // this.translate
          //   // .get(`nicico.error.${error.message}`)
          //   .get(`عملیات با خطا مواجه شده است`)
          //   .subscribe((res) => {
          //     this.toastrService.error(res);
          //   });
          this.translate
            .get(`nicico.error.${error.status}`)
            .subscribe((res) => {
              this.toastrService.error(res, '', {toastClass: 'error'});
            });
        }
      )
    );
  }
}
