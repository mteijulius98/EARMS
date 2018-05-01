import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-registerward',
  templateUrl: './registerward.component.html',
  styleUrls: ['./registerward.component.css']
})
export class RegisterwardComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit() {
  }
  form2(form:any){
    
    this.adminService.registerWard(form.value.wardname,form.value.districtname,form.value.PO_Box)
    
    .subscribe(
      resp =>alert('Ward  created!!'),
      error=>alert('error')
    );
   form.reset();
  }

}
