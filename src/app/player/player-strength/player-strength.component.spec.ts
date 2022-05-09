import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerStrengthComponent } from './player-strength.component';

describe('PlayerStrengthComponent', () => {
  let component: PlayerStrengthComponent;
  let fixture: ComponentFixture<PlayerStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerStrengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
