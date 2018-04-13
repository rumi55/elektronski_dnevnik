import { TipOcene } from './enumocena';

export class Ocena {
  id: number;
  tipOcene: TipOcene;
  vrednost: number;
  datumUnosa: any;
  polugodiste: number;
  deleted: boolean;
  nastavnik: number;
  ucenik: number;
  predmet: number;
}
