import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStarPortComponent } from './ngx-star-port.component';

describe('NgxStarPortComponent', () => {
  let component: NgxStarPortComponent;
  let fixture: ComponentFixture<NgxStarPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxStarPortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStarPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
