import { Injectable } from '@angular/core';
import { Player } from '@codefirst-io/team-builder';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class TeamBuilderService {

  constructor(private notification: NzNotificationService) {
  }

  isThisPlayerExist(playerName: String, playerList: Player[]): boolean {
    return playerList.some(player => player.name === playerName);
  }

  areThesePlayersExist(players: Player[], playerList: Player[]) {
    const isEveryoneNotExist = players.every(newPlayer => playerList.some(oldPlayer => oldPlayer.name !== newPlayer.name));
    return !isEveryoneNotExist;
  }

  addSinglePlayer(newPlayer: Player, playerList: Player[]) {
    if (this.isThisPlayerExist(newPlayer.name, playerList)) {
      this.notification.create(
        'error',
        'Çooook kritikkk',
        'Bu oyuncu zaten ekli olduğu için tekrar ekleyemezsiniz!'
      );
    } else {
      playerList.push(newPlayer);
    }
  }

  addNewPlayers(newPlayers: Player[], playerList: Player[]) {
    if (this.areThesePlayersExist(newPlayers, playerList)) {
      this.notification.create(
        'error',
        'Çooook kritikkk',
        'Bu oyuncular bazıları/hepsi zaten ekli olduğu için tekrar ekleyemezsiniz!'
      );
    } else {
      playerList = [...playerList, ...newPlayers];
    }
  }

  deletePlayer(player: Player, playerList: Player[]) {
    const indexOfPlayer = playerList.indexOf(player);
    if (indexOfPlayer !== -1) {
      playerList.splice(indexOfPlayer, 0);
    }
  }

  deleteAllPlayers(playerList: Player[]) {
    playerList = [];
  }
}
