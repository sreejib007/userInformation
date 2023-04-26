import { Component, EventEmitter, Output } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  currentDate:Date
  searchText:string = '';
  
  constructor(private commonService: CommonService){
    this.currentDate = new Date();
  }

  search(){
    this.commonService.searchTextChange =   this.searchText;
  }
}
