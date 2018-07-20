import { Component, OnInit } from '@angular/core';
import { WeoService } from '../../weo/weo.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent implements OnInit {
   infras=[];
   spec=[];
   errorMessage:string
  constructor(private weoService:WeoService) { }
   
  ngOnInit() {
    this.weoService.viewSchoolinfa().subscribe(
      infra =>{
      this.infras=infra.infras
    
      },
      error => this.errorMessage = <any>error);
      this.weoService.viewSpeschool().subscribe(
        spe =>{
        this.spec=spe.spec
        },
        error => this.errorMessage = <any>error);
  }
  downloadPDF() {
    var report = document.getElementById('ireport'); 
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
      doc.save('schoolreport.pdf');
   
  }
  

}
