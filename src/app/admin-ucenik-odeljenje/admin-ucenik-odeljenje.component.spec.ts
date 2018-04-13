import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUcenikOdeljenjeComponent } from './admin-ucenik-odeljenje.component';

describe('AdminUcenikOdeljenjeComponent', () => {
  let component: AdminUcenikOdeljenjeComponent;
  let fixture: ComponentFixture<AdminUcenikOdeljenjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUcenikOdeljenjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUcenikOdeljenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
