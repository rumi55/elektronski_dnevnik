import { Component, OnInit } from '@angular/core';
import { Odeljenje } from '../odeljenje';
import { OdeljenjeService } from '../odeljenje.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-odeljenje-razred',
  templateUrl: './odeljenje-razred.component.html',
  styleUrls: ['./odeljenje-razred.component.css']
})
export class OdeljenjeRazredComponent implements OnInit {

  odeljenja: Odeljenje[];
  selectedOdeljenje: Odeljenje;
  razredId: number = +this.route.snapshot.paramMap.get('id');

  filter: Odeljenje = new Odeljenje();
  numberOfOdeljenja: number;
  limit: number = 5;
  page: number = 1;

  constructor(
    private route: ActivatedRoute,
    private odeljenjeService: OdeljenjeService,
    private location: Location
  ) { }

  getOdeljenja(): void {
    this.odeljenjeService.getOdeljenja().subscribe(
      odeljenja => this.odeljenja = odeljenja
    );
  }

  onSelect(odeljenje: Odeljenje): void{
    this.selectedOdeljenje = odeljenje;
  }

  addOdeljenjeToRazred(): void {
    this.odeljenjeService.addOdeljenjeToRazred(this.selectedOdeljenje, this.razredId)
    .subscribe();
  }

  ngOnInit() {
    this.getOdeljenja();
  }

  goBack(): void {
    this.location.back();
  }

  }
