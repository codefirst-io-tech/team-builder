import {Player, Tier} from "immino-lib";

export class TeamBuilderUtil {
  public static shuffle(players: Player[]) {
    for (let i = players.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [players[i], players[j]] = [players[j], players[i]];
    }

    return players;
  }

  public static calculateAverage(firstTeamPlayers: Player[]): number {
    return firstTeamPlayers.reduce((acc, player) => acc + player.strength, 0) / firstTeamPlayers.length;
  }

  public static calculateStandardDeviation(firstTeamPlayers: Player[]): number {
    const average = TeamBuilderUtil.calculateAverage(firstTeamPlayers);
    const sum = firstTeamPlayers.reduce((acc, player) => acc + Math.pow(player.strength - average, 2), 0);
    return Math.sqrt(sum / firstTeamPlayers.length);
  }

  public static calculateTotalStrength(players: Player[]): number {
    return players.reduce((acc, player) => acc + player?.strength, 0);
  }

  public static findIndexByTier(players: Player[], tier: Tier): number {
    return players.findIndex(player => player.tier === tier);
  }
}
