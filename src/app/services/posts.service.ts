import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Api_Url = 'travelb.us-east-1.elasticbeanstalk.com';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http: HttpClient) { }
}
