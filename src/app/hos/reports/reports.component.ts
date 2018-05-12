import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }
  @ViewChild('sreport',{read: ElementRef}) sreport: ElementRef;
  private downloadSreport() {
  //   console.log(this.sreport.nativeElement);
  
    let doc = new jsPDF();

    let specialElementHandlers = {
      '#editor': function (element,renderer) {
        return true;
      }
    };
     
   // let sreport = this.sreport.nativeElement;

    doc.fromHTML(this.sreport.nativeElement,15,15,{
      'width':190,
      'elementHandlers':specialElementHandlers
    });
    doc.save('school report.pdf');
  }
}
