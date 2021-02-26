import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderFilter'
})
export class GenderFilterPipe implements PipeTransform {

  transform(value: any, searchGender:any): any {
   if (!value || !searchGender) {
      return value;
    }
    return value.filter(search => {
      return search.gender.toLowerCase().includes(searchGender.toLowerCase());
    });
  }

}