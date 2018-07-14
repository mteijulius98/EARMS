import { Component, OnInit } from '@angular/core';
import { WeoService } from '../weo.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
   wss=[];
   errorMessage:string;
  constructor(private weoService:WeoService) { }
  
  ngOnInit() {
    this.weoService.viewWschools().subscribe(
      ws =>{
      this.wss=ws.wss
      console.log('our',ws)
      },
      error => this.errorMessage = <any>error);
  }
 IdStored(id){
     localStorage.removeItem('sid')
     localStorage.setItem('sid', id)
     
  }
  NameStored(name){
    localStorage.removeItem('sname')
    localStorage.setItem('sname', name)
    
 }

}
