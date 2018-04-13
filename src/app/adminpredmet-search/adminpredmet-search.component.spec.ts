import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpredmetSearchComponent } from './adminpredmet-search.component';

describe('AdminpredmetSearchComponent', () => {
  let component: AdminpredmetSearchComponent;
  let fixture: ComponentFixture<AdminpredmetSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpredmetSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpredmetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
