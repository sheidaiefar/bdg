import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBreadcrumb } from '@app/shared/shared-common/breadcrumb/breadcrumb.interface';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { MenuData } from './menu-data';
import { ISidebarChild, ISidebarItem } from './models/nav-item.interface';

@Component({
  selector: 'nicico-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [
    MenuData
  ]
})
export class SidebarComponent implements OnInit {
  public isCollapseMenu = false;
  public breadcrumb: IBreadcrumb[] | undefined = [];
  public dataState: any;
  private subscription!: Subscription;
  public activatedChildren: ISidebarChild[] = [];
  public showSubmenu = false;
  public sidebarData: ISidebarItem[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private toastService: ToastrService,
    private _router: Router,
    private menuData: MenuData
  ) { }

  ngOnInit(): void {
    this.sidebarData = this.menuData.menuData;

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



  expandCollapseMenu(): void {
    this.isCollapseMenu = !this.isCollapseMenu;
    this.showSubmenu = false;
    setTimeout(() => { }, 300);
  }

  public menuClicked(sidebarItem: ISidebarItem): void {
    this.showSubmenu = false;
    this.isCollapseMenu = !this.isCollapseMenu;
    this._router.navigate([sidebarItem?.url]);
    if (sidebarItem.children) {
      this.showSubmenu = !this.showSubmenu;
      this.activatedChildren = sidebarItem.children;
      this.isCollapseMenu = true;
    }
  }

  setHideSubmenu() {
    this.showSubmenu = false;
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  openToast() {
    this.toastService.error('error', 'title', { toastClass: 'error' })
  }
}
