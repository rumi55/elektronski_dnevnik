import { Injectable } from '@angular/core';
import { Predmet } from './predmet';
import { Ucenik } from './ucenik';
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
export class PredmetService {

  private predmetUrl = 'http://localhost:8080/api/v1/predmet';

  getPredmeti(): Observable<Predmet[]> {
  return this.http.get<Predmet[]>(this.predmetUrl)
    .pipe(
      tap(predmeti => this.log(`fetched predmeti`)),
      catchError(this.handleError('getPredmeti', []))
    );
  }

/*  getPredmetByUcenik(): Observable<Predmet[]> {
  const url = `${this.predmetUrl}/ucenik/?ucenikId=${this.ucenik.id}`;
  return this.http.get<Predmet[]>(url).pipe(
      tap(predmeti => this.log(`fetched predmeti`)),
      catchError(this.handleError('getPredmeti', []))
    );
  }*/

  getPredmet(id: number): Observable<Predmet> {
  const url = `${this.predmetUrl}/${id}`;
  return this.http.get<Predmet>(url).pipe(
      tap(_ => this.log(`fetched predmet id=${id}`)),
      catchError(this.handleError<Predmet>(`getPredmet id=${id}`))
    );
  }

  getPredmetiByNastavnik(nastavnikId: number): Observable<Predmet[]> {
  const url = `${this.predmetUrl}/nastavnik/${nastavnikId}`;
  return this.http.get<Predmet[]>(url).pipe(
      tap(predmeti => this.log(`fetched predmeti`)),
      catchError(this.handleError('getPredmetiByNastavnik', []))
    );
  }

  getPredmetiByNastavnikAndOdeljenje(nastavnikId: number, odeljenjeId: number): Observable<Predmet[]> {
  const url = `${this.predmetUrl}/no/${nastavnikId}/${odeljenjeId}`;
  return this.http.get<Predmet[]>(url).pipe(
      tap(predmeti => this.log(`fetched predmeti`)),
      catchError(this.handleError('getPredmetiByNastavnikAndOdeljenje', []))
    );
  }

  getPredmetiByNastavnikAndUcenik(nastavnikId: number, ucenikId: number): Observable<Predmet[]> {
  const url = `${this.predmetUrl}/${nastavnikId}/${ucenikId}`;
  return this.http.get<Predmet[]>(url).pipe(
      tap(predmeti => this.log(`fetched predmeti`)),
      catchError(this.handleError('getPredmetiByNastavnikAndUcenik', []))
    );
  }

  getUceniciByPredmet(id: number): Observable<Ucenik[]> {
  const url = `${this.predmetUrl}/slusa/${id}`;
  return this.http.get<Ucenik[]>(url).pipe(
      tap(ucenici => this.log(`fetched ucenici`)),
      catchError(this.handleError('getUceniciByPredmet', []))
    );
  }

  addPredmet (predmet: Predmet): Observable<Predmet> {
  return this.http.post<Predmet>(this.predmetUrl, predmet, httpOptions).pipe(
    tap((predmet: Predmet) => this.log(`added predmet w/ id=${predmet.id}`)),
    catchError(this.handleError<Predmet>('addPredmet'))
  );
  }

  updatePredmet(predmet: Predmet): Observable<any> {
  const url = `${this.predmetUrl}/${predmet.id}`;
  return this.http.put<Predmet>(url, predmet, httpOptions).pipe(
      tap(_ =>this.log(`updated predmet id=${predmet.id}`)),
      catchError(this.handleError<any>('updatePredmet'))
    );
  }

  deletePredmet (predmet: Predmet | number): Observable<Predmet> {
  const id = typeof predmet === 'number' ? predmet : predmet.id;
  const url = `${this.predmetUrl}/${id}`;
  return this.http.delete<Predmet>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted predmet id=${id}`)),
    catchError(this.handleError<Predmet>('deletePredmet'))
  );
  }

  searchPredmeti(term: string): Observable<Predmet[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Predmet[]>(`${this.predmetUrl}/naziv?naziv=${term}`).pipe(
    tap(_ => this.log(`found predmeti matching "${term}"`)),
    catchError(this.handleError<Predmet[]>('searchPredmeti', []))
  );
  }

  addPredmetToNastavnikAndOdeljenje(predmet: Predmet, nastavnikId: number, odeljenjeId: number): Observable<Predmet> {
  const url = `${this.predmetUrl}/${predmet.id}/predaje?nastavnikId=${nastavnikId}&odeljenjeId=${odeljenjeId}`;
  return this.http.put<Predmet>(url, predmet, httpOptions).pipe(
      tap(_ =>this.log(`updated predmet id=${predmet.id}`)),
      catchError(this.handleError<any>('updatePredmet'))
    );
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
     this.messageService.add('PredmetService: ' + message);
   }
}
