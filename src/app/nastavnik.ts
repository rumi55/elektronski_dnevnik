import { TipKorisnika } from './enumkorisnik';

export class Nastavnik {
  id: number;
  tipKorisnika: TipKorisnika;
  ime: string;
  prezime: string;
  email: string;
  jmbg: string;
  datumRodjenja: any;
  adresa: string;
  ocene: number[];
}
