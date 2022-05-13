import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarShipComponent } from './star-ship.component';

describe('StarShipComponent', () => {
  let component: StarShipComponent;
  let fixture: ComponentFixture<StarShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarShipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
