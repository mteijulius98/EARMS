import { Component, OnInit } from '@angular/core';
import { HosService } from '../hos.service';

@Component({
  selector: 'app-schoolstaffs',
  templateUrl: './schoolstaffs.component.html',
  styleUrls: ['./schoolstaffs.component.css']
})
export class SchoolstaffsComponent implements OnInit {

  constructor(private hosService:HosService) { }

  ngOnInit() {
  }
  form3(form:any){
    
    this.hosService.schoolDetails(form.value.year,form.value.schoolname,form.value.wardname,form.value.districtname,form.value.schooltype,form.value.agerange,form.value.no_of_males,form.value.no_of_females,form.value.no_of_males_o,form.value.no_of_females_o,
      form.value.no_of_males_d,form.value.no_of_females_d,form.value.no_of_males_hl,form.value.no_of_females_hl,form.value.no_of_males_nt,form.value.no_of_females_nt)
    
    .subscribe(
      resp =>alert('Information Submitted'),
      error=>alert('There is no either school,ward or district registered with that name,Check it and try again')
    );
   form.reset();
  }

}
