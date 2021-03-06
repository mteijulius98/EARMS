import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminModule } from './admin/admin.module';
import { HosModule } from './hos/hos.module';
import { WeoModule } from './weo/weo.module';
import { SloModule } from './slo/slo.module';
import { DeoModule } from './deo/deo.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './login/login-service.service';
import { HttpModule } from '@angular/http';
import { SchoolreportsModule } from './schoolreports/schoolreports.module';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxSpinnerModule,
    DataTablesModule,
    DeoModule,
    SloModule,
    WeoModule,
    HosModule,
    AdminModule,
    SchoolreportsModule,
    AppRoutingModule
  ],
  providers: [
    LoginServiceService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
