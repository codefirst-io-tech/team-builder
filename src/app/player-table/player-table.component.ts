import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Player} from '@codefirst-io/team-builder';
import {PlayerService} from "../player/player.service";

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerTableComponent {
  listOfData: Player[] = [];
  isVisibleDrawer = false;
  strength: number = 0;

  newPlayerForm = new FormGroup({
    name: new FormControl(''),
    strength: new FormControl(this.strength),
  });

  constructor(private playerService: PlayerService) {
    this.strengthFormControl.valueChanges.subscribe(console.log);
  }

  get strengthFormControl(): FormControl {
    return this.newPlayerForm.get('strength') as FormControl;
  }

  get nameFormControl(): FormControl {
    return this.newPlayerForm.get('name') as FormControl;
  }

  close(): void {
    this.isVisibleDrawer = false;
  }

  submit(): void {
    const strength = this.strengthFormControl.value;
    const name = this.nameFormControl.value;
    this.listOfData.push(new Player(name, strength));
    this.listOfData = [...this.listOfData];
    this.playerService.players$.next(this.listOfData);
    this.isVisibleDrawer = false;
  }

  addNewPlayer() {
    this.isVisibleDrawer = true;
  }
}
