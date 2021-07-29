import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBreadcrumb } from '@app/shared/shared-common/breadcrumb/breadcrumb.interface';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { INavItem } from './models/nav-item.interface';

@Component({
  selector: 'nicico-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public isCollapseMenu = false;
  public breadcrumb: IBreadcrumb[] | undefined = [];
  public dataState: any;  
  private subscription!: Subscription;
  constructor(private activatedRoute: ActivatedRoute,
    private toastService: ToastrService) { }

  ngOnInit(): void {
    
    this.dataState = history.state;

    if (this.dataState) {
      delete this.dataState.navigationId;

      for (const property in this.dataState) {
        this.breadcrumb?.push(this.dataState[property]);
      }

      if (!this.breadcrumb?.length) {
        this.subscription = this.activatedRoute.data.subscribe((res) => {
          this.breadcrumb = res?.breadcrumb;
          if (!this.breadcrumb?.length) {
            this.breadcrumb =
              localStorage.getItem('breadcrumb') !== null
                ? JSON.parse(localStorage.getItem('breadcrumb') || '{}')
                : [];
          } else {
            localStorage.removeItem('breadcrumb');
          }
        });
      } else {
        localStorage.removeItem('breadcrumb');
        localStorage.setItem('breadcrumb', JSON.stringify(this.breadcrumb));
      }
    }
  }

  public navItems: INavItem[] = [
    {
      icon: 'base-info',
      link: '/base-info/affairs',
      title: 'nicico.sidenav.baseInfo'
    },
    {
      icon: 'general-budget',
      link: '/general-budget',
      title: 'nicico.sidenav.generalBudget'
    },
    {
      icon: 'cardboard',
      link: '/cardboard',
      title: 'nicico.sidenav.cardboard'
    }
  ];

  expandCollapseMenu(): void {
    this.isCollapseMenu = !this.isCollapseMenu;
    setTimeout(() => {
    }, 300);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  openToast() {
    this.toastService.error('error', 'title', {toastClass: 'error'})
  }
}
