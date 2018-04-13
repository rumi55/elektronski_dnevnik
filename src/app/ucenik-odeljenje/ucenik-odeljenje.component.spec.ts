import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikOdeljenjeComponent } from './ucenik-odeljenje.component';

describe('UcenikOdeljenjeComponent', () => {
  let component: UcenikOdeljenjeComponent;
  let fixture: ComponentFixture<UcenikOdeljenjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikOdeljenjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikOdeljenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
