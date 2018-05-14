import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { HeadService } from '../head.service';
import { IReport } from './reports';
//import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  details: IReport[];
  errorMessage:string;
  constructor(private headService:HeadService) { }

  ngOnInit():void{
    this.headService.viewDetails().subscribe(
      details => this.details = details,
      
      error => this.errorMessage = <any>error);
  }

  // ngOnInit() {
  // }
  // @ViewChild('sreport',{read: ElementRef}) sreport: ElementRef;
  // private downloadSreport() {
  //  //   console.log(this.sreport.nativeElement);
  
  //   let doc = new jsPDF();

  //   let specialElementHandlers = {
  //     '#editor': function (element,renderer) {
  //       return true;
  //     }
  //   };
     
  //   let report = this.sreport.nativeElement;

  //   doc.fromHTML(report,15,15,{
  //     'width':190,
  //     'elementHandlers':specialElementHandlers
  //   });
  //   doc.save('school report.pdf');
  // }
}
