import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcenaDetailComponent } from './ocena-detail.component';

describe('OcenaDetailComponent', () => {
  let component: OcenaDetailComponent;
  let fixture: ComponentFixture<OcenaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcenaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcenaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
