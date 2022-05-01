import {Injectable} from '@angular/core';
import {Player, Team, Tier} from "immino-lib";
import {TeamBuilderUtil} from "../../util/team-builder.util";
import {AbstractTeamBuilderService} from "../abstract-team-builder.service";

@Injectable({
  providedIn: 'root'
})
export class TeamBuilderService implements AbstractTeamBuilderService{
  private runCounter = 1;
  private differenceThreshold = 3;

  buildTeams(players: Player[]): Team[] {
    const shuffledPlayers = TeamBuilderUtil.shuffle(players);

    const teams: Team[] = [];

    const totalStrength = TeamBuilderUtil.calculateTotalStrength(shuffledPlayers);

    const teamStrength = Math.ceil(totalStrength / 2);

    // team1.strength == team2.strength == 10

    const team1: Team = new Team();
    const team2: Team = new Team();

    while (shuffledPlayers.length > 0) {
      // find 1 high - 1 low => push to team1
      // find 1 high - 1 low => push to team2

      // missing players push mid

      const highPlayerIndexForTeam1 = TeamBuilderUtil.findIndexByTier(shuffledPlayers, Tier.HIGH);
      const midPlayerIndexForTeam1 = TeamBuilderUtil.findIndexByTier(shuffledPlayers, Tier.MID);
      const lowPlayerIndexForTeam1 = TeamBuilderUtil.findIndexByTier(shuffledPlayers, Tier.LOW);

      if (highPlayerIndexForTeam1 !== -1) {
        team1.members.push(shuffledPlayers[highPlayerIndexForTeam1]);
        shuffledPlayers.splice(highPlayerIndexForTeam1, 1);
      } else if (midPlayerIndexForTeam1 !== -1) {
        team1.members.push(shuffledPlayers[midPlayerIndexForTeam1]);
        shuffledPlayers.splice(midPlayerIndexForTeam1, 1);
      }

      if (lowPlayerIndexForTeam1 !== -1) {
        team1.members.push(shuffledPlayers[lowPlayerIndexForTeam1]);
        shuffledPlayers.splice(lowPlayerIndexForTeam1, 1);
      } else if (midPlayerIndexForTeam1 !== -1) {
        team1.members.push(shuffledPlayers[midPlayerIndexForTeam1]);
        shuffledPlayers.splice(midPlayerIndexForTeam1, 1);
      }


      const highPlayerIndexForTeam2 = TeamBuilderUtil.findIndexByTier(shuffledPlayers, Tier.HIGH);
      const midPlayerIndexForTeam2 = TeamBuilderUtil.findIndexByTier(shuffledPlayers, Tier.MID);
      const lowPlayerIndexForTeam2 = TeamBuilderUtil.findIndexByTier(shuffledPlayers, Tier.LOW);

      if (highPlayerIndexForTeam2 !== -1) {
        team2.members.push(shuffledPlayers[highPlayerIndexForTeam2]);
        shuffledPlayers.splice(highPlayerIndexForTeam2, 1);
      } else if (midPlayerIndexForTeam2 !== -1) {
        team2.members.push(shuffledPlayers[midPlayerIndexForTeam2]);
        shuffledPlayers.splice(midPlayerIndexForTeam2, 1);
      }

      if (lowPlayerIndexForTeam2 !== -1) {
        team2.members.push(shuffledPlayers[lowPlayerIndexForTeam2]);
        shuffledPlayers.splice(lowPlayerIndexForTeam2, 1);
      } else if (midPlayerIndexForTeam2 !== -1) {
        team2.members.push(shuffledPlayers[midPlayerIndexForTeam2]);
        shuffledPlayers.splice(midPlayerIndexForTeam2, 1);
      }
    }

    teams.push(team1, team2);

    return teams;
  }
}
