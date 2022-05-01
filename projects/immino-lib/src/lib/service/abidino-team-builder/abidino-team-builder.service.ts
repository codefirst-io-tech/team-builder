import { Injectable } from '@angular/core';
import {AbstractTeamBuilderService} from "../abstract-team-builder.service";
import {Player, Team} from "immino-lib";
import {TeamBuilderUtil} from "../../util/team-builder.util";

@Injectable({
  providedIn: 'root'
})
export class AbidinoTeamBuilderService extends AbstractTeamBuilderService{

  private differenceThreshold = 3;
  private runCounter = 1;

  buildTeams(players: Player[]): Team[] {
    console.log('run counter: ', this.runCounter++);
    const shuffledPlayers = TeamBuilderUtil.shuffle(players);

    const teams: Team[] = [];

    const team1: Team = new Team();
    const team2: Team = new Team();

    const firstTeamPlayers = shuffledPlayers.slice(0, Math.ceil(shuffledPlayers.length / 2));
    team1.members = [...firstTeamPlayers];

    const secondTeamPlayers = shuffledPlayers.slice(Math.ceil(shuffledPlayers.length / 2));
    team2.members = [...secondTeamPlayers];

    const diff = Math.abs(TeamBuilderUtil.calculateTotalStrength(firstTeamPlayers) - TeamBuilderUtil.calculateTotalStrength(secondTeamPlayers));

    if (diff < this.differenceThreshold) {
      teams.push(team1, team2);
      return teams;
    }

    return this.buildTeams(shuffledPlayers);
  }

}
