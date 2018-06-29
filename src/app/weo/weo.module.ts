import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { WeoRoutingModule } from './weo-routing.module';
import { WeoComponent } from './weo.component';
import { ReportsComponent } from './reports/reports.component';
import { DashboardComponent } from './dashboard.component';
import { WeoService } from './weo.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    WeoRoutingModule
  ],
  declarations: [WeoComponent, ReportsComponent, DashboardComponent],
  providers: [
    WeoService
  ]
  
})
export class WeoModule { }
