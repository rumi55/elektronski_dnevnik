import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-spiskovi',
  templateUrl: './spiskovi.component.html',
  styleUrls: ['./spiskovi.component.css']
})
export class SpiskoviComponent implements OnInit {

  constructor(
    private location:Location
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
