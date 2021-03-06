import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { RegisterUser } from '../models/RegisterUser';
import { Token } from '../models/Token';
import { LoginUser } from '../models/loginUser'
import { User } from '../models/UserInfo'

const Api_Url = 'http://127.0.0.1:5000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo = new Subject<User>();
  isLoggedIn = new Subject<boolean>();

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/user/`, regUserData);
  }

  login(loginUserData: LoginUser, callback: Function) {
    return this._http.post(`${Api_Url}/auth/login`, loginUserData).subscribe
    ( (token: Token) => {
      localStorage.setItem('auth_token', token.Authorization);
      this.isLoggedIn.next(true);
      callback();
    });
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);
    this._router.navigate(['login']);
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `${localStorage.getItem('auth_token')}`);
  }
}
