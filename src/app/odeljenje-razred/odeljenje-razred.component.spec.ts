import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeljenjeRazredComponent } from './odeljenje-razred.component';

describe('OdeljenjeRazredComponent', () => {
  let component: OdeljenjeRazredComponent;
  let fixture: ComponentFixture<OdeljenjeRazredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdeljenjeRazredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdeljenjeRazredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
