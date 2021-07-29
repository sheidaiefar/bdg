export interface ISidebarItem {
  icon: string;
  link?: string;
  title: string;
  notificationCount?: number;
  children?: ISidebarChild[];
  isActive?: boolean;
}

export interface ISidebarChild {
  link?: string;
  title: string;
}
