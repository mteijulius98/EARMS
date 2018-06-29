import { Component, OnInit } from '@angular/core';
import { WeoService } from '../weo.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
   swards=[];
   errorMessage:string;
  constructor(private weoService:WeoService) { }
  
  ngOnInit() {
    this.weoService.viewWschools().subscribe(
      sward =>{
      this.swards=sward.swards
      console.log('our',sward)
      },
      error => this.errorMessage = <any>error);
  }

}
