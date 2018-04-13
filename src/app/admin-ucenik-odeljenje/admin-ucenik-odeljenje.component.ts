import { Component, OnInit } from '@angular/core';
import { Odeljenje } from '../odeljenje';
import { OdeljenjeService } from '../odeljenje.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-ucenik-odeljenje',
  templateUrl: './admin-ucenik-odeljenje.component.html',
  styleUrls: ['./admin-ucenik-odeljenje.component.css']
})
export class AdminUcenikOdeljenjeComponent implements OnInit {

  odeljenja: Odeljenje[];

  filter: Odeljenje = new Odeljenje();
  numberOfOdeljenja: number;
  limit: number = 5;
  page: number = 1;

  getOdeljenja(): void {
    this.odeljenjeService.getOdeljenja().subscribe(
      odeljenja => this.odeljenja = odeljenja
    );
  }

  constructor(
    private route: ActivatedRoute,
    private odeljenjeService: OdeljenjeService,
    private location:Location
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getOdeljenja();
  }

  }
