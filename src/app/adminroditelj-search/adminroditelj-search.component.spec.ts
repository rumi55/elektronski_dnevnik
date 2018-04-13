import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminroditeljSearchComponent } from './adminroditelj-search.component';

describe('AdminroditeljSearchComponent', () => {
  let component: AdminroditeljSearchComponent;
  let fixture: ComponentFixture<AdminroditeljSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminroditeljSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminroditeljSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
