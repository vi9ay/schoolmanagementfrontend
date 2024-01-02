import { animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private router:Router){ }

  loginObj:Login=new Login();

  login(emil:any, password:any) :Observable<any>{


    this.loginObj.email=emil;
    this.loginObj.password=password;
  
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(this.loginObj);

    console.log(body);
    
   return this.http.post("http://localhost:8080/useradmin/auth/signin", this.loginObj,{'headers':headers});
    
  }

  signUpObj:SignUp=new SignUp();
  signUp(name:any, username:any, email:any, password:any){
    this.signUpObj.name=name;
    this.signUpObj.username=username;
    this.signUpObj.email=email;
    this.signUpObj.password=password;

    const headers={'content-type':'application/json'};
    const body=JSON.stringify(this.signUpObj);

    console.log(body);

    return this.http.post("http://localhost:8080/useradmin/auth/signup", this.signUpObj,{'headers':headers});
    
  }
}

export class Login{
  email:any;
  password:any;
}

export class SignUp{
  name:any;
  email:any;
  username:any;
  password:any;
}