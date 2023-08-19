import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Service/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private accountSer:AccountService,private route:Router) {
   
    
  }
  registerForm=new FormGroup({
    displayName:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  }); 
  onsubmit(){
    this.accountSer.register(this.registerForm.value).subscribe({
      next: ()=> this.route.navigateByUrl('/Home')
    });
    console.log();
  }
}
