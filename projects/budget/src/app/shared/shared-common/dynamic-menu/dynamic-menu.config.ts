import {Injectable} from '@angular/core';

export interface DynamicMenuConfig {
  header?: DynamicMenuItem;
  footer?: DynamicMenuItem;
  pointerTopOffset?: number;
  pointerLeftOffset?: number;
  menuWidth?: number;
  topOffset?: number;
  leftOffset?: number;
  rightOffset?: number;
  itemList?: DynamicMenuItem[];
}

export interface DynamicMenuItem {
  title?: string;
  icon?: string;
  onClick?: () => void;
  customComponent?: any;
  customData?: any;
}

@Injectable()
export class Item {
}
