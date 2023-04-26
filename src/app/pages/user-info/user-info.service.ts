import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpService } from 'src/app/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private httpService:HttpService) { }

  getUserInfo(){
    const url = '/users'
    return this.httpService.httpGet(url).pipe(
      map((res)=>{
        return res;
      })
    )
  }
}
