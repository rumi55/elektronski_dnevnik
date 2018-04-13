import { Component, OnInit } from '@angular/core';
import { Ucenik } from '../ucenik';
import { UcenikService } from '../ucenik.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-ucenik-roditelj',
  templateUrl: './admin-ucenik-roditelj.component.html',
  styleUrls: ['./admin-ucenik-roditelj.component.css']
})
export class AdminUcenikRoditeljComponent implements OnInit {

  ucenici: Ucenik[];

  constructor(
    private route: ActivatedRoute,
    private ucenikService: UcenikService,
    private location:Location
  ) { }

  filter: Ucenik = new Ucenik();
  numberOfUcenici: number;
  limit: number = 5;
  page: number = 1;

  getUcenici(): void {
    this.ucenikService.getUcenici().subscribe(
      ucenici => this.ucenici = ucenici
    );
  }

  ngOnInit() {
    this.getUcenici();
  }

  goBack(): void {
    this.location.back();
  }
}
