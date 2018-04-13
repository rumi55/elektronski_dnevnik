import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUcenikRoditeljComponent } from './admin-ucenik-roditelj.component';

describe('AdminUcenikRoditeljComponent', () => {
  let component: AdminUcenikRoditeljComponent;
  let fixture: ComponentFixture<AdminUcenikRoditeljComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUcenikRoditeljComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUcenikRoditeljComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
