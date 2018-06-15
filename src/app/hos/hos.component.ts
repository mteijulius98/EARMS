import { Component, OnInit } from '@angular/core';
import { HosService } from './hos.service';

@Component({
  selector: 'app-hos',
  templateUrl: './hos.component.html',
  styleUrls: ['./hos.component.css']
})
export class HosComponent implements OnInit {
  icategories=[];
  errorMessage:string;
  constructor(private hosService:HosService) { }

  ngOnInit() {
    
  }
 

}
