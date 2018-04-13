import { Component, OnInit, Input } from '@angular/core';
import { Predmet } from '../predmet';
import { PredmetService } from '../predmet.service';
import { Nastavnik } from '../nastavnik';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nastavnik-predmet',
  templateUrl: './nastavnik-predmet.component.html',
  styleUrls: ['./nastavnik-predmet.component.css']
})
export class NastavnikPredmetComponent implements OnInit {

  @Input() nastavnik: Nastavnik;

  predmeti: Predmet[];

  constructor(
    private predmetService: PredmetService,
    private route: ActivatedRoute,
    private location:Location
  ) { }

  getPredmetiByNastavnik(): void {
    const nastavnikId = +this.route.snapshot.paramMap.get('id');
    this.predmetService.getPredmetiByNastavnik(nastavnikId).subscribe(
      predmeti => this.predmeti = predmeti
    );
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getPredmetiByNastavnik();
  }
}
