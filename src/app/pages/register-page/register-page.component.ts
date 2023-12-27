import { Component } from '@angular/core';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  userModel:IUser={};

  constructor(){
    /*dummy data
    this.userModel={
     firstName:'mark',
     email:'mark@gmail.com',
      mobile:999999,
      password:'123456'
    }  */
  }
  onSubmitHandler(data:any){
    console.log(this.userModel);
  }


}
