import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Predmet } from '../predmet';
import { PredmetService } from '../predmet.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adminpredmet-search',
  templateUrl: './adminpredmet-search.component.html',
  styleUrls: ['./adminpredmet-search.component.css']
})
export class AdminpredmetSearchComponent implements OnInit {

  predmeti$: Observable<Predmet[]>;
  predmeti: Predmet[];
  private searchTerms = new Subject<string>();

  constructor(
    private predmetService: PredmetService,
    private location:Location
  ) { }

  add(naziv, fond): void {
  this.predmetService.addPredmet({ naziv, fond } as Predmet)
    .subscribe(predmet => {
      this.predmeti.push(predmet);
    });
}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.predmeti$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.predmetService.searchPredmeti(term)),
    );
  }

}
