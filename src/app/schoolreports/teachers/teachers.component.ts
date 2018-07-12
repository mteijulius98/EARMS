import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
