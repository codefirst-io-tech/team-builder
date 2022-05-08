import {Component} from '@angular/core';
import {AbidinoTeamBuilderService, Player, TeamBuilderService} from '@codefirst-io/team-builder';
import {PlayerService} from "./player/player.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  players :Player[] = [];

  title = 'team-builder';
  constructor(private playerService: PlayerService) {

    const players = [
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
      new Player('player8', 2)
    ];

    this.playerService.players$.subscribe(data => {
      this.players = data;
    });
  }

  kadroOlustur(){
    console.log(this.players);
    const teams = AbidinoTeamBuilderService.buildTeams(this.players);
    console.log('Team 1: ' + teams[0].members.map(value => value.strength));
    console.log('Team 2: ' + teams[1].members.map(value => value.strength));
  }
}
