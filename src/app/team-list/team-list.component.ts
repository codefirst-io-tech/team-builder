import {Component, Input} from '@angular/core';
import {Team} from "@codefirst-io/team-builder/src/lib/models";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html'
})
export class TeamListComponent {
  @Input()
  data:Team[] = [];
}
