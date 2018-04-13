import { Injectable } from '@angular/core';
import { Nastavnik } from './nastavnik';
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
export class NastavnikService {

  private nastavnikUrl = 'http://localhost:8080/api/v1/nastavnik';

  getNastavnici(): Observable<Nastavnik[]> {
    return this.http.get<Nastavnik[]>(this.nastavnikUrl)
    .pipe(
      tap(nastavnici => this.log(`fetched nastavnici`)),
      catchError(this.handleError('getNastavnici', []))
    );
  }

  getNastavnik(id: number): Observable<Nastavnik> {
    const url = `${this.nastavnikUrl}/${id}`;
    return this.http.get<Nastavnik>(url).pipe(
      tap(_ => this.log(`fetched nastavnik id=${id}`)),
      catchError(this.handleError<Nastavnik>(`getNastavnik id=${id}`))
    )
  }

  updateNastavnik(nastavnik: Nastavnik): Observable<any> {
  const url = `${this.nastavnikUrl}/${nastavnik.id}`;
  return this.http.put<Nastavnik>(url, nastavnik, httpOptions).pipe(
      tap(_ =>this.log(`updated nastavnik id=${nastavnik.id}`)),
      catchError(this.handleError<any>('updateNastavnik'))
    );
  }

  addNastavnik (nastavnik: Nastavnik): Observable<Nastavnik> {
  return this.http.post<Nastavnik>(this.nastavnikUrl, nastavnik, httpOptions).pipe(
    tap((nastavnik: Nastavnik) => this.log(`added nastavnik w/ id=${nastavnik.id}`)),
    catchError(this.handleError<Nastavnik>('addNastavnik'))
  );
}

/*  addNastavnik (nastavnik: Nastavnik): Observable<Nastavnik> {
  return this.http.post<Message>(this.nastavnikUrl, nastavnik, httpOptions)
  .pipe(
    map(nastavnici => {
      if(nastavnici.poruka != ""){
        this.handleError("addNastavnik", {})({message: nastavnici.poruka});
      }else{
        return nastavnici.Data[0];
      }
    }),
    tap((nastavnik:Nastavnik) => this.log(`added nastavnik w/ id=${nastavnik.id}`)),
    catchError(this.handleError<Nastavnik>('addNastavnik'))
  );
}*/

  deleteNastavnik (nastavnik: Nastavnik | number): Observable<Nastavnik> {
  const id = typeof nastavnik === 'number' ? nastavnik : nastavnik.id;
  const url = `${this.nastavnikUrl}/${id}`;
  return this.http.delete<Nastavnik>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted nastavnik id=${id}`)),
    catchError(this.handleError<Nastavnik>('deleteNastavnik'))
  );
}

searchNastavnici(term: string): Observable<Nastavnik[]> {
if (!term.trim()) {
  // if not search term, return empty hero array.
  return of([]);
}
return this.http.get<Nastavnik[]>(`${this.nastavnikUrl}/jmbg?jmbg=${term}`).pipe(
  tap(_ => this.log(`found nastavnici matching "${term}"`)),
  catchError(this.handleError<Nastavnik[]>('searchNastavnici', []))
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
     this.messageService.add('NastavnikService: ' + message);
   }
}
