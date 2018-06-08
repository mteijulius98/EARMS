import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SloRoutingModule } from './slo-routing.module';
import { SloComponent } from './slo.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SloRoutingModule
  ],
  declarations: [SloComponent, ReportsComponent]
})
export class SloModule { }
