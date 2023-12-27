import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root',
})

export class AuthGuard implements CanActivate{
  

  constructor(private authSevice:AuthService,private router:Router){

  }

  canActivate():boolean{
    if(this.authSevice.getToken()){
      return true;

    }else{
      this.router.navigateByUrl('login');
      return false;
    }
  }
}