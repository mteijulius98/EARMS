import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //private userData:any=JSON.parse( localStorage.getItem('UserData'));
  
 // private station_name:string=this.userData["station_name"];
  
  constructor() { }

  ngOnInit() {
   
  }

}
