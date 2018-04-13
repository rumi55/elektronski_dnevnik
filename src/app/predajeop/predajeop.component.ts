import { Component, OnInit, Input } from '@angular/core';
import { Nastavnik } from '../nastavnik';
import { NastavnikService } from '../nastavnik.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-predajeop',
  templateUrl: './predajeop.component.html',
  styleUrls: ['./predajeop.component.css']
})
export class PredajeopComponent implements OnInit {

  nastavnici: Nastavnik[];
  odeljenjeId: number = +this.route.snapshot.paramMap.get('id');

  filter: Nastavnik = new Nastavnik();
  numberOfNastavnici: number;
  limit: number = 5;
  page: number = 1;

  getNastavnici(): void {
    this.nastavnikService.getNastavnici().subscribe(
      nastavnici => this.nastavnici = nastavnici
    );
  }

  constructor(
    private nastavnikService: NastavnikService,
    private route: ActivatedRoute,
    private location:Location
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getNastavnici();
  }

}
