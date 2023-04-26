import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl:string = 'https://jsonplaceholder.typicode.com'
  constructor(private http:HttpClient) { }


  httpGet(url:string){
    const getUserInfoUrl = this.baseUrl+url;
    return this.http.get(getUserInfoUrl);
  }

  // we will creat 3 more for post, put, delete

  
}
