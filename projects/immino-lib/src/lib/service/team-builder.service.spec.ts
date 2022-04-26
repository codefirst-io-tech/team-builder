import { TestBed } from '@angular/core/testing';
import { Player } from '../models';

import { TeamBuilderService } from './team-builder.service';

describe('TeamBuilderService', () => {
  let service: TeamBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamBuilderService);
  });

  it('should calculate total strength of players', () => {
    const players: Player[] = [
      {
        name: 'Player 1',
        strength: 10,
      },
      {
        name: 'Player 2',
        strength: 5,
      },
      {
        name: 'Player 3',
        strength: 4,
      },
    ];
    expect(service.calculateTotalStrength(players)).toBe(19);
  });
});
