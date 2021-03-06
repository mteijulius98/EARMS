import { Component, OnInit, OnDestroy, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { AdminService } from '../admin.service';
import { IUsers } from './users';
import { LoginServiceService } from '../../login/login-service.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() duser: IUsers;
  @Input() wuser: IUsers;
  @Output() userDeleted = new EventEmitter<IUsers>();
  // dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject();
  user = {
    firstname: '',
    middlename: '',
    lastname: '',
    email: '',
    password: '',
    role:'',
    station:'',
  };
  role = {
 role_name: '',
 role_initial: ''
  };
  users: IUsers[];
  errorMessage: string;
  roles = [];
  districts = [];
  wards = [];
  schools = [];
  dusers:any  = [];
  wusers = [];
  susers = [];
  public constructor(private adminService: AdminService, private loginService: LoginServiceService) { 
    
    setTimeout(function (){
      $(function(){
        $('#dusers').DataTable();
        $('#wusers').DataTable();
        $('#susers').DataTable();
        $('#rusers').DataTable();
        });
         },2000);
  }

  ngOnInit() {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 10
    // };
    this.adminService.viewRoles().subscribe(
      role => {
        this.roles = role.roles;
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
      school => {
        this.schools = school.schools

        //(districts:ourDistrict[]) => this.districts= districts,
      },
      error => this.errorMessage = <any>error);
    this.adminService.viewDusers().subscribe(
       duser => {
        this.dusers = duser.dusers;
        console.log('our', duser)
        //(districts:ourDistrict[]) => this.districts= districts,
      },
      error => this.errorMessage = <any>error);
    this.adminService.viewWusers().subscribe(
      wuser => {
        this.wusers = wuser.wusers
        console.log('our', wuser)
        //(districts:ourDistrict[]) => this.districts= districts,
      },
      error => this.errorMessage = <any>error);
    this.adminService.viewSusers().subscribe(
      suser => {
        this.susers = suser.susers
        console.log('our', suser)
        //(districts:ourDistrict[]) => this.districts= districts,
      },
      error => this.errorMessage = <any>error);

    // this.adminService.viewUsers().subscribe(
    //     users => this.users = users,

    //     error => this.errorMessage = <any>error);


  }
  // ngAfterViewInit(): void {
  //   this.dtTrigger.next();
  // }
  // ngOnDestroy(): void {
  //   // Do not forget to unsubscribe the event
  //   this.dtTrigger.unsubscribe();
  // }
  // rerender(): void {
  //   this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //     // Destroy the table first
  //     dtInstance.destroy();
  //     // Call the dtTrigger to rerender again
  //     this.dtTrigger.next();
  //   });
  // }
  onDelete(id) {
    console.log(id)
    this.adminService.deleteUser(id)
      .subscribe(
        () => {
          this.userDeleted.emit(id);
          resp => alert('User deleted');
        }
      );
  }
  form5(form: any) {

    this.loginService.addUsers(this.user.firstname, this.user.middlename, this.user.lastname, this.user.email, this.user.password, this.user.role, this.user.station)

      .subscribe(
        resp => alert('Account created!!'),
        error => alert('error')
      );
    form.reset();
  }
  form4(form: any) {

    this.adminService.registerRole(form.value.role_name, form.value.role_initial)

      .subscribe(
        resp => alert('Role created!!'),
        error => alert('error')
      );
    form.reset();
  }
  loadDusers() {
    this.adminService.viewDusers().subscribe(
      duser => {
        this.dusers = duser.dusers;
        console.log('our', duser)
        //(districts:ourDistrict[]) => this.districts= districts,
      },
      error => this.errorMessage = <any>error
    );
  }


}
