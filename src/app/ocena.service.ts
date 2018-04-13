import { Injectable } from '@angular/core';
import { Ocena } from './ocena';
import { Predmet } from './predmet';
import { PredmetService } from './predmet.service';
import { Ucenik } from './ucenik';
import { UcenikService } from './ucenik.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Message } from './message';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OcenaService {


  private ocenaUrl = 'http://localhost:8080/api/v1/ocena';

  getOceneByUcenikAndPredmet(ucenikId: number, predmetId: number): Observable<Ocena[]> {
  const url = `${this.ocenaUrl}/ucenik/${ucenikId}/${predmetId}`;
  return this.http.get<Ocena[]>(url).pipe(
      tap(ocene => this.log(`fetched ocene`)),
      catchError(this.handleError('getOceneByUcenikAndPredmet', []))
    );
  }

  addOcena(ocena: Ocena, nastavnikId: number, ucenikId: number, predmetId: number): Observable<Ocena> {
    const url = `${this.ocenaUrl}/${nastavnikId}/${ucenikId}/${predmetId}`;
    return this.http.post<Ocena>(url, ocena, httpOptions);
  }

  izracunajZakljucnaOcenaPolugodiste1(ucenikId: number, predmetId: number): Observable<any> {
  const url = `${this.ocenaUrl}/polugodiste1/${ucenikId}/${predmetId}`;
  return this.http.get<any>(url);/*.pipe(
      tap(ocene => this.log(`fetched ocena`)),
      catchError(this.handleError('izracunajZakljucnaOcenaPolugodiste1', []))
    );*/
 }

  izracunajZakljucnaOcena(ucenikId: number, predmetId: number): Observable<any> {
  const url = `${this.ocenaUrl}/zakljucna/${ucenikId}/${predmetId}`;
  return this.http.get<any>(url);/*.pipe(
      tap(ocene => this.log(`fetched ocena`)),
      catchError(this.handleError('izracunajZakljucnaOcena', []))
    );*/
 }

  /*getZakljucnaPolugodiste1(ucenikId: number, predmetId: number): Observable<Ocena[]> {
  const url = `${this.ocenaUrl}/pol/${ucenikId}/${predmetId}`;
  return this.http.get<Ocena[]>(url);/*.pipe(
      tap(ocene => this.log(`fetched ocena`)),
      catchError(this.handleError('getZakljucnaPolugodiste1', []))
    );*/
  /*}*/

  getOcena(id: number): Observable<Ocena> {
    const url = `${this.ocenaUrl}/${id}`;
    return this.http.get<Ocena>(url);
  }

  updateOcena(ocena: Ocena): Observable<any> {
  const url = `${this.ocenaUrl}/${ocena.id}`;
  return this.http.put<Ocena>(url, ocena, httpOptions);
  }

  deleteOcena (ocena: Ocena | number): Observable<Ocena> {
  const id = typeof ocena === 'number' ? ocena : ocena.id;
  const url = `${this.ocenaUrl}/${id}`;
  return this.http.delete<Ocena>(url, httpOptions);
}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

   private log(message: string) {
     this.messageService.add('OcenaService: ' + message);
   }
}
