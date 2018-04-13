import { Injectable } from '@angular/core';
import { Ucenik } from './ucenik';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Message } from './message';
import { Predmet } from './predmet';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UcenikService {

  private uceniciUrl = 'http://localhost:8080/api/v1/ucenik';

  getUcenici(): Observable<Ucenik[]> {
  return this.http.get<Ucenik[]>(this.uceniciUrl)
    .pipe(
      tap(ucenici => this.log(`fetched ucenici`)),
      catchError(this.handleError('getUcenici', []))
    );
  }

  getUcenik(id: number): Observable<Ucenik> {
  const url = `${this.uceniciUrl}/${id}`;
  return this.http.get<Ucenik>(url).pipe(
      tap(_ => this.log(`fetched ucenik id=${id}`)),
      catchError(this.handleError<Ucenik>(`getUcenik id=${id}`))
    );
  }

  updateUcenik(ucenik: Ucenik): Observable<any> {
  const url = `${this.uceniciUrl}/${ucenik.id}`;
  return this.http.put<Ucenik>(url, ucenik, httpOptions).pipe(
      tap(_ =>this.log(`updated ucenik id=${ucenik.id}`)),
      catchError(this.handleError<any>('updateUcenik'))
    );
  }

  addUcenik (ucenik: Ucenik): Observable<Ucenik> {
  return this.http.post<Ucenik>(this.uceniciUrl, ucenik, httpOptions).pipe(
    tap((ucenik: Ucenik) => this.log(`added ucenik w/ id=${ucenik.id}`)),
    catchError(this.handleError<Ucenik>('addUcenik'))
  );
  }

  deleteUcenik (ucenik: Ucenik | number): Observable<Ucenik> {
  const id = typeof ucenik === 'number' ? ucenik : ucenik.id;
  const url = `${this.uceniciUrl}/${id}`;
  return this.http.delete<Ucenik>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted ucenik id=${id}`)),
    catchError(this.handleError<Ucenik>('deleteUcenik'))
  );
  }

  searchUcenici(term: string): Observable<Ucenik[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<Ucenik[]>(`${this.uceniciUrl}/jmbg?jmbg=${term}`).pipe(
    tap(_ => this.log(`found ucenik matching "${term}"`)),
    catchError(this.handleError<Ucenik[]>('searchUcenici', []))
  );
  }

  getPredmetiByUcenik(id: number): Observable<Predmet[]> {
  const url = `${this.uceniciUrl}/predmet/${id}`;
  return this.http.get<Predmet[]>(url).pipe(
      tap(predmeti => this.log(`fetched predmeti`)),
      catchError(this.handleError('getPredmetiByUcenik', []))
    );
  }

  getUcenikByRoditelj(roditeljId: number): Observable<Ucenik[]>{
    const url = `${this.uceniciUrl}/roditelj/${roditeljId}`;
    return this.http.get<Ucenik[]>(url).pipe(
      tap(ucenici => this.log('fetched ucenici')),
      catchError(this.handleError('getUcenikByRoditelj', []))
    );
  }

  getUcenikByOdeljenje(odeljenjeId: number): Observable<Ucenik[]>{
    const url = `${this.uceniciUrl}/odeljenje/${odeljenjeId}`;
    return this.http.get<Ucenik[]>(url).pipe(
      tap(ucenici => this.log('fetched ucenici')),
      catchError(this.handleError('getUcenikByOdeljenje', []))
    );
  }

  addUcenikToOdeljenje(ucenik: Ucenik, odeljenjeId: number): Observable<any> {
  const url = `${this.uceniciUrl}/${ucenik.id}/odeljenje?odeljenjeId=${odeljenjeId}`;
  return this.http.put<Ucenik>(url, ucenik, httpOptions).pipe(
      tap(_ =>this.log(`updated ucenik id=${ucenik.id}`)),
      catchError(this.handleError<any>('updateUcenik'))
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
    private messageService: MessageService) { }

   private log(message: string) {
     this.messageService.add('UcenikService: ' + message);
   }
}
