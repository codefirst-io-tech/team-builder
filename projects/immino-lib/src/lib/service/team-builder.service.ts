import { Injectable } from '@angular/core';
import { Player, Team, Tier } from '../models';
import {NzNotificationService} from "ng-zorro-antd/notification";

@Injectable({
  providedIn: 'root'
})
export class TeamBuilderService {
  private runCounter = 1;
  private differenceThreshold = 3;
  players!: Player[];

  constructor(private notification: NzNotificationService) {
  }

  private static shuffle(players: Player[]) {
    for (let i = players.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [players[i], players[j]] = [players[j], players[i]];
    }

    return players;
  }

  findIndexByTier(players: Player[], tier: Tier): number {
    return players.findIndex(player => player.tier === tier);
  }

  buildTeams(players: Player[]): Team[] {
    const shuffledPlayers = TeamBuilderService.shuffle(players);

    const teams: Team[] = [];

    const totalStrength = this.calculateTotalStrength(shuffledPlayers);

    const teamStrength = Math.ceil(totalStrength / 2);

    // team1.strength == team2.strength == 10

    const team1: Team = new Team();
    const team2: Team = new Team();

    while (shuffledPlayers.length > 0) {
      // find 1 high - 1 low => push to team1
      // find 1 high - 1 low => push to team2

      // missing players push mid

      const highPlayerIndexForTeam1 = this.findIndexByTier(shuffledPlayers, Tier.HIGH);
      const midPlayerIndexForTeam1 = this.findIndexByTier(shuffledPlayers, Tier.MID);
      const lowPlayerIndexForTeam1 = this.findIndexByTier(shuffledPlayers, Tier.LOW);

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


      const highPlayerIndexForTeam2 = this.findIndexByTier(shuffledPlayers, Tier.HIGH);
      const midPlayerIndexForTeam2 = this.findIndexByTier(shuffledPlayers, Tier.MID);
      const lowPlayerIndexForTeam2 = this.findIndexByTier(shuffledPlayers, Tier.LOW);

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

  buildTeamsRecursively(players: Player[]): Team[] {
    return this.muazzamAbidinMetodu(players);
  }

  calculateTotalStrength(players: Player[]): number {
    return players.reduce((acc, player) => acc + player?.strength, 0);
  }

  muazzamAbidinMetodu(players: Player[]): Team[] {
    console.log('run counter: ', this.runCounter++);
    const shuffledPlayers = TeamBuilderService.shuffle(players);

    const teams: Team[] = [];


    const team1: Team = new Team();
    const team2: Team = new Team();

    const firstTeamPlayers = shuffledPlayers.slice(0, Math.ceil(shuffledPlayers.length / 2));
    team1.members = [...firstTeamPlayers];

    const secondTeamPlayers = shuffledPlayers.slice(Math.ceil(shuffledPlayers.length / 2));
    team2.members = [...secondTeamPlayers];

    const diff = Math.abs(this.calculateTotalStrength(firstTeamPlayers) - this.calculateTotalStrength(secondTeamPlayers));

    console.log({ diff });


    const standardDeviation1 = this.calculateStandardDeviation(firstTeamPlayers);
    const standardDeviation2 = this.calculateStandardDeviation(secondTeamPlayers);
    console.log({ standardDeviation1 });
    console.log({ standardDeviation2 });

    console.log('\n');

    if (diff < this.differenceThreshold) {
      teams.push(team1, team2);
      return teams;
    }


    return this.muazzamAbidinMetodu(shuffledPlayers);
  }

  private calculateStandardDeviation(firstTeamPlayers: Player[]) {
    const average = this.calculateAverage(firstTeamPlayers);
    const sum = firstTeamPlayers.reduce((acc, player) => acc + Math.pow(player.strength - average, 2), 0);
    return Math.sqrt(sum / firstTeamPlayers.length);
  }

  private calculateAverage(firstTeamPlayers: Player[]) {
    return firstTeamPlayers.reduce((acc, player) => acc + player.strength, 0) / firstTeamPlayers.length;
  }

  isThisPlayerExist(playerName: String): boolean{
    return this.players.some(player => player.name === playerName);
  }

  areThesePlayersExist(players: Player[]){
    const isEveryoneNotExist = players.every(newPlayer => this.players.some(oldPlayer => oldPlayer.name !== newPlayer.name));
    return !isEveryoneNotExist;
  }

  addSinglePlayer(player: Player){
    if(this.isThisPlayerExist(player.name)){
      this.notification.create(
        "error",
        'Çooook kritikkk',
        'Bu oyuncu zaten ekli olduğu için tekrar ekleyemezsiniz!'
      );
    }else {
      this.players.push(player);
    }
  }

  addNewPlayers(players: Player[]){
    if(this.areThesePlayersExist(players)){
      this.notification.create(
        "error",
        'Çooook kritikkk',
        'Bu oyuncular bazıları/hepsi zaten ekli olduğu için tekrar ekleyemezsiniz!'
      );
    }else{
      this.players = [...this.players,...players];
    }
  }

  deletePlayer(player: Player){
    const indexOfPlayer = this.players.indexOf(player);
    if(indexOfPlayer !== -1){
      this.players.splice(indexOfPlayer, 0);
    }
  }

  deleteAllPlayers(){
    this.players = [];
  }
}
