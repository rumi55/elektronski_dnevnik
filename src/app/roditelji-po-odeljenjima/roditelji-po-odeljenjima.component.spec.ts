import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoditeljiPoOdeljenjimaComponent } from './roditelji-po-odeljenjima.component';

describe('RoditeljiPoOdeljenjimaComponent', () => {
  let component: RoditeljiPoOdeljenjimaComponent;
  let fixture: ComponentFixture<RoditeljiPoOdeljenjimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoditeljiPoOdeljenjimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoditeljiPoOdeljenjimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
