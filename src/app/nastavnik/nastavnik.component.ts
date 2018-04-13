import { Component, OnInit } from '@angular/core';
import { Nastavnik } from '../nastavnik';
import { TipKorisnika } from '../enumkorisnik';
import { NastavnikService } from '../nastavnik.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nastavnik',
  templateUrl: './nastavnik.component.html',
  styleUrls: ['./nastavnik.component.css']
})
export class NastavnikComponent implements OnInit {

  filter: Nastavnik = new Nastavnik();
  numberOfNastavnici: number;
  limit: number = 5;
  page: number = 1;


  nastavnici: Nastavnik[];

  constructor(
    private route: ActivatedRoute,
    private nastavnikService: NastavnikService,
    private location:Location
  ) { }

  getNastavnici(): void {
    this.nastavnikService.getNastavnici().subscribe(
      nastavnici => this.nastavnici = nastavnici
    );
  }

  /*delete(nastavnik: Nastavnik): void {
  this.nastavnici = this.nastavnici.filter(n => n !== nastavnik);
  this.nastavnikService.deleteNastavnik(nastavnik).subscribe();
}*/

  ngOnInit() {
    this.getNastavnici();
  }

  goBack(): void {
    this.location.back();
  }

  }
