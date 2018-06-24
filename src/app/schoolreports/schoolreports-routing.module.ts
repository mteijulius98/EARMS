import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolreportsComponent } from './schoolreports.component';

const routes: Routes = [
  {path:'weo/reports/:schoolname',
  component:SchoolreportsComponent
  // children:[
  //   {

  //   }
  // ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolreportsRoutingModule { }
