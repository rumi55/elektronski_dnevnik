import { Component, OnInit } from '@angular/core';
import { Ucenik } from '../ucenik';
import { UcenikService } from '../ucenik.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ucenik-odeljenje',
  templateUrl: './ucenik-odeljenje.component.html',
  styleUrls: ['./ucenik-odeljenje.component.css']
})
export class UcenikOdeljenjeComponent implements OnInit {

  ucenici: Ucenik[];
  selectedUcenik: Ucenik;
  odeljenjeId: number = +this.route.snapshot.paramMap.get('id');

  filter: Ucenik = new Ucenik();
  numberOfUcenici: number;
  limit: number = 5;
  page: number = 1;

  constructor(
    private route: ActivatedRoute,
    private ucenikService: UcenikService,
    private location: Location
  ) { }

  getUcenici(): void {
    this.ucenikService.getUcenici().subscribe(
      ucenici => this.ucenici = ucenici
    );
  }

  onSelect(ucenik: Ucenik): void{
    this.selectedUcenik = ucenik;
  }

  addUcenikToOdeljenje(): void {
    this.ucenikService.addUcenikToOdeljenje(this.selectedUcenik, this.odeljenjeId)
    .subscribe(/*() => this.goBack()*/);
  }

  ngOnInit() {
    this.getUcenici();
  }

  goBack(): void {
    this.location.back();
  }

  }
