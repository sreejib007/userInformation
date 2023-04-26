import { Component, OnInit } from '@angular/core';
import { UserInfoService } from './user-info.service';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  usersInfo:Array<any> = [];
  searchText:string = ''
  constructor(private userInfoService: UserInfoService, private commonService: CommonService){}
  ngOnInit() {
    this.userInfoService.getUserInfo().subscribe((res:any)=>{
      this.usersInfo = res;
    })
    this.commonService.searchTextChange.subscribe((val:string)=>{
      this.searchText = val;
    })
  }
}
