import { Component, OnInit, Input } from '@angular/core';
import { Odeljenje } from '../odeljenje';
import { OdeljenjeService } from '../odeljenje.service';
import { Predmet } from '../predmet';
import { PredmetService } from '../predmet.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Nastavnik } from '../nastavnik';
import { NastavnikService } from '../nastavnik.service';

@Component({
  selector: 'app-predajeopn',
  templateUrl: './predajeopn.component.html',
  styleUrls: ['./predajeopn.component.css']
})
export class PredajeopnComponent implements OnInit {

  odeljenjeId: number = +this.route.snapshot.paramMap.get('oid');
  nastavnikId: number = +this.route.snapshot.paramMap.get('nid');
  selectedPredmet: Predmet;
    //selectedPredmet: Predmet;
  predmeti: Predmet[];

  filter: Predmet = new Predmet();
  numberOfPredmeti: number;
  limit: number = 5;
  page: number = 1;

  getPredmeti(): void {
    this.predmetService.getPredmeti().subscribe(
      predmeti => this.predmeti = predmeti
    );
  }

  onSelect(predmet: Predmet): void{
    this.selectedPredmet = predmet;
  }

  addPredmetToNastavnikAndOdeljenje(): void {
    this.predmetService.addPredmetToNastavnikAndOdeljenje(this.selectedPredmet, this.nastavnikId, this.odeljenjeId)
    .subscribe(() => this.goBack());
  }

    /*(predaje => {
      this.predaju.push(predaje);
  });
}*/


  constructor(
    private predmetService: PredmetService,
    private route: ActivatedRoute,
    private location:Location
  ) { }

  ngOnInit() {
    this.getPredmeti();
  }

  goBack(): void {
    this.location.back();
  }


}
