import { Component, OnInit, Input } from '@angular/core';
import { Roditelj } from '../roditelj';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RoditeljService } from '../roditelj.service';

@Component({
  selector: 'app-roditelj-detail',
  templateUrl: './roditelj-detail.component.html',
  styleUrls: ['./roditelj-detail.component.css']
})
export class RoditeljDetailComponent implements OnInit {
  @Input() roditelj: Roditelj;
  roditeljId: number = +this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private roditeljService: RoditeljService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getRoditelj();
  }

  getRoditelj(): void {
  //  const id = +this.route.snapshot.paramMap.get('id');
    this.roditeljService.getRoditelj(this.roditeljId)
    .subscribe(roditelj => this.roditelj = roditelj);
  }

  goBack(): void {
    this.location.back();
  }

  delete(roditelj: Roditelj): void {
  //this.roditelji = this.roditelji.filter(r => r !== roditelj);
  this.roditeljService.deleteRoditelj(roditelj).subscribe(() => this.goBack());
}

  save(): void {
  this.roditeljService.updateRoditelj(this.roditelj)
    .subscribe(() => this.goBack());
}

}
