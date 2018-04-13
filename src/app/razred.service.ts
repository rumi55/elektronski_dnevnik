import { Injectable } from '@angular/core';
import { Razred } from './razred';
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
export class RazredService {

private razredUrl = 'http://localhost:8080/api/v1/razred';

getRazredi(): Observable<Razred[]> {
return this.http.get<Razred[]>(this.razredUrl)
  .pipe(
    tap(razredi => this.log(`fetched razredi`)),
    catchError(this.handleError('getRazredi', []))
  );
}

addRazred(razred: Razred): Observable<Razred> {
  return this.http.post<Razred>(this.razredUrl, razred, httpOptions);
}

deleteRazred (razred: Razred | number): Observable<Razred> {
const id = typeof razred === 'number' ? razred : razred.id;
const url = `${this.razredUrl}/${id}`;

return this.http.delete<Razred>(url, httpOptions).pipe(
  tap(_ => this.log(`deleted razred id=${id}`)),
  catchError(this.handleError<Razred>('deleteRazred'))
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
   this.messageService.add('RazredService: ' + message);
 }
}
