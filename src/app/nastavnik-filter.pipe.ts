import { Pipe, PipeTransform } from '@angular/core';

import { Nastavnik } from './nastavnik';

@Pipe({
    name: 'nastavnikfilter',
    pure: false
})
export class NastavnikFilterPipe implements PipeTransform {
  transform(items: Nastavnik[], filter: Nastavnik): Nastavnik[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Nastavnik) => this.applyFilter(item, filter));
  }

  /**
   * Perform the filtering.
   *
   * @param {Nastavnik} ucenik The book to compare to the filter.
   * @param {Nastavnik} filter The filter to apply.
   * @return {boolean} True if book satisfies filters, false if not.
   */
  applyFilter(nastavnik: Nastavnik, filter: Nastavnik): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (nastavnik[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (nastavnik[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
