import { Pipe, PipeTransform } from '@angular/core';

import { Roditelj } from './roditelj';

@Pipe({
    name: 'roditeljfilter',
    pure: false
})
export class RoditeljFilterPipe implements PipeTransform {
  transform(items: Roditelj[], filter: Roditelj): Roditelj[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Roditelj) => this.applyFilter(item, filter));
  }

  /**
   * Perform the filtering.
   *
   * @param {Roditelj} ucenik The book to compare to the filter.
   * @param {Roditelj} filter The filter to apply.
   * @return {Roditelj} True if book satisfies filters, false if not.
   */
  applyFilter(roditelj: Roditelj, filter: Roditelj): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (roditelj[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (roditelj[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
