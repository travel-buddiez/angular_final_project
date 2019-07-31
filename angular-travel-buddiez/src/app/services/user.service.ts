import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { User } from "../models/UserInfo"

const Api_Url = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userInfo = new Subject<User>();

  constructor(private _http: HttpClient, private _router: Router) { }

  getMe(public_id) {
    return this._http.get(`${Api_Url}/users/${public_id}`, { headers: this.setHeader() });
  }

  editMe(auth_token) {
    return this._http.put(`${Api_Url}/users/edit/${auth_token}`, { headers: this.setHeader() });
  }

  deleteMe(auth_token) {
    return this._http.delete(`${Api_Url}/users/${auth_token}`, { headers: this.setHeader() });
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
