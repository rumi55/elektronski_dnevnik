import { Component, OnInit } from '@angular/core';
import { Odeljenje } from '../odeljenje';
import { OdeljenjeService } from '../odeljenje.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-roditelj-odeljenje',
  templateUrl: './roditelj-odeljenje.component.html',
  styleUrls: ['./roditelj-odeljenje.component.css']
})
export class RoditeljOdeljenjeComponent implements OnInit {

  filter: Odeljenje = new Odeljenje();
  numberOfOdeljenja: number;
  limit: number = 5;
  page: number = 1;

    odeljenja: Odeljenje[];

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
