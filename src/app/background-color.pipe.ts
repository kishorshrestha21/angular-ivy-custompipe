import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backgrounColor'
})
export class BackgroundColorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}