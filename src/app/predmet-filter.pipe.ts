import { Pipe, PipeTransform } from '@angular/core';

import { Predmet } from './predmet';

@Pipe({
    name: 'predmetfilter',
    pure: false
})
export class PredmetFilterPipe implements PipeTransform {
  transform(items: Predmet[], filter: Predmet): Predmet[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Predmet) => this.applyFilter(item, filter));
  }

  /**
   * Perform the filtering.
   *
   * @param {Predmet} ucenik The book to compare to the filter.
   * @param {Predmet} filter The filter to apply.
   * @return {Predmet} True if book satisfies filters, false if not.
   */
  applyFilter(predmet: Predmet, filter: Predmet): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (predmet[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (predmet[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
