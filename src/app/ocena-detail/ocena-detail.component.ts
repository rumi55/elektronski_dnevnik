import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Predmet } from '../predmet';
import { Ucenik } from '../ucenik';
import { PredmetService } from '../predmet.service';
import { OcenaService } from '../ocena.service';
import { Ocena } from '../ocena';
import { TipOcene } from '../enumocena';

@Component({
  selector: 'app-ocena-detail',
  templateUrl: './ocena-detail.component.html',
  styleUrls: ['./ocena-detail.component.css']
})
export class OcenaDetailComponent implements OnInit {

   ocene: Ocena[];
   Ocena: Ocena;

  nastavnikId: number = +this.route.snapshot.paramMap.get('nId');
  predmetId: number = +this.route.snapshot.paramMap.get('pId');
  ucenikId: number = +this.route.snapshot.paramMap.get('uId');

  filter1: Ocena = new Ocena();
  numberOfOcene: number;
  limit: number = 5;
  page: number = 1;
  minOcena: number = 1;
  maxOcena: number = 5;

  getOceneByUcenikAndPredmet(): void {
    this.ocenaService.getOceneByUcenikAndPredmet(this.ucenikId, this.predmetId).subscribe(
      ocene => this.ocene = ocene
    );
  }

  add(polugodiste, tipOcene, vrednost): void {
  this.ocenaService.addOcena({ polugodiste, tipOcene, vrednost } as Ocena, this.nastavnikId, this.ucenikId, this.predmetId)
    .subscribe(ocena => {
      this.ocene.push(ocena);
    });
  }


  zakljucnaOcenaPolugodiste: number = (this.izracunajZakljucnaOcenaPolugodiste1() ? this.zakljucnaOcenaPolugodiste:0);

  zakljucnaOcena: number = (this.izracunajZakljucnaOcena() ? this.zakljucnaOcena:0);

  izracunajZakljucnaOcenaPolugodiste1(): void {
    this.ocenaService.izracunajZakljucnaOcenaPolugodiste1(this.ucenikId, this.predmetId).subscribe(
      zakljucnaOcenaPolugodiste => this.zakljucnaOcenaPolugodiste = zakljucnaOcenaPolugodiste
    );
  }

  izracunajZakljucnaOcena(): void {
    this.ocenaService.izracunajZakljucnaOcena(this.ucenikId, this.predmetId).subscribe(
       zakljucnaOcena => this.zakljucnaOcena = zakljucnaOcena
    );
  }

/*  getZakljucnaPolugodiste1(): void {
    this.ocenaService.getZakljucnaPolugodiste1(this.ucenikId, this.predmetId).subscribe(
      ocene => this.ocene = ocene
    );
  }*/

  delete(ocena: Ocena): void {
  //this.ucenici = this.ucenici.filter(u => u !== ucenik);
  this.ocenaService.deleteOcena(ocena).subscribe();
}

  constructor(
    private route: ActivatedRoute,
    private location:Location,
    private ocenaService: OcenaService,
    ) { }


  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getOceneByUcenikAndPredmet();
  }
}
