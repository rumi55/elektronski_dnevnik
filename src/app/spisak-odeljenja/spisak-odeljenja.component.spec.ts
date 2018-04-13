import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpisakOdeljenjaComponent } from './spisak-odeljenja.component';

describe('SpisakOdeljenjaComponent', () => {
  let component: SpisakOdeljenjaComponent;
  let fixture: ComponentFixture<SpisakOdeljenjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpisakOdeljenjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpisakOdeljenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
