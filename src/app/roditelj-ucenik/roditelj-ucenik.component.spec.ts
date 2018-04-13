import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoditeljUcenikComponent } from './roditelj-ucenik.component';

describe('RoditeljUcenikComponent', () => {
  let component: RoditeljUcenikComponent;
  let fixture: ComponentFixture<RoditeljUcenikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoditeljUcenikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoditeljUcenikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
