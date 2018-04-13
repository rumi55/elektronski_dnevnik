import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Ucenik } from '../ucenik';
import { UcenikService } from '../ucenik.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminucenik-search',
  templateUrl: './adminucenik-search.component.html',
  styleUrls: ['./adminucenik-search.component.css']
})
export class AdminucenikSearchComponent implements OnInit {

  ucenici$: Observable<Ucenik[]>;
  ucenici: Ucenik[];
  private searchTerms = new Subject<string>();

  constructor(
    private ucenikService: UcenikService,
    private location:Location
   ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  add(tipKorisnika, ime, prezime, datumRodjenja, jmbg, adresa, email): void {
  this.ucenikService.addUcenik({ tipKorisnika, ime, prezime, datumRodjenja, jmbg, adresa, email } as Ucenik)
    .subscribe(ucenik => {
      this.ucenici.push(ucenik);
    });
}


  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.ucenici$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.ucenikService.searchUcenici(term)),
    );
  }

}
