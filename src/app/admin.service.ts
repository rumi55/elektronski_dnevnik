import { Injectable } from '@angular/core';
import { Administrator } from './admin';
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
export class AdminService {

    private adminUrl = 'http://localhost:8080/api/v1/admin';

    getAdministrator(id: number): Observable<Administrator> {
      const url = `${this.adminUrl}/${id}`;
      return this.http.get<Administrator>(url).pipe(
        tap(_ => this.log(`fetched administrator id=${id}`)),
        catchError(this.handleError<Administrator>(`getAdministrator id=${id}`))
      )
    }

  updateAdministrator(administrator: Administrator): Observable<any> {
  const url = `${this.adminUrl}/${administrator.id}`;
  return this.http.put<Administrator>(url, administrator, httpOptions).pipe(
      tap(_ =>this.log(`updated administrator id=${administrator.id}`)),
      catchError(this.handleError<any>('updateAdministrator'))
    );
  }

  addAdministrator (administrator: Administrator): Observable<Administrator> {
  return this.http.post<Administrator>(this.adminUrl, administrator, httpOptions).pipe(
    tap((administrator: Administrator) => this.log(`added administrator w/ id=${administrator.id}`)),
    catchError(this.handleError<Administrator>('addAdministrator'))
  );
}

deleteAdministrator (administrator: Administrator | number): Observable<Administrator> {
const id = typeof administrator === 'number' ? administrator : administrator.id;
const url = `${this.adminUrl}/${id}`;
return this.http.delete<Administrator>(url, httpOptions).pipe(
  tap(_ => this.log(`deleted administrator id=${id}`)),
  catchError(this.handleError<Administrator>('deleteAdministrator'))
);
}

searchAdministratori(term: string): Observable<Administrator[]> {
if (!term.trim()) {
// if not search term, return empty hero array.
return of([]);
}
return this.http.get<Administrator[]>(`${this.adminUrl}/jmbg?jmbg=${term}`).pipe(
tap(_ => this.log(`found administratori matching "${term}"`)),
catchError(this.handleError<Administrator[]>('searchAdministratori', []))
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
   this.messageService.add('AdminService: ' + message);
 }
}
