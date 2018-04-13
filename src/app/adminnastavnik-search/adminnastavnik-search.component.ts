import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Nastavnik } from '../nastavnik';
import { NastavnikService } from '../nastavnik.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adminnastavnik-search',
  templateUrl: './adminnastavnik-search.component.html',
  styleUrls: ['./adminnastavnik-search.component.css']
})
export class AdminnastavnikSearchComponent implements OnInit {

  nastavnici$: Observable<Nastavnik[]>;
  nastavnici: Nastavnik[];
  private searchTerms = new Subject<string>();

  constructor(
    private nastavnikService: NastavnikService,
    private location:Location
  ) { }

  add(tipKorisnika, ime, prezime, datumRodjenja, jmbg, adresa, email): void {
  this.nastavnikService.addNastavnik({ tipKorisnika, ime, prezime, datumRodjenja, jmbg, adresa, email } as Nastavnik)
    .subscribe(nastavnik => {
      this.nastavnici.push(nastavnik);
    });
}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.nastavnici$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.nastavnikService.searchNastavnici(term)),
    );
  }

}
