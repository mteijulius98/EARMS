import { Component, OnInit } from '@angular/core';
import { HosService } from '../hos.service';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.css']
})
export class FinancialsComponent implements OnInit {

  constructor(private hosService:HosService) { }

  ngOnInit() {
  }
  form12(form:any){
    
    this.hosService.registerRevenue(form.value.source,form.value.amount,form.value.from,form.value.to)
    
    .subscribe(
      resp =>alert('Revenue Added'),
      error=>alert('error')
    );
   form.reset();
  }

}
