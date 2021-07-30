import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ISidebarChild } from '../models/nav-item.interface';

@Component({
  selector: 'nicico-sidebar-children',
  templateUrl: './sidebar-children.component.html',
  styleUrls: ['./sidebar-children.component.scss']
})
export class SidebarChildrenComponent {
  @Input() subMenu: ISidebarChild[] = [];
  @Output() hideSubMenu: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router) { }

  public menuClicked(sidebarItem: ISidebarChild): void {
    this.hideSubMenu.emit(true);
    this.router.navigate([sidebarItem?.url]);
  }

}
