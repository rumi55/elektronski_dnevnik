import { Component, OnInit } from '@angular/core';
import { Odeljenje } from '../odeljenje';
import { OdeljenjeService } from '../odeljenje.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-odeljenje',
  templateUrl: './odeljenje.component.html',
  styleUrls: ['./odeljenje.component.css']
})
export class OdeljenjeComponent implements OnInit {

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

  add(oznaka: string): void {
  if (!oznaka) { return; }
  this.odeljenjeService.addOdeljenje({ id: null, oznaka: oznaka } as Odeljenje)
    .subscribe(odeljenje => {
      this.odeljenja.push(odeljenje);
    });
  }
  delete(odeljenje: Odeljenje): void {
  this.odeljenja = this.odeljenja.filter(o => o !== odeljenje);
  this.odeljenjeService.deleteOdeljenje(odeljenje).subscribe();
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
