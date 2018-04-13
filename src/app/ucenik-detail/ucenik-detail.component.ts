import { Component, OnInit, Input } from '@angular/core';
import { Ucenik } from '../ucenik';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UcenikService } from '../ucenik.service';

@Component({
  selector: 'app-ucenik-detail',
  templateUrl: './ucenik-detail.component.html',
  styleUrls: ['./ucenik-detail.component.css']
})
export class UcenikDetailComponent implements OnInit {
  @Input() ucenik: Ucenik;
  ucenici: Ucenik[];
  ucenikId: number = +this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private ucenikService: UcenikService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getUcenik();
  }

  getUcenik(): void {
    //const id = +this.route.snapshot.paramMap.get('id'); //from string to number
    this.ucenikService.getUcenik(this.ucenikId)    //poziva metodu getUcenikById iz servisa
    .subscribe(ucenik => this.ucenik = ucenik);
  }

  goBack(): void {
    this.location.back();
  }

  delete(ucenik: Ucenik): void {
  //this.ucenici = this.ucenici.filter(u => u !== ucenik);
  this.ucenikService.deleteUcenik(ucenik).subscribe();
}

   save(): void {
   this.ucenikService.updateUcenik(this.ucenik)
     .subscribe(() => this.goBack());
 }
}
