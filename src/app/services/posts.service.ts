import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Api_Url ="http://localhost:5000";


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http: HttpClient) { }

  getPost(id) {
    return this._http.get(`${Api_Url}/tcs/${id}`)
  }

  getAll() {
    return this._http.get(`${Api_Url}/tcs/whatever`)
  }
}
