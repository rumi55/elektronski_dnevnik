import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikSearchComponent } from './ucenik-search.component';

describe('UcenikSearchComponent', () => {
  let component: UcenikSearchComponent;
  let fixture: ComponentFixture<UcenikSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
