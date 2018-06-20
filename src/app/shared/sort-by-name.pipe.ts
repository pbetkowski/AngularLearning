import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/task';

@Pipe({
  name: 'sortByName',
  pure: true
})
export class SortByNamePipe implements PipeTransform {

  transform(value: Array<Task>, args?: any): Array<Task> {
    return value.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
