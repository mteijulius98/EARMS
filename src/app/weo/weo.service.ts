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
    return this.http.get('http://localhost/fypyear/public/api/ws/'+ localStorage.getItem('wid'),{headers:headers}).map(
  (res:Response)=>res.json(),
      );
  }
  // 'http://localhost/fypyear/public/api/ws/'+ localStorage.getItem('eid')
  public viewSdatas(){ 
    const token=this.loginService.getToken();
    let headers=new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With','XMLHttpRequest');
    return this.http.get('http://localhost/fypyear/public/api/sdatas/'+ localStorage.getItem('sid') + '?token' + token,{headers:headers}).map(
  (res:Response)=>res.json(),
      );
  }
  public viewSorphans(){ 
    const token=this.loginService.getToken();
    let headers=new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With','XMLHttpRequest');
    return this.http.get('http://localhost/fypyear/public/api/sorphans/' + localStorage.getItem('sid') + '?token' + token,{headers:headers}).map(
  (res:Response)=>res.json(),
      );
  }

  public viewSdisable(){ 
    const token=this.loginService.getToken();
    let headers=new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With','XMLHttpRequest');
    return this.http.get('http://localhost/fypyear/public/api/sdisables/' + localStorage.getItem('sid') +  '?token=' + token,{headers:headers}).map(
  (res:Response)=>res.json(),
      );
      
  }
  public viewSpeschool(){ 
    const token=this.loginService.getToken();
    let headers=new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With','XMLHttpRequest');
    return this.http.get('http://localhost/fypyear/public/api/spesch/' + localStorage.getItem('sid'),{headers:headers}).map(
  (res:Response)=>res.json(),
      );
      
  }
  public viewWardinfo(){ 
    const token=this.loginService.getToken();
    let headers=new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With','XMLHttpRequest');
    return this.http.get('http://localhost/fypyear/public/api/infos/' + localStorage.getItem('wid'),{headers:headers}).map(
  (res:Response)=>res.json(),
      );
      
  }
  public viewWardis(){ 
    const token=this.loginService.getToken();
    let headers=new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With','XMLHttpRequest');
    return this.http.get('http://localhost/fypyear/public/api/wardis/' + localStorage.getItem('wid'),{headers:headers}).map(
  (res:Response)=>res.json(),
      );
      
  }
  public viewWardteachers(){ 
    const token=this.loginService.getToken();
    let headers=new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With','XMLHttpRequest');
    return this.http.get('http://localhost/fypyear/public/api/wardteach/' + localStorage.getItem('wid'),{headers:headers}).map(
  (res:Response)=>res.json(),
      );
      
  }

  public viewSchoolinfa(){ 
    const token=this.loginService.getToken();
    let headers=new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With','XMLHttpRequest');
    return this.http.get('http://localhost/fypyear/public/api/infas/' + localStorage.getItem('sid'),{headers:headers}).map(
  (res:Response)=>res.json(),
      );
      
  }
  public viewSchooltechs(){ 
    const token=this.loginService.getToken();
    let headers=new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With','XMLHttpRequest');
    return this.http.get('http://localhost/fypyear/public/api/techs/' + localStorage.getItem('sid'),{headers:headers}).map(
  (res:Response)=>res.json(),
      );
      
  }
  
}
