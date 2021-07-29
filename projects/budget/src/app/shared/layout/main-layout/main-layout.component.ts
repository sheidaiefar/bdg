import {Component, OnInit} from '@angular/core';
import {INavItem} from './nav-item.interface';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {IBreadcrumb} from '@app/shared/shared-common/breadcrumb/breadcrumb.interface';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'nicico-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }


}
