import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Ucenik } from '../ucenik';
import { UcenikService } from '../ucenik.service';

@Component({
  selector: 'app-roditelj-ucenik',
  templateUrl: './roditelj-ucenik.component.html',
  styleUrls: ['./roditelj-ucenik.component.css']
})
export class RoditeljUcenikComponent implements OnInit {

  ucenici: Ucenik[];

  constructor(
    private ucenikService: UcenikService,
    private route: ActivatedRoute,
    private location:Location
  ) { }

  getUcenikByRoditelj(): void {
    const roditeljId = +this.route.snapshot.paramMap.get('id');
    this.ucenikService.getUcenikByRoditelj(roditeljId).subscribe(
      ucenici => this.ucenici = ucenici
    );
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getUcenikByRoditelj();
  }
}
