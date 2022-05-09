import { Component } from '@angular/core';
import {TeamBuilderService} from "@codefirst-io/team-builder/src/lib/services";
import {Player} from "@codefirst-io/team-builder/src/lib/models";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kadro-kurucu';

  constructor() {
    const teamBuilder =  TeamBuilderService;

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

    const teams = teamBuilder.buildTeams(players);
    console.log({teams});
  }
}
