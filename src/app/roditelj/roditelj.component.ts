import { Component, OnInit } from '@angular/core';
import { Roditelj } from '../roditelj';
import { Ucenik } from '../ucenik';
import { TipKorisnika } from '../enumkorisnik';
import { RoditeljService } from '../roditelj.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-roditelj',
  templateUrl: './roditelj.component.html',
  styleUrls: ['./roditelj.component.css']
})
export class RoditeljComponent implements OnInit {

  roditelji: Roditelj[];
  ucenici: Ucenik[];
  selectedRoditelj: Roditelj;
  ucenikId: number = +this.route.snapshot.paramMap.get('id');

  filter: Roditelj = new Roditelj();
  numberOfRoditelji: number;
  limit: number = 5;
  page: number = 1;

  constructor(
    private route: ActivatedRoute,
    private roditeljService: RoditeljService,
    private location: Location
  ) { }

  getRoditelji(): void {
    this.roditeljService.getRoditelji().subscribe(
      roditelji => this.roditelji = roditelji
    );
  }

  onSelect(roditelj: Roditelj): void{
    this.selectedRoditelj = roditelj;
  }

  addUcenikToRoditelj(): void {
    this.roditeljService.addUcenikToRoditelj(this.selectedRoditelj, this.ucenikId)
    .subscribe(() => this.goBack());
  }

  ngOnInit() {
    this.getRoditelji();
  }

  goBack(): void {
    this.location.back();
  }

  }
