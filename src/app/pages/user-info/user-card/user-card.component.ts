import { TitleCasePipe } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  providers: [TitleCasePipe],
  encapsulation: ViewEncapsulation.None
})
export class UserCardComponent {
  cardData:any;
  str: string= '' ;
  @Input() set user(val:any){
    this.cardData ={... val};
    let address = this.setCardData(val.address);
    this.cardData.address = address;
    
  }

  constructor(private titleCasePipe: TitleCasePipe){}

  setCardData(data:any, strData?:string){
    
    for (var key in data) {
      if (typeof data[key] === "object") {
        this.setCardData(data[key], this.str);
      } else {
        this.str= this.str+`<p class='row'>${this.titleCasePipe.transform(key)} : ${this.titleCasePipe.transform(data[key])}</p>`
      }
    }
    return this.str
    
  }
}
