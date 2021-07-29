import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {DynamicMenuComponent} from '../../shared-common/dynamic-menu/dynamic-menu.component';
import {DynamicMenuConfig} from '../../shared-common/dynamic-menu/dynamic-menu.config';

@Component({
  selector: 'nicico-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild(DynamicMenuComponent)
  dynamicMenu: DynamicMenuComponent = new DynamicMenuComponent();



  public pageTitle = '';
  // public breadcrumb: IBreadcrumb[] = [];
  public profileMenuConfig: DynamicMenuConfig = {
    itemList: [
      {
        title: 'nicico.action.changePassword',
        icon: 'lock',
        onClick: () => {
          this.router.navigate(['change-password']).then();
        }
      },
      {
        title: 'nicico.action.logout',
        icon: 'logout',
        onClick: () => {
          this.router.navigate(['login']).then();
        }
      }
    ],
    menuWidth: 15,
    pointerLeftOffset: 1.7,
    topOffset: 2,
    leftOffset: 0.5
  };
  notificationMenuConfig: DynamicMenuConfig = {
    itemList: [],
    header: {
      title: 'اعلانات سیستم ها',
      onClick: () => {
      }
    },
    footer: {
      title: 'دیدن همه اعلانات',
      onClick: () => {
        this.router.navigate(['notifications']).then();
      }
    },
    menuWidth: 30,
    leftOffset: 15.8,
    pointerLeftOffset: 1.7,
    topOffset: 3
  };

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  get notificationListConfig(): DynamicMenuConfig {
    const notifications: DynamicMenuConfig = JSON.parse(
      JSON.stringify(this.notificationMenuConfig)
    );
    if (notifications && notifications.itemList) {
      notifications.itemList = [];
      this.notificationMenuConfig.itemList?.map((i) => {
        if (i?.customData?.unread) {
          notifications.itemList?.push(i);
        }
      });
      notifications.footer = this.notificationMenuConfig.footer;
      return notifications;
    } else {
      return this.notificationMenuConfig;
    }
  }
}
