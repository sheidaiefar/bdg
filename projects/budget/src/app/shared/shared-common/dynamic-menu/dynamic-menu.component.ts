import {Component, Injector, Input, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
import {
  DynamicMenuConfig,
  DynamicMenuItem,
  Item
} from '@app/shared/shared-common/dynamic-menu/dynamic-menu.config';
import {noop} from 'rxjs';

@Component({
  selector: 'nicico-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  styleUrls: ['./dynamic-menu.component.scss']
})
export class DynamicMenuComponent implements OnInit {
  @Input() config: DynamicMenuConfig = {};
  @Input() itemList: DynamicMenuItem[] = [];
  // @ts-ignore
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  public leftOffset = 0;
  public topOffset = 0;

  constructor(private inj?: Injector) {
  }

  ngOnInit(): void {
    if (this.config.topOffset) {
      this.topOffset = this.config.topOffset;
    }
    if (this.config.leftOffset) {
      this.leftOffset = this.config.leftOffset;
    }
  }

  openMenu(): void {
    this.trigger.openMenu();
  }

  closeMenu(): void {
    this.trigger.closeMenu();
  }

  onHeaderClick(): void {
    if (this.config?.header?.onClick) {
      this.config.header.onClick();
    } else {
      noop();
    }
  }

  onFooterClick(): void {
    if (this.config?.footer?.onClick) {
      this.config.footer.onClick();
    } else {
      noop();
    }
  }

  createInjector(customData: any): Injector {
    const injector = Injector.create(
      [
        {
          provide: Item,
          useValue: customData
        }
      ],
      this.inj
    );
    return injector;
  }

  onItemClick(item: DynamicMenuItem): void {
    item.onClick && item.onClick();
  }
}
