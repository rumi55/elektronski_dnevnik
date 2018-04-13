import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Nastavnik } from '../nastavnik';
import { NastavnikService } from '../nastavnik.service';

@Component({
  selector: 'app-nastavnik-search',
  templateUrl: './nastavnik-search.component.html',
  styleUrls: ['./nastavnik-search.component.css']
})
export class NastavnikSearchComponent implements OnInit {

  nastavnici$: Observable<Nastavnik[]>;
  private searchTerms = new Subject<string>();

  constructor(private nastavnikService: NastavnikService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.nastavnici$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.nastavnikService.searchNastavnici(term)),
    );
  }

}
