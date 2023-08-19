import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/Service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /**
   *
   */
  constructor(private accountSer:AccountService) {
   
    
  }
  loginForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  }); 
  ngOnInit(): void {
    
   }

onsubmit(){
  this.accountSer.Login(this.loginForm.value).subscribe({
    next:user=>console.log(user)
  });
  console.log();
}
}
