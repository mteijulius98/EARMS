import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { HosService } from '../hos.service';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.css']
})
export class FinancialsComponent implements OnInit {
   revenues=[];
   errorMessage:string;
   expenditures=[];
  constructor(private hosService:HosService) {
    setTimeout(function (){
      $(function(){
        $('#revenuee').DataTable();
        });
         },2000);
         setTimeout(function (){
          $(function(){
            $('#expend').DataTable();
            });
             },2000);
   }

  ngOnInit() {
    this.hosService.viewRevenues().subscribe(
      revenue =>{
      this.revenues=revenue.revenues
      },
      error => this.errorMessage = <any>error);
      this.hosService.viewExpenditures().subscribe(
        expenditure =>{
        this.expenditures=expenditure.expenditures
        },
        error => this.errorMessage = <any>error);
  
  }
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
};
  form12(form:any){
    
    this.hosService.registerRevenue(form.value.source,form.value.amount,form.value.from,form.value.to)
    
    .subscribe(
      resp =>alert('Revenue Added'),
      error=>alert('error')
    );
   form.reset();
  }
  form30(form:any){
    
    this.hosService.registerExpenditure(form.value.name,form.value.amount1,form.value.kuanzia,form.value.mpaka,form.value.revenue)
    
    .subscribe(
      resp =>alert('Expenditure  Added'),
      error=>alert('error'), 
    );
   
   form.reset();
   
  }
  
}
