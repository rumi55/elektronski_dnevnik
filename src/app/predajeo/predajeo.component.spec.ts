import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredajeoComponent } from './predajeo.component';

describe('PredajeoComponent', () => {
  let component: PredajeoComponent;
  let fixture: ComponentFixture<PredajeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredajeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredajeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
