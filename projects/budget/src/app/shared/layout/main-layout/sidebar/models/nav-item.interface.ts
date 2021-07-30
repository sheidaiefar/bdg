export interface ISidebarItem {
  icon: string;
  url?: string;
  title: string;
  notificationCount?: number;
  children?: ISidebarChild[];
  isActive?: boolean;
}

export interface ISidebarChild {
  url?: string;
  title: string;
  isActive?: boolean;
}
