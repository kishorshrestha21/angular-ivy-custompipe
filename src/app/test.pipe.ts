import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let data =args[1] + (value+args[0]);
    return data;
  }

}