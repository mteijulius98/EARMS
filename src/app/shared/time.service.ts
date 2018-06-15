import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {
public currentYear: Date = new Date;
  constructor() { }
 showCurrentYear() {
   return this.currentYear.getFullYear();
 }
}
