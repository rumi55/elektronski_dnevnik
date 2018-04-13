import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminucenikSearchComponent } from './adminucenik-search.component';

describe('AdminucenikSearchComponent', () => {
  let component: AdminucenikSearchComponent;
  let fixture: ComponentFixture<AdminucenikSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminucenikSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminucenikSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
