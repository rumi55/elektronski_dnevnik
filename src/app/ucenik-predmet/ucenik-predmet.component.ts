import { Component, OnInit } from '@angular/core';
import { Ucenik } from '../ucenik';
import { UcenikService } from '../ucenik.service';
import { Predmet } from '../predmet';
import { PredmetService } from '../predmet.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OcenaService } from '../ocena.service';
import { Ocena } from '../ocena';

@Component({
  selector: 'app-ucenik-predmet',
  templateUrl: './ucenik-predmet.component.html',
  styleUrls: ['./ucenik-predmet.component.css']
})
export class UcenikPredmetComponent implements OnInit {

  predmeti: Predmet[];
  selectedUcenik: Ucenik;
  ocene: Ocena[];

  filter: Predmet = new Predmet();
  numberOfPredmeti: number;
  limit: number = 5;
  page: number = 1;

  nastavnikId: number = +this.route.snapshot.paramMap.get('nId');
  ucenikId: number = +this.route.snapshot.paramMap.get('uId');

  constructor(
    private predmetService: PredmetService,
    private route: ActivatedRoute,
    private location:Location,
    private ocenaService: OcenaService,
  ) { }

  getPredmetiByNastavnikAndUcenik(): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    this.predmetService.getPredmetiByNastavnikAndUcenik(this.nastavnikId, this.ucenikId).subscribe(
      predmeti => this.predmeti = predmeti
    );
  }

  goBack(): void {
    this.location.back();
  }

    ngOnInit() {
      this.getPredmetiByNastavnikAndUcenik();
    }

}
