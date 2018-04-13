import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Ucenik } from '../ucenik';
import { UcenikService } from '../ucenik.service';

@Component({
  selector: 'app-ucenik-search',
  templateUrl: './ucenik-search.component.html',
  styleUrls: ['./ucenik-search.component.css']
})
export class UcenikSearchComponent implements OnInit {

  ucenici$: Observable<Ucenik[]>;
  private searchTerms = new Subject<string>();

  constructor(private ucenikService: UcenikService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.ucenici$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.ucenikService.searchUcenici(term)),
    );
  }

}
