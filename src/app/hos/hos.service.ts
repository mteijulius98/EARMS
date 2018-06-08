import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';

@Injectable()
export class HosService {
  public token=localStorage.getItem("token")
  constructor(private http:Http) { }
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
 public viewDetails(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/sdetails',{headers:headers}).map(
(res:Response)=>res.json(),


    );
}
}
