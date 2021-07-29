import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseInfoRoutingModule } from './base-info-routing.module';
import { AffairsComponent } from './affairs/affairs.component';


@NgModule({
  declarations: [
    AffairsComponent
  ],
  imports: [
    CommonModule,
    BaseInfoRoutingModule
  ]
})
export class BaseInfoModule { }
