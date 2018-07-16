import { Component, OnInit } from '@angular/core';
import { DeoService } from '../../deo/deo.service';

@Component({
  selector: 'app-wards',
  templateUrl: './wards.component.html',
  styleUrls: ['./wards.component.css']
})
export class WardsComponent implements OnInit {
  wss=[];
  errorMessage:string;
  constructor(private deoService:DeoService) {
    setTimeout(function (){
      $(function(){
        $('#wardschools').DataTable();
        });
         },2000);
   }

  ngOnInit() {
    this.deoService.viewWs().subscribe(
      ws =>{
      this.wss=ws.wss
      console.log('our',ws)
      },
      error => this.errorMessage = <any>error);
  }
  IddStored(id){
    localStorage.removeItem('sid')
    localStorage.setItem('sid', id)
    
  
  }

}
