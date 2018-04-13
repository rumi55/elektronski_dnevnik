import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Roditelj } from '../roditelj';
import { RoditeljService } from '../roditelj.service';

@Component({
  selector: 'app-roditelj-search',
  templateUrl: './roditelj-search.component.html',
  styleUrls: ['./roditelj-search.component.css']
})
export class RoditeljSearchComponent implements OnInit {

  roditelji$: Observable<Roditelj[]>;
  private searchTerms = new Subject<string>();

  constructor(private roditeljService: RoditeljService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.roditelji$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.roditeljService.searchRoditelji(term)),
    );
  }

}
