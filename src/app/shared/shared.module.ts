import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { AuthguardService }            from './authguard.service';
import { AuthService }          from './auth.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    AuthService,
    AuthguardService
  ]
})
export class SharedModule { }
