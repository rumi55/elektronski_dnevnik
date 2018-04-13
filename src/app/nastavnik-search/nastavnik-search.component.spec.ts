import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavnikSearchComponent } from './nastavnik-search.component';

describe('NastavnikSearchComponent', () => {
  let component: NastavnikSearchComponent;
  let fixture: ComponentFixture<NastavnikSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavnikSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavnikSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
