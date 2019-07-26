import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { RegisterUser } from '../models/RegisterUser';
import { Token } from '../models/Token';
import { LoginUser } from "../models/loginUser"
import { User } from "../models/UserInfo"

const Api_Url = 'http://localhost:5000';

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

  login(loginUserData: LoginUser) {
    return this._http.post(`${Api_Url}/auth/login`, loginUserData).subscribe
    ( (token: Token) => {
      localStorage.setItem("auth_token", token.Authorization);
      this.getMe();
      this._router.navigate(["/home/logged-in"]);
      this.isLoggedIn.next(true);
    });
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false))};

    this._http.get(`${Api_Url}/Profile`, { headers: this.setHeader() });
    this._router.navigate(['profile']);
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);

    this._http.post(`${Api_Url}/logout`, { headers: this.setHeader() });
    this._router.navigate(['/login']);
  }

  getMe() {
    return this._http.get(`${Api_Url}/users/me`, { headers: this.setHeader() })
    .subscribe( (user: User) => { this.userInfo.next(user); });
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
