import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredajeopnComponent } from './predajeopn.component';

describe('PredajeopnComponent', () => {
  let component: PredajeopnComponent;
  let fixture: ComponentFixture<PredajeopnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredajeopnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredajeopnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
