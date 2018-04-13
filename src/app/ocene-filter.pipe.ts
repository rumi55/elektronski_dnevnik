import { Pipe, PipeTransform } from '@angular/core';

import { Ocena } from './ocena';

@Pipe({
    name: 'ocenafilter',
    pure: false
})
export class OceneFilterPipe implements PipeTransform {
  transform(items: Ocena[], filter1: Ocena): Ocena[] {
    if (!items || !filter1) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Ocena) => this.applyFilter(item, filter1));
  }

  /**
   * Perform the filtering.
   *
   * @param {Ocena} ocena The book to compare to the filter.
   * @param {Ocena} filter The filter to apply.
   * @return {boolean} True if book satisfies filters, false if not.
   */
  applyFilter(ocena: Ocena, filter1: Ocena): boolean {
    for (let field in filter1) {
      if (filter1[field]) {
        if (typeof filter1[field] === 'string') {
          if (ocena[field].toLowerCase().indexOf(filter1[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter1[field] === 'number') {
          if (ocena[field] !== filter1[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
