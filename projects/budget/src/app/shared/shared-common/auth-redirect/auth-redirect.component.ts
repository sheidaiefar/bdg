import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthParamsLocalStorageService} from '@app/core/auth/auth-params.repo';
import {AuthParams} from '@app/core/auth/model/authParams.model';


@Component({
  selector: 'nicico-auth-redirect',
  templateUrl: './auth-redirect.component.html',
  styleUrls: ['./auth-redirect.component.scss']
})
export class AuthRedirectComponent implements OnInit {

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private authParamsLocalStorage: AuthParamsLocalStorageService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((res: Params) => {
      this.authParamsLocalStorage.set(res as AuthParams);
      this.route.navigate(['/']);
    });
  }

}
