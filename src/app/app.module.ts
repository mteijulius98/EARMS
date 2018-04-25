import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { HosModule } from './hos/hos.module';
import { WeoModule } from './weo/weo.module';
import { SloModule } from './slo/slo.module';
import { DeoModule } from './deo/deo.module';
import { AppRoutingModule } from './app-routing.module';

=======
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
>>>>>>> a97aaca81ca810afd754c912e936a879f4e795e0

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

<<<<<<< HEAD

=======
>>>>>>> a97aaca81ca810afd754c912e936a879f4e795e0
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
<<<<<<< HEAD
    DeoModule,
    SloModule,
    WeoModule,
    HosModule,
=======
>>>>>>> a97aaca81ca810afd754c912e936a879f4e795e0
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
