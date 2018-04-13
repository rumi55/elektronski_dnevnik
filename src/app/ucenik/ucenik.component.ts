import { Component, OnInit } from '@angular/core';
import { Ucenik } from '../ucenik';
import { TipKorisnika } from '../enumkorisnik';
import { UcenikService } from '../ucenik.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-ucenik',
  templateUrl: './ucenik.component.html',
  styleUrls: ['./ucenik.component.css']
})
export class UcenikComponent implements OnInit {

  filter: Ucenik = new Ucenik();
  numberOfUcenici: number;
  limit: number = 5;
  page: number = 1;

  ucenici: Ucenik[];

  constructor(
    private route: ActivatedRoute,
    private ucenikService: UcenikService,
    private location:Location
  ) { }

  getUcenici(): void {
    this.ucenikService.getUcenici().subscribe(
      ucenici => this.ucenici = ucenici
    );
  }

  /*add(ucenik: Ucenik): void {
    if(!ucenik.tipKorisnika) { return; }
    if(!ucenik.ime) { return; }
    if(!ucenik.prezime) { return; }
    if(!ucenik.email) { return; }
    if(!ucenik.jmbg) { return; }
    if(!ucenik.adresa) { return; }
    if(!ucenik.datumRodjenja) { return; }
    this.ucenikService.addUcenik( {id: null,  tipKorisnika: ucenik.tipKorisnika, ime: ucenik.ime, prezime: ucenik.prezime,
      email: ucenik.email, jmbg: ucenik.jmbg, adresa: ucenik.adresa, datumRodjenja: ucenik.datumRodjenja} as Ucenik)
      .subscribe(ucenik => {
      this.ucenici.push(ucenik);
    });
  }
*/

add(tipKorisnika: TipKorisnika, ime: string, prezime:string, email:string, jmbg:string, adresa:string, datumRodjenja:any, odeljenje: number): void {
  this.ucenikService.addUcenik( { id:null, tipKorisnika:tipKorisnika, ime:ime, prezime:prezime, email:email, jmbg:jmbg,
     adresa:adresa, datumRodjenja:datumRodjenja, odeljenje: odeljenje } as Ucenik)
  .subscribe(ucenik => {
    this.ucenici.push(ucenik);
  });
}



/*  delete(ucenik: Ucenik): void {
  this.ucenici = this.ucenici.filter(u => u !== ucenik);
  this.ucenikService.deleteUcenik(ucenik).subscribe();
}*/

  ngOnInit() {
    this.getUcenici();
  }

  goBack(): void {
    this.location.back();
  }

}
