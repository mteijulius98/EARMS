import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../shared/toggle.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private toggleService: ToggleService) { }
  

  ngOnInit() {
  }

  id = this.toggleService.showId();
  
  isCollapsed = this.toggleService.toggle();

}
