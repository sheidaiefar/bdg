export interface INavItem {
  icon: string;
  link?: string;
  title: string;
  notificationCount?: number;
  children?:INavItemChild[];
}

export interface INavItemChild {
  link?: string;
  title: string;
}
