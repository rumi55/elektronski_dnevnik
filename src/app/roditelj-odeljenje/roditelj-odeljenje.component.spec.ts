import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoditeljOdeljenjeComponent } from './roditelj-odeljenje.component';

describe('RoditeljOdeljenjeComponent', () => {
  let component: RoditeljOdeljenjeComponent;
  let fixture: ComponentFixture<RoditeljOdeljenjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoditeljOdeljenjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoditeljOdeljenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
