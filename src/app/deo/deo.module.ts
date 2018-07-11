import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DeoRoutingModule } from './deo-routing.module';
import { DeoComponent } from './deo.component';
import { ReportsComponent } from './reports/reports.component';
import { DashboardComponent } from './dashboard.component';
import { WardslistComponent } from './reports/wardslist.component';
import { WardsComponent } from './reports/wards.component';
import { DeoService } from './deo.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DeoRoutingModule
  ],
  declarations: [DeoComponent, ReportsComponent, DashboardComponent,  WardslistComponent, WardsComponent],
  providers: [
    DeoService
  ]
})
export class DeoModule { }
