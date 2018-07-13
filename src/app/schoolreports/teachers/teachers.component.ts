import { Component, OnInit } from '@angular/core';
import { WeoService } from '../../weo/weo.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
    teachs=[];
    errorMessage:string
  constructor(private weoService:WeoService) { }

  ngOnInit() {
    this.weoService.viewSchooltechs().subscribe(
      teach =>{
      this.teachs=teach.teachs
    
      },
      error => this.errorMessage = <any>error);
  }

}
