import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DeoRoutingModule } from './deo-routing.module';
import { DeoComponent } from './deo.component';
import { ReportsComponent } from './reports.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DeoRoutingModule
  ],
  declarations: [DeoComponent, ReportsComponent, DashboardComponent]
})
export class DeoModule { }
