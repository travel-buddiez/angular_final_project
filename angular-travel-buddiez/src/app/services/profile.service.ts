import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const Api_Url = '';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _http: HttpClient) { }

  getProfile() {
    return this._http.get(`${Api_Url}/Profile`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
