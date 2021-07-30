import { ISidebarItem } from "./models/nav-item.interface";

export class MenuData {
    public menuData: ISidebarItem[] =
        [
            {
                icon: 'base-info',
                url: '/base-info/affairs',
                title: 'nicico.sidenav.baseInfo',
                isActive: false,
            },
            {
                icon: 'general-budget',
                url: '/general-budget',
                title: 'nicico.sidenav.generalBudget',
                isActive: false,
                children: [
                    {
                        url: '/base-info/affairs',
                        title: 'nicico.sidenav.baseInfo',
                        isActive: false,
                    },
                    {
                        url: '/base-info/affairs',
                        title: 'nicico.sidenav.baseInfo',
                        isActive: false,
                    },
                ]
            },
            {
                icon: 'cardboard',
                url: '/cardboard',
                title: 'nicico.sidenav.cardboard',
                isActive: false,
            }
        ];

}


