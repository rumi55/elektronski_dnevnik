import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Roditelj } from '../roditelj';
import { RoditeljService } from '../roditelj.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adminroditelj-search',
  templateUrl: './adminroditelj-search.component.html',
  styleUrls: ['./adminroditelj-search.component.css']
})
export class AdminroditeljSearchComponent implements OnInit {

  roditelji$: Observable<Roditelj[]>;
  roditelji: Roditelj[];
  private searchTerms = new Subject<string>();

  constructor(
    private roditeljService: RoditeljService,
    private location:Location
  ) { }

  add(tipKorisnika, ime, prezime, datumRodjenja, jmbg, adresa, email): void {
  this.roditeljService.addRoditelj({ tipKorisnika, ime, prezime, datumRodjenja, jmbg, adresa, email } as Roditelj)
    .subscribe(roditelj => {
      this.roditelji.push(roditelj);
    });
}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.roditelji$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.roditeljService.searchRoditelji(term)),
    );
  }

}
