import { Component } from '@angular/core';
import {Player} from "immino-lib";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html'
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

  listOfData: Player[] = []
  isVisibleDrawer = false;
  newPlayerForm = this.fb.group({
    name: [null, [Validators.required]],
    strength: [null, [Validators.required]],
    position: [null]
  });
  inputValue?: string;

  get newPlayerStrengthForm(): FormControl{
    return this.newPlayerForm.get('strength') as FormControl;
  }

  constructor(private fb: FormBuilder) {}


  close(): void {
    this.isVisibleDrawer = false;
  }

  addNewPlayer() {
    this.isVisibleDrawer = true;
  }

  onStrengthChange(value: any) {
    if(value > 10){
      this.newPlayerStrengthForm.setValue(10);
    }else if(value < 0){
      this.newPlayerStrengthForm.setValue(0);
    }
  }
}
