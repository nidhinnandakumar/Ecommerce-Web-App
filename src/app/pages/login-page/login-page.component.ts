import { Component } from '@angular/core';

import{FormGroup,FormControl,Validator,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  // loginForm =new FormGroup({
  //   email:new FormControl('abc'),
  //   password:new FormControl(),  //instance of form control
  // });

  responseText=''
  alertClass=''

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router
    ){



  }
  loginForm=this.formBuilder.group({
    email:[null,[Validators.required,Validators.email]],
    password:[null,[Validators.required,Validators.minLength(6)]]
  })

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  onSubmutHandler(){
   // console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((response:any)=>{
          //callback function for success
          this.responseText='login success, thank you'
          this,this.alertClass='alert alert-success'

          localStorage.setItem('token',response.access_token)
          this.router.navigateByUrl('')

//console.log(response)
    },(error:any)=>{
          //callback function for failure
          this.responseText='Oops! somethong went wrong, try again'
          this,this.alertClass='alert alert-danger'
      console.log(error)
    })

  }


}
