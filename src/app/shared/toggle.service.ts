import { Injectable } from '@angular/core';

@Injectable()
export class ToggleService {

  public id:string = "leftColumn";
  public isCollapsed:boolean = false;

  constructor() { }
 
  showId() {
    return this.id;
  }
  
  toggle() {
    return this.isCollapsed;
  }

}
