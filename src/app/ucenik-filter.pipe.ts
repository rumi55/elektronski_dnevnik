import { Pipe, PipeTransform } from '@angular/core';

import { Ucenik } from './ucenik';

@Pipe({
    name: 'ucenikfilter',
    pure: false
})
export class UcenikFilterPipe implements PipeTransform {
  transform(items: Ucenik[], filter: Ucenik): Ucenik[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Ucenik) => this.applyFilter(item, filter));
  }


  /**
   * Perform the filtering.
   *
   * @param {Ucenik} ucenik The book to compare to the filter.
   * @param {Ucenik} filter The filter to apply.
   * @return {boolean} True if book satisfies filters, false if not.
   */
  applyFilter(ucenik: Ucenik, filter: Ucenik): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (ucenik[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (ucenik[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }


}
