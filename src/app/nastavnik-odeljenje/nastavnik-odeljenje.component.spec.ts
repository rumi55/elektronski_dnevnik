import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavnikOdeljenjeComponent } from './nastavnik-odeljenje.component';

describe('NastavnikOdeljenjeComponent', () => {
  let component: NastavnikOdeljenjeComponent;
  let fixture: ComponentFixture<NastavnikOdeljenjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavnikOdeljenjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavnikOdeljenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
