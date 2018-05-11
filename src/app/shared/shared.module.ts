import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HeaderbrandComponent } from './header/headerbrand.component';
import { ToggleService } from './toggle.service';
@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    HeaderComponent,
    HeaderbrandComponent
  ],
  exports: [
    HeaderComponent,
    HeaderbrandComponent
  ],
  providers: [
    ToggleService
  ]
})
export class SharedModule { }
