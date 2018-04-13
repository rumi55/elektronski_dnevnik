import { Component, OnInit, Input } from '@angular/core';
import { Odeljenje } from '../odeljenje';
import { OdeljenjeService } from '../odeljenje.service';
import { Ucenik } from '../ucenik';
import { UcenikService } from '../ucenik.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ucenici-po-odeljenjima',
  templateUrl: './ucenici-po-odeljenjima.component.html',
  styleUrls: ['./ucenici-po-odeljenjima.component.css']
})
export class UceniciPoOdeljenjimaComponent implements OnInit {

  ucenici: Ucenik[];
  odeljenjeId: number = +this.route.snapshot.paramMap.get('id');

  getUceniciByOdeljenje(): void {
    //const nastavnikId = +this.route.snapshot.paramMap.get('id');
    this.ucenikService.getUcenikByOdeljenje(this.odeljenjeId).subscribe(
      ucenici => this.ucenici = ucenici
    );
  }


  constructor(
    private odeljenjeService: OdeljenjeService,
    private ucenikService: UcenikService,
    private route: ActivatedRoute,
    private location:Location
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getUceniciByOdeljenje();
  }
  }
