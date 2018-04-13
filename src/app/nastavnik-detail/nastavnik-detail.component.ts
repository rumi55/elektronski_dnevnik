import { Component, OnInit, Input } from '@angular/core';
import { Nastavnik } from '../nastavnik';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NastavnikService } from '../nastavnik.service';

@Component({
  selector: 'app-nastavnik-detail',
  templateUrl: './nastavnik-detail.component.html',
  styleUrls: ['./nastavnik-detail.component.css']
})
export class NastavnikDetailComponent implements OnInit {
  @Input() nastavnik: Nastavnik;
  nastavnikId: number = +this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private nastavnikService: NastavnikService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getNastavnik();
  }

  getNastavnik(): void {
  //  const id = +this.route.snapshot.paramMap.get('id');
    this.nastavnikService.getNastavnik(this.nastavnikId)
    .subscribe(nastavnik => this.nastavnik = nastavnik);
  }

  goBack(): void {
    this.location.back();
  }

  delete(nastavnik: Nastavnik): void {
  //this.ucenici = this.ucenici.filter(u => u !== ucenik);
  this.nastavnikService.deleteNastavnik(nastavnik).subscribe(() => this.goBack());
}

  save(): void {
  this.nastavnikService.updateNastavnik(this.nastavnik)
    .subscribe(() => this.goBack());
}

}
