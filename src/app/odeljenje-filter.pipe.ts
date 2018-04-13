import { Pipe, PipeTransform } from '@angular/core';

import { Odeljenje } from './odeljenje';

@Pipe({
    name: 'odeljenjefilter',
    pure: false
})
export class OdeljenjeFilterPipe implements PipeTransform {
  transform(items: Odeljenje[], filter: Odeljenje): Odeljenje[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Odeljenje) => this.applyFilter(item, filter));
  }

  /**
   * Perform the filtering.
   *
   * @param {Odeljenje} odeljenje The book to compare to the filter.
   * @param {Odeljenje} filter The filter to apply.
   * @return {boolean} True if book satisfies filters, false if not.
   */
  applyFilter(odeljenje: Odeljenje, filter: Odeljenje): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (odeljenje[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (odeljenje[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
