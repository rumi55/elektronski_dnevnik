import { Component, OnInit, Input } from '@angular/core';
import { Administrator } from '../admin';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  @Input() administrator: Administrator;
  administratori: Administrator[];
  administratorId: number = +this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getAdministrator();
  }

  getAdministrator(): void {
    //const id = +this.route.snapshot.paramMap.get('id'); //from string to number
    this.adminService.getAdministrator(this.administratorId)    //poziva metodu getUcenikById iz servisa
    .subscribe(administrator => this.administrator = administrator);
  }

  goBack(): void {
    this.location.back();
  }

  delete(administrator: Administrator): void {
  //this.ucenici = this.ucenici.filter(u => u !== ucenik);
  this.adminService.deleteAdministrator(administrator).subscribe(() => this.goBack());
}

   save(): void {
   this.adminService.updateAdministrator(this.administrator)
     .subscribe(() => this.goBack());
 }
}
