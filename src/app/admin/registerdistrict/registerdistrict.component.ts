import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-registerdistrict',
  templateUrl: './registerdistrict.component.html',
  styleUrls: ['./registerdistrict.component.css']
})
export class RegisterdistrictComponent implements OnInit {

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
