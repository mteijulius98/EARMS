import { Injectable,Input } from '@angular/core';
import { LoginServiceService } from '../login/login-service.service';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class WeoService {
  public token=localStorage.getItem("token")
  constructor(private loginService:LoginServiceService,private http:Http) { }
  public viewWschools(){ 
    const token=this.loginService.getToken();
    let headers=new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With','XMLHttpRequest');
    return this.http.get('http://localhost/fypyear/public/api/swards?token='+ token,{headers:headers}).map(
  (res:Response)=>res.json(),
      );
  }
  public viewSdatas(){ 
    const token=this.loginService.getToken();
    let headers=new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With','XMLHttpRequest');
    return this.http.get('http://localhost/fypyear/public/api/sdatas?token='+ token,{headers:headers}).map(
  (res:Response)=>res.json(),
      );
  }
  public viewSorphans(){ 
    const token=this.loginService.getToken();
    let headers=new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With','XMLHttpRequest');
    return this.http.get('http://localhost/fypyear/public/api/sorphans?token='+ token,{headers:headers}).map(
  (res:Response)=>res.json(),
      );
  }
  // public viewSdisable(){ 
  //   const token=this.loginService.getToken();
  //   let headers=new Headers()
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('X-Requested-With','XMLHttpRequest');
  //   return this.http.get('http://localhost/fypyear/public/api/sdisables?token='+ token,{headers:headers}).map(
  // (res:Response)=>res.json(),
  //     );
  // }
  public viewSdisable(id:number){ 
    const token=this.loginService.getToken();
    let headers=new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With','XMLHttpRequest');
    return this.http.get('http://localhost/fypyear/public/api/sdisables/' + id +  '?token=' + token,{headers:headers}).map(
  (res:Response)=>res.json(),
      );
      //'http://localhost/ng2-server/public/api/quote/' + id + '?token=' + token
  }
}
