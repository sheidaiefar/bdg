import {Component, Input, OnInit} from '@angular/core';
import {IBreadcrumb} from '@app/shared/shared-common/breadcrumb/breadcrumb.interface';
import {NICICOOptional} from '@app/core/type-guards/optional';
import {Router} from '@angular/router';

@Component({
  selector: 'nicico-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() data: NICICOOptional<IBreadcrumb[]> = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  routeUrl(url: string | undefined, breadcrumbs: IBreadcrumb[] | undefined): void {
    if (url) {
      if (breadcrumbs && breadcrumbs.length) {
        this.router.navigate([url], {state: breadcrumbs}).then();
      } else {
        this.router.navigate([url]).then();
      }
    }
  }

}
