import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notHidden'
})
export class NotHiddenPipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
    return value ? value.filter(x => !x.isHidden) : [];
  }

}
