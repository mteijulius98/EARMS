import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { HosService } from '../hos.service';
import { IReport } from './reports';
//import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  // details: IReport[];
  schoolDetails=[];
  ourDistrict=[];
  
  ourWard=[];
  errorMessage:string;
  constructor(private hosService:HosService) { }

  ngOnInit():void{
    this.hosService.viewDetails().subscribe(
      details =>{
        //this.details = details
         console.log("details",details)
        this.schoolDetails=details.sdetails
        console.log(this.schoolDetails)

      },
      
      error => this.errorMessage = <any>error);
      this.headService.getDistricts().subscribe(
        district =>{
        this.ourDistrict=district.district
        console.log('our',this.ourDistrict)
        //(districts:ourDistrict[]) => this.districts= districts,
        },
        error => this.errorMessage = <any>error);

        this.headService.getWards().subscribe(
          wards=> {
           this.ourDistrict=wards.wards
          
          },
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
