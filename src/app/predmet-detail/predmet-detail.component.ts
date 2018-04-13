import { Component, OnInit, Input } from '@angular/core';
import { Predmet } from '../predmet';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PredmetService } from '../predmet.service';

@Component({
  selector: 'app-predmet-detail',
  templateUrl: './predmet-detail.component.html',
  styleUrls: ['./predmet-detail.component.css']
})
export class PredmetDetailComponent implements OnInit {

  @Input() predmet: Predmet;
  predmetId: number = +this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private predmetService: PredmetService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getPredmet();
  }

  getPredmet(): void {
  //  const id = +this.route.snapshot.paramMap.get('id');
    this.predmetService.getPredmet(this.predmetId)
    .subscribe(predmet => this.predmet = predmet);
  }

  goBack(): void {
    this.location.back();
  }

  delete(predmet: Predmet): void {
  //this.ucenici = this.ucenici.filter(u => u !== ucenik);
  this.predmetService.deletePredmet(predmet).subscribe(() => this.goBack());
}

  save(): void {
  this.predmetService.updatePredmet(this.predmet)
    .subscribe(() => this.goBack());
}

}
