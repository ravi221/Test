import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortWithComparator'
})
export class SortWithComparatorPipe implements PipeTransform {
  transform(array: Array<any>, comparator: (first: any, second: any) => number): Array<any> {
    const shallowArrayCopy = array.slice(0);
    return shallowArrayCopy.sort(comparator);
  }
}
