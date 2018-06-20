import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformTask'  // pojawi się po |
})
export class TransformTaskPipe implements PipeTransform {

  transform(value: string, args: string= ''): any {
    return value.charAt(0).toUpperCase() + value.slice(1) + args;
  }

}
