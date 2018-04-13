import { Injectable } from '@angular/core';
import { Roditelj } from './roditelj';
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
export class RoditeljService {

  private roditeljUrl = 'http://localhost:8080/api/v1/roditelj';

  getRoditelji(): Observable<Roditelj[]> {
    return this.http.get<Roditelj[]>(this.roditeljUrl)
    .pipe(
      tap(roditelji => this.log(`fetched roditelji`)),
      catchError(this.handleError('getRoditelji', []))
    );
  }

  getRoditelj(id: number): Observable<Roditelj> {
    const url = `${this.roditeljUrl}/${id}`;
    return this.http.get<Roditelj>(url).pipe(
      tap(_ => this.log(`fetched roditelj id=${id}`)),
      catchError(this.handleError<Roditelj>(`getRoditelj id=${id}`))
    )
  }

  updateRoditelj(roditelj: Roditelj): Observable<any> {
  const url = `${this.roditeljUrl}/${roditelj.id}`;
  return this.http.put<Roditelj>(url, roditelj, httpOptions).pipe(
      tap(_ =>this.log(`updated roditelj id=${roditelj.id}`)),
      catchError(this.handleError<any>('updateRoditelj'))
    );
  }

  addRoditelj (roditelj: Roditelj): Observable<Roditelj> {
  return this.http.post<Roditelj>(this.roditeljUrl, roditelj, httpOptions).pipe(
    tap((roditelj: Roditelj) => this.log(`added roditelj w/ id=${roditelj.id}`)),
    catchError(this.handleError<Roditelj>('addRoditelj'))
  );
  }

  deleteRoditelj (roditelj: Roditelj | number): Observable<Roditelj> {
  const id = typeof roditelj === 'number' ? roditelj : roditelj.id;
  const url = `${this.roditeljUrl}/${id}`;
  return this.http.delete<Roditelj>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted roditelj id=${id}`)),
    catchError(this.handleError<Roditelj>('deleteRoditelj'))
  );
 }

 searchRoditelji(term: string): Observable<Roditelj[]> {
 if (!term.trim()) {
   // if not search term, return empty hero array.
   return of([]);
 }
 return this.http.get<Roditelj[]>(`${this.roditeljUrl}/jmbg?jmbg=${term}`).pipe(
   tap(_ => this.log(`found roditelji matching "${term}"`)),
   catchError(this.handleError<Roditelj[]>('searchRoditelji', []))
 );
 }

   addUcenikToRoditelj(roditelj: Roditelj, ucenikId: number): Observable<any> {
   const url = `${this.roditeljUrl}/${roditelj.id}/ucenik?ucenikId=${ucenikId}`;
   return this.http.put<Roditelj>(url, roditelj, httpOptions).pipe(
       tap(_ =>this.log(`updated roditelj id=${roditelj.id}`)),
       catchError(this.handleError<any>('updateRoditelj'))
     );
   }

   getRoditeljiByOdeljenje(odeljenjeId: number): Observable<Roditelj[]>{
     const url = `${this.roditeljUrl}/admin/odeljenje/${odeljenjeId}`;
     return this.http.get<Roditelj[]>(url).pipe(
       tap(ucenici => this.log('fetched roditelji')),
       catchError(this.handleError('getRoditeljByOdeljenje', []))
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
     this.messageService.add('RoditeljService: ' + message);
   }
}
