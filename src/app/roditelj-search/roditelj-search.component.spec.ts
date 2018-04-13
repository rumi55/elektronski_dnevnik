import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoditeljSearchComponent } from './roditelj-search.component';

describe('RoditeljSearchComponent', () => {
  let component: RoditeljSearchComponent;
  let fixture: ComponentFixture<RoditeljSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoditeljSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoditeljSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
