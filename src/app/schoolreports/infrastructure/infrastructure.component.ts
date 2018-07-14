import { Component, OnInit } from '@angular/core';
import { WeoService } from '../../weo/weo.service';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent implements OnInit {
   infras=[];
   schools=[];
   errorMessage:string
  constructor(private weoService:WeoService) { }
   
  ngOnInit() {
    this.weoService.viewSchoolinfa().subscribe(
      infra =>{
      this.infras=infra.infras
    
      },
      error => this.errorMessage = <any>error);
      this.weoService.viewSpeschool().subscribe(
        school =>{
        this.schools=school.schools
        },
        error => this.errorMessage = <any>error);
  }

}
