import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcenaIzmenaComponent } from './ocena-izmena.component';

describe('OcenaIzmenaComponent', () => {
  let component: OcenaIzmenaComponent;
  let fixture: ComponentFixture<OcenaIzmenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcenaIzmenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcenaIzmenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
