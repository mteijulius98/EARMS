import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-registerstations',
  templateUrl: './registerstations.component.html',
  styleUrls: ['./registerstations.component.css']
})
export class RegisterstationsComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit() {
  }
  form1(form:any){
    
    this.adminService.registerDistrict(form.value.districtname,form.value.region,form.value.PO_Box)
    
    .subscribe(
      resp =>alert('District  created!!'),
      error=>alert('error')
    );
   form.reset();
  }


}
