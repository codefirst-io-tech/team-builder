import { TestBed } from '@angular/core/testing';
import { Player } from '../models';

import { TeamBuilderService } from './team-builder.service';

const getMockPlayers = () => {
  return [
    new Player('player6', 9),
    new Player('player10', 8),

    new Player('player3', 7),
    new Player('player1', 6),
    new Player('player4', 6),
    new Player('player9', 5),
    new Player('player11', 5),
    new Player('player12', 5),

    new Player('player2', 4),
    new Player('player5', 3),
    new Player('player7', 1),
    new Player('player8', 2),
  ];
}

describe('TeamBuilderService', () => {
  let service: TeamBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamBuilderService);
  });


  it('should calculate total strength of players', () => {
    const players = getMockPlayers();
    expect(service.calculateTotalStrength(players)).toBe(61);
  });

  it('should build two teams with recursive method', () => {
    const players = getMockPlayers();
    const teams = service.buildTeamsRecursively(players);

    console.log({teams});

    expect(teams.length).toBe(2);
  });

  it('should build two teams with same size of members', () => {
    const players = getMockPlayers();
    const teams = service.buildTeamsRecursively(players);

    expect(teams[0].members.length).toEqual(teams[1].members.length);
  });
});
