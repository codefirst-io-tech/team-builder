import { Component, Input } from '@angular/core';
import { Team } from '@codefirst-io/team-builder/src/lib/models';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html'
})
export class TeamListComponent {
  @Input()
  data: Team[] = [];
  getAvg(team: Team) {
    return team.totalMemberStrength / team.members.length;
  }

  getAvatar(name:string): string {
    const players:{ [key: string]: string; } = {
      'abidino': 'assets/img/abidino_sekil.png',
      'munlukara': 'assets/img/munlu_sekil.png',
      'immino': 'assets/img/immino_sekil.png',
      'default': 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    };
    return players[name] || players["default"];
  }
}
