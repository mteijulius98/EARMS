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
 public viewInfrastructures(){
  const token=this.loginService.getToken(); 
  let headers=new Headers()
   headers.append('Content-Type', 'application/json');
   headers.append('X-Requested-With','XMLHttpRequest');
  return this.http.get('http://localhost/fypyear/public/api/infrastructures?token=' + token,{headers:headers}).map(
(res:Response)=>res.json(),


    );
}
 public registerTlmaterial(name:any,tlcategory:any,sclass:any,available:any){
  const token=this.loginService.getToken();
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers:headers
};

let body = JSON.stringify({name:name,available:available,sclass_id:sclass,category_id:tlcategory});
return this.http.post("http://localhost/fypyear/public/api/tlmaterial?token=" + token, body, options).map( (response:Response) => response.json());
 }
 public registerEquipment(name:any,eqcategory:any,sclass:any,available:any){
  const token=this.loginService.getToken();
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers:headers
};

let body = JSON.stringify({name:name,available:available,sclass_id:sclass,eqcategory_id:eqcategory});
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
 public viewIncategory(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/icategories',{headers:headers}).map(
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
