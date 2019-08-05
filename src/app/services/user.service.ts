import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { User } from "../models/UserInfo"

const Api_Url = 'http://localhost:5000';

interface ResponseData {
  "status": string;
  "data": User;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userInfo = new Subject<User>();

  constructor(private _http: HttpClient, private _router: Router) { }

  getMe() {
    return this._http.get(`${Api_Url}/user/me`, { headers: this.setHeader() }).subscribe((value : ResponseData) => {
      this.userInfo.next(value.data);
    });
  }

  editMe(data) {
    return this._http.put(`${Api_Url}/user/edit`, data, { headers: this.setHeader() });
  }

  deleteMe(auth_token) {
    return this._http.delete(`${Api_Url}/user/${auth_token}`, { headers: this.setHeader() });
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `${localStorage.getItem('auth_token')}`);
  }
}
