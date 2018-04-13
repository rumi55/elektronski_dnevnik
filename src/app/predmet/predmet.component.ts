import { Component, OnInit, Input } from '@angular/core';
import { Predmet } from '../predmet';
import { PredmetService } from '../predmet.service';
import { Ucenik } from '../ucenik';
import { UcenikService } from '../ucenik.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OcenaService } from '../ocena.service';
import { Ocena } from '../ocena';

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.css']
})
export class PredmetComponent implements OnInit {

  predmeti: Predmet[];
  selectedPredmet: Predmet;
  ocene: Ocena[];

  filter1: Ocena = new Ocena();
  filter: Predmet = new Predmet();
  numberOfPredmeti: number;
  numberOfOcene: number;
  limit: number = 5;
  page: number = 1;
  limit1: number = 5;
  page1: number = 1;

  constructor(
    private predmetService: PredmetService,
    private ucenikService: UcenikService,
    private ocenaService: OcenaService,
    private route: ActivatedRoute,
    private location:Location
  ) { }

  getPredmeti(): void {
    this.predmetService.getPredmeti().subscribe(
      predmeti => this.predmeti = predmeti
    );
  }

  getPredmetiByUcenik(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ucenikService.getPredmetiByUcenik(id).subscribe(
      predmeti => this.predmeti = predmeti
    );
  }

  getOceneByUcenikAndPredmet(): void {
    const ucenikId = +this.route.snapshot.paramMap.get('id');
    const predmetId = this.selectedPredmet.id;
    this.ocenaService.getOceneByUcenikAndPredmet(ucenikId, predmetId).subscribe(
      ocene => this.ocene = ocene
    );
  }

  onSelect(predmet: Predmet): void{
    this.selectedPredmet = predmet;
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getPredmetiByUcenik();
  }

}
