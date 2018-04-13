import { TipKorisnika } from './enumkorisnik';

export class Roditelj {
  id: number;
  tipKorisnika: TipKorisnika;
  ime: string;
  prezime: string;
  email: string;
  jmbg: string;
  datumRodjenja: any;
  adresa: string;
  deca: number[];
}
