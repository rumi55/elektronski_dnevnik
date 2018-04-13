import { Component, OnInit } from '@angular/core';
import { Razred } from '../razred';
import { RazredService } from '../razred.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-razred',
  templateUrl: './razred.component.html',
  styleUrls: ['./razred.component.css']
})
export class RazredComponent implements OnInit {

  razredi: Razred[];

  getRazredi(): void {
    this.razredService.getRazredi().subscribe(
      razredi => this.razredi = razredi
    );
  }

  add(razred: number): void {
  if (!razred) { return; }
  this.razredService.addRazred({ id: null, razred: razred } as Razred)
    .subscribe(razred => {
      this.razredi.push(razred);
    });
}
delete(razred: Razred): void {
  this.razredi = this.razredi.filter(r => r !== razred);
  this.razredService.deleteRazred(razred).subscribe();
}

  constructor(
    private route: ActivatedRoute,
    private razredService: RazredService,
    private location:Location
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getRazredi();
  }

}
