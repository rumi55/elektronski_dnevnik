import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikPredmetComponent } from './ucenik-predmet.component';

describe('UcenikPredmetComponent', () => {
  let component: UcenikPredmetComponent;
  let fixture: ComponentFixture<UcenikPredmetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikPredmetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikPredmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
