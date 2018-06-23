import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";
import { LoginServiceService } from '../login/login-service.service';

@Injectable()
export class HosService {
  public token=localStorage.getItem("token")
  constructor(private http:Http,private loginService:LoginServiceService) { }
 public schoolDetails(year:any,schoolname:any,wardname:any,districtname:any,schooltype:any,agerange:any,
    no_of_males:any,no_of_females:any,no_of_males_o:any,no_of_females_o:any,no_of_males_d:any,
    no_of_females_d:any,no_of_males_hl:any,no_of_females_hl:any,no_of_males_nt:any,no_of_females_nt:any){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization','jwt '+ this.token);
    headers.append('X-Requested-With','XMLHttpRequest');
    let options = {
    headers: headers
};
let body = JSON.stringify({year:year, school_name:schoolname,ward_name:wardname,diistrict_name:districtname,type:schooltype,age_range:agerange,
  male:no_of_males,female:no_of_females,male_orphan:no_of_males_o,female_orphan:no_of_females_o,male_disabled:no_of_males_d,
  female_disabled:no_of_females_d,male_hardlife:no_of_males_hl,female_hardlife:no_of_females_hl,male_nonTz:no_of_males_nt,female_nonTz:no_of_females_nt});
return this.http.post("http://localhost/fypyear/public/api/sdetail", body, options).map( (response:Response) => response.json());
    
 }
 public registerInfrastructure(name:any,available:any,needed:any,category:any){
  const token=this.loginService.getToken();
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers:headers
};
let body = JSON.stringify({name:name,available:available,needed:needed,icategory_id:category});
return this.http.post("http://localhost/fypyear/public/api/infrastructure?token=" + token, body, options).map( (response:Response) => response.json());
 }
//  public viewInfrastructures(){
//   const token=this.loginService.getToken(); 
//   let headers=new Headers()
//    headers.append('Content-Type', 'application/json');
//    headers.append('X-Requested-With','XMLHttpRequest');
//   return this.http.get('http://localhost/fypyear/public/api/infrastructures?token=' + token,{headers:headers}).map(
// (res:Response)=>res.json(),


//     );
// }
 public registerTlmaterial(name:any,tlcategory:any,sclass:any,available:any,needed:any){
  const token=this.loginService.getToken();
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers:headers
};

let body = JSON.stringify({name:name,tlmcategory_id:tlcategory,sclass_id:sclass,available:available,needed:needed});
return this.http.post("http://localhost/fypyear/public/api/tlmaterial?token=" + token, body, options).map( (response:Response) => response.json());
 }
 public registerEquipment(name:any,eqcategory:any,sclass1:any,available:any,needed:any){
  const token=this.loginService.getToken();
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers:headers
};

let body = JSON.stringify({name:name,available:available,sclass_id:sclass1,eqcategory_id:eqcategory,needed:needed});
return this.http.post("http://localhost/fypyear/public/api/equipment?token=" + token, body, options).map( (response:Response) => response.json());
 }
 public registerService(name:any,availability:any){
  const token=this.loginService.getToken();
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers:headers
};
let body = JSON.stringify({name:name,availability:availability});
return this.http.post("http://localhost/fypyear/public/api/service?token=" + token, body, options).map( (response:Response) => response.json());
 }
public registerRevenue(source:any,amount:any,from:any,to:any){
  const token=this.loginService.getToken();
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers:headers
};
let body = JSON.stringify({source:source,amount:amount,kuanzia:from,mpaka:to});
return this.http.post("http://localhost/fypyear/public/api/revenue?token=" + token, body, options).map( (response:Response) => response.json());
 }

 public registerNtstaff(designation:any,count:any){
  const token=this.loginService.getToken();
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers:headers
};
let body = JSON.stringify({designation:designation,count:count});
return this.http.post("http://localhost/fypyear/public/api/ntstaff?token=" + token, body, options).map( (response:Response) => response.json());
 }
 public registerTeacher(fname:any,mname:any,lname:any,sex:any,birth:any,edlevel:any,epdate:any,epid:any){
  const token=this.loginService.getToken();
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers:headers
};
let body = JSON.stringify({fname:fname,mname:mname,lname:lname,sex:sex,birth:birth,edlevel:edlevel,epdate:epdate,epid:epid});
return this.http.post("http://localhost/fypyear/public/api/teacher?token=" + token, body, options).map( (response:Response) => response.json());
 }
 public registerExpenditure(name:any,amount1:any,kuanzia:any,mpaka:any,revenue:any){
  const token=this.loginService.getToken();
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers:headers
};
let body = JSON.stringify({name:name,amount:amount1,kuanzia:kuanzia,mpaka:mpaka,revenue_id:revenue});
return this.http.post("http://localhost/fypyear/public/api/expenditure?token=" + token, body, options).map( (response:Response) => response.json());
 }
//  public registerStudent(firstname:any,middlename:any,lastname:any,sex:any,birthdate:any,admisn:any,sclass:any,status:any,lifestatus:any,orphan:any,sdisability:any,nationality:any){
//   const token=this.loginService.getToken();
//   let headers = new Headers();
//   headers.append('Content-Type', 'application/json');

//   headers.append('X-Requested-With','XMLHttpRequest');
//   let options = {
//   headers:headers
// };
// let body = JSON.stringify({fname:firstname,mname:middlename,lname:lastname,sex:sex,bdate:birthdate,anumber:admisn,sclass_id:sclass,status:status,lstatus:lifestatus,orphan:orphan,sdisability_id:sdisability,nationality:nationality});
// return this.http.post("http://localhost/fypyear/public/api/student?token=" + token, body, options).map( (response:Response) => response.json());
//  }
 public registerAttendance(avgmale:any,avgfemale:any,from:any,to:any,sclass:any){
  const token=this.loginService.getToken();
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers:headers
};
let body = JSON.stringify({avmale:avgmale,avfemale:avgfemale,start_from:from,end_to:to,sclass_id:sclass});
return this.http.post("http://localhost/fypyear/public/api/attendance?token=" + token, body, options).map( (response:Response) => response.json());
 } 
 public registerStudent(firstname:any,middlename:any,lastname:any,sex:any,birthdate:any,admisn:any,sclass:any,status:any,lifestatus:any,orphan:any,sdisability:any,nationality:any,year:any){
  const token=this.loginService.getToken();
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers:headers
};
let body = JSON.stringify({fname:firstname,mname:middlename,lname:lastname,sex:sex,bdate:birthdate,anumber:admisn,sclass_id:sclass,status:status,lstatus:lifestatus,orphan:orphan,sdisability_id:sdisability,nationality:nationality,year:year});
return this.http.post("http://localhost/fypyear/public/api/student?token=" + token, body, options).map( (response:Response) => response.json());
 } 
 public viewIncategory(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/icategories',{headers:headers}).map(
(res:Response)=>res.json(),


    );
}
public viewRevenues(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/revenues',{headers:headers}).map(
(res:Response)=>res.json(),


    );
}
public viewExpenditures(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/expenditures',{headers:headers}).map(
(res:Response)=>res.json(),


    );
}

public viewInfrastructure(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/infrastructures',{headers:headers}).map(
(res:Response)=>res.json(),


    );
}
public viewStudents(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/students',{headers:headers}).map(
(res:Response)=>res.json(),


    );
}
public viewAttendances(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/attendances',{headers:headers}).map(
(res:Response)=>res.json(),


    );
}
public viewDisabilities(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/disabilities',{headers:headers}).map(
(res:Response)=>res.json(),


    );
}
public viewTlmaterials(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/tlmaterials',{headers:headers}).map(
(res:Response)=>res.json(),


    );
}
public viewEquipments(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/equipments',{headers:headers}).map(
(res:Response)=>res.json(),


    );
}
public viewTeachers(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/teachers',{headers:headers}).map(
(res:Response)=>res.json(),


    );
}
public viewNtStaff(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/ntstaffs',{headers:headers}).map(
(res:Response)=>res.json(),


    );
}

public viewEqcategory(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/eqcategories',{headers:headers}).map(
(res:Response)=>res.json(),


    );
}
public viewClasses(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/classes',{headers:headers}).map(
(res:Response)=>res.json(),


    );
}
public viewTlcategories(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/tlmcategories',{headers:headers}).map(
(res:Response)=>res.json(),


    );
}
 
public getDistricts(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/districts',{headers:headers}).map(
(res:Response)=>res.json(),


    );
}
// getDistricts():Observable<any>{
//   return this.http.get('http://localhost/fypyear/public/api/districts')
//   .map(
//       (response:Response) => {
//           return response.json().districts;
//       }
//   );
// }

public getWards(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/wards',{headers:headers}).map(
(res:Response)=>res.json(),


    );
}
}
