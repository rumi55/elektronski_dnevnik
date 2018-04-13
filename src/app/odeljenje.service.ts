import { Injectable } from '@angular/core';
import { Odeljenje } from './odeljenje';
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
export class OdeljenjeService {

  private odeljenjeUrl = 'http://localhost:8080/api/v1/odeljenje';

  getOdeljenjaByNastavnik(nastavnikId: number): Observable<Odeljenje[]> {
  const url = `${this.odeljenjeUrl}/nastavnik/${nastavnikId}`;
  return this.http.get<Odeljenje[]>(url).pipe(
      tap(odeljenja => this.log(`fetched odeljenja`)),
      catchError(this.handleError('getOdeljenjaByNastavnik', []))
    );
  }

  getOdeljenja(): Observable<Odeljenje[]> {
  return this.http.get<Odeljenje[]>(this.odeljenjeUrl)
    .pipe(
      tap(odeljenja => this.log(`fetched odeljenja`)),
      catchError(this.handleError('getOdeljenja', []))
    );
  }

  addOdeljenje(odeljenje: Odeljenje): Observable<Odeljenje> {
    return this.http.post<Odeljenje>(this.odeljenjeUrl, odeljenje, httpOptions);
  }

  deleteOdeljenje (odeljenje: Odeljenje | number): Observable<Odeljenje> {
  const id = typeof odeljenje === 'number' ? odeljenje : odeljenje.id;
  const url = `${this.odeljenjeUrl}/${id}`;

  return this.http.delete<Odeljenje>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted odeljenje id=${id}`)),
    catchError(this.handleError<Odeljenje>('deleteOdeljenje'))
  );
  }

  addOdeljenjeToRazred(odeljenje: Odeljenje, razredId: number): Observable<any> {
  const url = `${this.odeljenjeUrl}/${odeljenje.id}/razred?razredId=${razredId}`;
  return this.http.put<Odeljenje>(url, odeljenje, httpOptions).pipe(
      tap(_ =>this.log(`updated odeljenje id=${odeljenje.id}`)),
      catchError(this.handleError<any>('updateOdeljenje'))
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
     this.messageService.add('OdeljenjeService: ' + message);
   }
}
