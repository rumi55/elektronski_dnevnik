import { Component, OnInit, Input } from '@angular/core';
import { Odeljenje } from '../odeljenje';
import { OdeljenjeService } from '../odeljenje.service';
import { Roditelj } from '../roditelj';
import { RoditeljService } from '../roditelj.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-roditelji-po-odeljenjima',
  templateUrl: './roditelji-po-odeljenjima.component.html',
  styleUrls: ['./roditelji-po-odeljenjima.component.css']
})
export class RoditeljiPoOdeljenjimaComponent implements OnInit {

  roditelji: Roditelj[];
  odeljenjeId: number = +this.route.snapshot.paramMap.get('id');

  getRoditeljiByOdeljenje(): void {
    //const nastavnikId = +this.route.snapshot.paramMap.get('id');
    this.roditeljService.getRoditeljiByOdeljenje(this.odeljenjeId).subscribe(
      roditelji => this.roditelji = roditelji
    );
  }

  constructor(
    private roditeljService: RoditeljService,
    private route: ActivatedRoute,
    private location:Location
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getRoditeljiByOdeljenje();
  }
  }
