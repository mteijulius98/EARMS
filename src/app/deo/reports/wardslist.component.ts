import { Component, OnInit } from '@angular/core';
import { DeoService } from '../deo.service';

@Component({
  selector: 'app-wardslist',
  templateUrl: './wardslist.component.html',
  styleUrls: ['./wardslist.component.css']
})
export class WardslistComponent implements OnInit {
   dwards=[];
   wss=[];
   errorMessage:string;
  constructor(private deoService:DeoService) { }

  ngOnInit() {
    this.deoService.viewDwards().subscribe(
      dward =>{
      this.dwards=dward.dwards
      console.log('our',dward)
      },
      error => this.errorMessage = <any>error);
      // this.deoService.viewWs().subscribe(
      //   ws =>{
      //   this.wss=ws.wss
      //   console.log('our',ws)
      //   },
      //   error => this.errorMessage = <any>error);
  }
  WidStored(id){
    localStorage.removeItem('eid')
    localStorage.setItem('eid', id)
    

 }


}
