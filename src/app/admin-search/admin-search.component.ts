import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Administrator } from '../admin';
import { AdminService } from '../admin.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.css']
})
export class AdminSearchComponent implements OnInit {

  administratori$: Observable<Administrator[]>;
  administratori: Administrator[];
  private searchTerms = new Subject<string>();

  constructor(
    private adminService: AdminService,
    private location:Location
  ) { }

  add(tipKorisnika, ime, prezime, datumRodjenja, jmbg, adresa, email): void {
  this.adminService.addAdministrator({ tipKorisnika, ime, prezime, datumRodjenja, jmbg, adresa, email } as Administrator)
    .subscribe(administrator => {
      this.administratori.push(administrator);
    });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.administratori$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.adminService.searchAdministratori(term)),
    );
  }

  }
