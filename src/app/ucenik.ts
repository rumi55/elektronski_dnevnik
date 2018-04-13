import { TipKorisnika } from './enumkorisnik';

export class Ucenik {
  id: number;
  tipKorisnika: TipKorisnika;
  ime: string;
  prezime: string;
  email: string;
  jmbg: string;
  datumRodjenja: any;
  adresa: string;
  odeljenje: number;
  ocene: number[];
  roditelji: number[];
}
