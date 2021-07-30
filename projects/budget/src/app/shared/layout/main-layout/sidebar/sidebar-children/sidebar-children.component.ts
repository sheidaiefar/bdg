import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISidebarChild, ISidebarItem } from '../models/nav-item.interface';

@Component({
  selector: 'nicico-sidebar-children',
  templateUrl: './sidebar-children.component.html',
  styleUrls: ['./sidebar-children.component.scss']
})
export class SidebarChildrenComponent {  
  @Input() subMenu: ISidebarChild[]=[];

  constructor(private router: Router) 
  {  }

  public redirect(child: ISidebarChild): void {
     this.router.navigate([child.url]);
  }

}
