import { Injectable } from '@angular/core';
import { Player, Team } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TeamBuilderService {

  buildTeams(players: Player[], teamSize: number): Team[] {
    const teams: Team[] = [];

    const totalStrength = this.calculateTotalStrength(players);

    return teams;
  }

  calculateTotalStrength(players: Player[]): number {
    return players.reduce((acc, player) => acc + player?.strength, 0);
  }
}
