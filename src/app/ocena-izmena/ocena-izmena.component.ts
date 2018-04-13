import { Component, OnInit, Input } from '@angular/core';
import { Ocena } from '../ocena';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OcenaService } from '../ocena.service';

@Component({
  selector: 'app-ocena-izmena',
  templateUrl: './ocena-izmena.component.html',
  styleUrls: ['./ocena-izmena.component.css']
})
export class OcenaIzmenaComponent implements OnInit {
  @Input() ocena: Ocena;
  ocenaId: number = +this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private ocenaService: OcenaService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getOcena();
  }

  getOcena(): void {
  //  const id = +this.route.snapshot.paramMap.get('id');
    this.ocenaService.getOcena(this.ocenaId)
    .subscribe(ocena => this.ocena = ocena);
  }

  goBack(): void {
    this.location.back();
  }

  delete(ocena: Ocena): void {
  //this.ucenici = this.ucenici.filter(u => u !== ucenik);
  this.ocenaService.deleteOcena(ocena).subscribe();
}

  save(): void {
  this.ocenaService.updateOcena(this.ocena)
    .subscribe(() => this.goBack());
}

}
