import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-headerbrand',
  templateUrl: './headerbrand.component.html',
  styleUrls: ['./headerbrand.component.css']
})
export class HeaderbrandComponent implements OnInit {
  
  constructor(private toggleService: ToggleService) { }
    
  ngOnInit() {
  }

 
}
