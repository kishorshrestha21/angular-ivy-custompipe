import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalSumKoSum'
})
export class TotalSumKoSumPipe implements PipeTransform {

  transform(value: any, arg1:any): any {
    let sum:number = value+arg1;
     return  value.reduce((a,b) => a+b [sum],0);
  
  }

}

//  transform(value: any, attr:string): any {
//     return  value.reduce((a,b) => a+b [attr],0);
//   }