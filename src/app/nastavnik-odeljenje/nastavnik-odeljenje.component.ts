import { Component, OnInit, Input } from '@angular/core';
import { Odeljenje } from '../odeljenje';
import { OdeljenjeService } from '../odeljenje.service';
import { Ucenik } from '../ucenik';
import { UcenikService } from '../ucenik.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nastavnik-odeljenje',
  templateUrl: './nastavnik-odeljenje.component.html',
  styleUrls: ['./nastavnik-odeljenje.component.css']
})
export class NastavnikOdeljenjeComponent implements OnInit {

  odeljenja: Odeljenje[];
  selectedOdeljenje: Odeljenje;
  ucenici: Ucenik[];
  nastavnikId: number = +this.route.snapshot.paramMap.get('id');

  filter: Odeljenje = new Odeljenje();
  filter1: Ucenik = new Ucenik();
  numberOfUcenici: number;
  numberOfOdeljenja: number;
  limit: number = 5;
  page: number = 1;
  limit1: number = 5;
  page1: number = 1;

  constructor(
    private odeljenjeService: OdeljenjeService,
    private ucenikService: UcenikService,
    private route: ActivatedRoute,
    private location:Location
  ) { }

  getOdeljenjaByNastavnik(): void {
    //const nastavnikId = +this.route.snapshot.paramMap.get('id');
    this.odeljenjeService.getOdeljenjaByNastavnik(this.nastavnikId).subscribe(
      odeljenja => this.odeljenja = odeljenja
    );
  }

  getUceniciByOdeljenje(): void {
    //const nastavnikId = +this.route.snapshot.paramMap.get('id');
    const odeljenjeId = this.selectedOdeljenje.id;
    this.ucenikService.getUcenikByOdeljenje(odeljenjeId).subscribe(
      ucenici => this.ucenici = ucenici
    );
  }

  /*getPredmetiByNastavnikAndOdeljenje(): void {
    //const nastavnikId = +this.route.snapshot.paramMap.get('id');
    const odeljenjeId = this.selectedOdeljenje.id;
    this.predmetService.getPredmetiByNastavnikAndOdeljenje(this.nastavnikId, odeljenjeId).subscribe(
      predmeti => this.predmeti = predmeti
    );
  }*/

  onSelect(odeljenje: Odeljenje): void{
    this.selectedOdeljenje = odeljenje;
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getOdeljenjaByNastavnik();
  }
}
