import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import { WeoService } from '../../weo/weo.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
    teachs=[];
    spec=[];
    errorMessage:string
  constructor(private weoService:WeoService) { }

  ngOnInit() {
    this.weoService.viewSpeschool().subscribe(
      spe =>{
      this.spec=spe.spec
      },
      error => this.errorMessage = <any>error);
    this.weoService.viewSchooltechs().subscribe(
      teach =>{
      this.teachs=teach.teachs
    
      },
      error => this.errorMessage = <any>error);
  }
  downloadPDF() {
    var report = document.getElementById('treport'); 
     console.log(report);
      let doc = new jsPDF();
  
       let specialElementHandlers = {
        '#editor': function (element,renderer) {
          return true;
        }
      };
      doc.fromHTML(report.innerHTML,15,15,{
        'width':190,
        'elementHandlers':specialElementHandlers
      });
      doc.save('teachersreport.pdf');
   
  }
}
