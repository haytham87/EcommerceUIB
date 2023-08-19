import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, map } from 'rxjs';
import { User } from '../Models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient,private router:Router) { }
  private GetCurrentUserData=new ReplaySubject<User|null>(1);
  GetCurrentUserData$=this.GetCurrentUserData.asObservable();
  register(values:any)
  {
    return this.http.post<User>("https://localhost:7294/api/Account/Register",values).pipe(
      map(user=>{
        this.GetCurrentUserData.next(user);
        localStorage.setItem("token",user.Token);

      })
    )
   
  }

  Login(values:any)
  {
    return this.http.post<User>("https://localhost:7294/api/Account/Login",values).pipe(
      map(user=>{
        this.GetCurrentUserData.next(user);
        localStorage.setItem("token",user.Token);
return user;
      })
    )
   
  }
  LogOut()
  {
    localStorage.removeItem("Token");
    this.GetCurrentUserData.next(null);
    this.router.navigateByUrl("/");
  }
  checkEmail(email:string)
  {
    return this.http.get<boolean>("https://localhost:7294/api/Account/EmailExists?email="+email);
  }
}
