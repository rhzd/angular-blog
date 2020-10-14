import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterWord' })
export class FilterWord implements PipeTransform {
  transform(objects: any = [], value: string): any {
    if (value) {
      return objects.filter((el: any = {}) => {
        for (var key in el) {
          if (key !== 'id' && key !== 'postId') {
            if (el[key].toLowerCase().indexOf(value.toLowerCase()) !== -1) {
              return el;
            }
          }
        }
      });
    } else {
      return objects;
    }
  }
}
