import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private searchText:Subject<any> = new Subject();
  constructor() { }

  set searchTextChange(valaue:any){
    this.searchText.next(valaue)
  }
  get searchTextChange(){
    return this.searchText;
  }
}
