import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { WeoRoutingModule } from './weo-routing.module';
import { WeoComponent } from './weo.component';
import { ReportsComponent } from './reports/reports.component';
import { DashboardComponent } from './dashboard.component';
//import { SchoolreportsComponent } from './reports/schoolreports/schoolreports.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    WeoRoutingModule
  ],
  declarations: [WeoComponent, ReportsComponent, DashboardComponent]
})
export class WeoModule { }
