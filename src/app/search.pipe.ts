import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if(!value || !args){
      return value
    }
    return value.filter(search => {
      return search.name.toLowerCase().includes(args.toLowerCase())||
      search.gender.toLowerCase().includes(args.toLowerCase())||
      search.city.toLowerCase().includes(args.toLowerCase())
      ;
    });

  }


}