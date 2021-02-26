import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "nameFilter"
})
export class NameFilterPipe implements PipeTransform {
  transform(value: any, searchItem: any): any {
    if (!value || !searchItem) {
      return value;
    }
    return value.filter(search => {
      return search.name.toLowerCase().includes(searchItem.toLowerCase());
    });
  }
}
