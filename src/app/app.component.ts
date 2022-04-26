import { Component } from '@angular/core';
import { Player } from 'immino-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kadro-kurucu';

  players: Player[] = [];
}
