import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(value: Array<any>, args: string): any {
    let searchResult:Array<any> = [];
    if(args && args.trim()!==''){
      value.forEach((val)=>{
        if(val.username.toLowerCase().includes(args.toLowerCase())){
          searchResult.push(val)
        }
      })
      return searchResult;
    }
    return value;
  }

}
