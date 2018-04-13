import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredajeopComponent } from './predajeop.component';

describe('PredajeopComponent', () => {
  let component: PredajeopComponent;
  let fixture: ComponentFixture<PredajeopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredajeopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredajeopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
