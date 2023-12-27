import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL='https://api.escuelajs.co/api/v1'

  constructor(private http: HttpClient) { }

  //register
  register(user:any):Observable<any>{
    return this.http.post<any>(`${this.BASE_URL}/auth/register`,user)
  }

    //login
    login(user:any):Observable<any>{
      return this.http.post<any>(`${this.BASE_URL}/auth/login`,user)
    }

    //logout
    logout(){
      //localStorage.removeItem('key')
      localStorage.clear();
    }

    //checklogin status

    getToken():boolean{
      if(localStorage.getItem('token')){
        //if user already logged in
        return true;
      }else{
        //user not logged in
        return false;
      }
    }
}
