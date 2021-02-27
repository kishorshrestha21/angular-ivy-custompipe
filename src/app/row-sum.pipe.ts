import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rowSum'
})
export class RowSumPipe implements PipeTransform {

  transform(value: any, arg1:any): any {
    let sum:number = value+arg1;
      console.log(sum)
    return sum;
  
  }

}