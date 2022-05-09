import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Player} from "@codefirst-io/team-builder/src/lib/models";


@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls:  ['player-table.component.css']
})
export class PlayerTableComponent {
  listOfColumn = [
    {
      title: 'Player',
      compare: null,
      priority: false
    },
    {
      title: 'Strength',
      priority: 3
    },
    {
      title: 'Position',
      priority: 2
    },
  ];

  playerList: Player[] = [ new Player('player6', 9)]
  isVisibleDrawer = false;
  newPlayerForm = this.fb.group({
    name: [null, [Validators.required]],
    strength: [null, [Validators.required]],
    position: [null]
  });
  inputValue!: string;

  get newPlayerStrengthFormControl(): FormControl{
    return this.newPlayerForm.get('strength') as FormControl;
  }

  get newPlayerNameFormControl(): FormControl{
    return this.newPlayerForm.get('name') as FormControl;
  }

  constructor(private fb: FormBuilder) {}


  closeDrawer(): void {
    this.isVisibleDrawer = false;
  }

  addNewPlayer() {
    this.isVisibleDrawer = true;
  }

  onStrengthChange(value: any) {
    if(value > 10){
      this.newPlayerStrengthFormControl.setValue(10);
    }else if(value < 0){
      this.newPlayerStrengthFormControl.setValue(0);
    }
  }

  saveNewPlayer() {
    if(this.newPlayerForm.valid){
      this.saveSinglePlayer();
    }if(this.inputValue){
      this.saveMultiplePlayer();
    }
  }

  saveSinglePlayer() {
    const newPlayer = new Player(this.newPlayerNameFormControl.value, this.newPlayerStrengthFormControl.value);
    this.playerList = [...this.playerList, newPlayer];
    this.newPlayerForm.reset();
  }

  saveMultiplePlayer() {
    let lines = this.inputValue.split(/[\r\n]+/);
    for (const line of lines){
      const lastIndex = line.length -1;
      line[lastIndex] === ':' ? line.slice(lastIndex,0) : null;
      const parsedLine = line.split(':');
      const isLineValid = parsedLine.every(a => a !== '');
      if(isLineValid){
        const newPlayer = new Player(parsedLine[0], Number(parsedLine[1]));
        this.playerList = [...this.playerList, newPlayer];
      }
    }
    this.inputValue = '';
    this.closeDrawer();
  }
}
