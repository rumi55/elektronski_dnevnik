import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnastavnikSearchComponent } from './adminnastavnik-search.component';

describe('AdminnastavnikSearchComponent', () => {
  let component: AdminnastavnikSearchComponent;
  let fixture: ComponentFixture<AdminnastavnikSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminnastavnikSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnastavnikSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
