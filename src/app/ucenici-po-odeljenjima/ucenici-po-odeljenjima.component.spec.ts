import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UceniciPoOdeljenjimaComponent } from './ucenici-po-odeljenjima.component';

describe('UceniciPoOdeljenjimaComponent', () => {
  let component: UceniciPoOdeljenjimaComponent;
  let fixture: ComponentFixture<UceniciPoOdeljenjimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UceniciPoOdeljenjimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UceniciPoOdeljenjimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
