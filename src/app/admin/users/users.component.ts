import { Component, OnInit,OnDestroy,Input,Output,EventEmitter} from '@angular/core';
import { AdminService } from '../admin.service';
import { IUsers } from './users';
import { LoginServiceService } from '../../login/login-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {
@Input() duser:IUsers;
@Input() wuser:IUsers;
@Output() userDeleted = new EventEmitter<IUsers>();
dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();
  role: string;
  users: IUsers[];
  errorMessage: string;
  roles = [];
  districts = [];
  wards = [];
  schools = [];
  dusers = [];
  wusers = [];
  susers = [];
  public constructor(private adminService: AdminService, private loginService: LoginServiceService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.adminService.viewRoles().subscribe(
      role => {
        this.roles = role.roles;
        this.dtTrigger.next();
        console.log('our', role)
        //(districts:ourDistrict[]) => this.districts= districts,
      },
      error => this.errorMessage = <any>error);
    this.adminService.viewDistricts().subscribe(
      district => {
        this.districts = district.districts

        //(districts:ourDistrict[]) => this.districts= districts,
      },
      error => this.errorMessage = <any>error);
    this.adminService.viewWards().subscribe(
      ward => {
        this.wards = ward.wards

        //(districts:ourDistrict[]) => this.districts= districts,
        },
        error => this.errorMessage = <any>error);
        this.adminService.viewSchools().subscribe(
          school =>{
          this.schools=school.schools
         
          //(districts:ourDistrict[]) => this.districts= districts,
          },
          error => this.errorMessage = <any>error);
          this.adminService.viewDusers().subscribe(
            duser =>{
            this. dusers= duser.dusers;
            this.dtTrigger.next();
            console.log('our',duser)
            //(districts:ourDistrict[]) => this.districts= districts,
            },
            error => this.errorMessage = <any>error);
            this.adminService.viewWusers().subscribe(
              wuser =>{
              this. wusers= wuser.wusers
              console.log('our',wuser)
              //(districts:ourDistrict[]) => this.districts= districts,
              },
              error => this.errorMessage = <any>error);
              this.adminService.viewSusers().subscribe(
                suser =>{
                this. susers= suser.susers
                console.log('our',suser)
                //(districts:ourDistrict[]) => this.districts= districts,
                },
                error => this.errorMessage = <any>error);
               
  // this.adminService.viewUsers().subscribe(
  //     users => this.users = users,
      
  //     error => this.errorMessage = <any>error);
      
  
} 
ngOnDestroy(): void {
  // Do not forget to unsubscribe the event
  this.dtTrigger.unsubscribe();
}
onDelete(id){
  console.log(id)
  this.adminService.deleteUser(id)
  .subscribe(
    () => {
       this.userDeleted.emit(id);
      resp =>alert('User deleted');
    }
  );
}
form5(form:any){
    
  this.loginService.addUsers(form.value.firstname,form.value.middlename,form.value.lastname,form.value.email,form.value.password,form.value.role,form.value.station)
  
  .subscribe(
    resp =>alert('Account created!!'),
    error=>alert('error')
  );
 form.reset();
}
form4(form:any){
    
  this.adminService.registerRole(form.value.role_name,form.value.role_initial)
  
  .subscribe(
    resp =>alert('Role created!!'),
    error=>alert('error')
  );
 form.reset();
}

  
}
