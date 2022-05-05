import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Player } from '@codefirst-io/team-builder';

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
    }
  ];

  listOfData: Player[] = [];
  isVisibleDrawer = false;
  newPlayerForm = this.fb.group({
    name: [null, [Validators.required]],
    strength: [null, [Validators.required]],
    position: [null]
  });
  inputValue?: string;

  constructor(private fb: FormBuilder) {
  }

  get newPlayerStrengthForm(): FormControl {
    return this.newPlayerForm.get('strength') as FormControl;
  }

  close(): void {
    this.isVisibleDrawer = false;
  }

  addNewPlayer() {
    this.isVisibleDrawer = true;
  }

  onStrengthChange(value: any) {
    if (value > 10) {
      this.newPlayerStrengthForm.setValue(10);
    } else if (value < 0) {
      this.newPlayerStrengthForm.setValue(0);
    }
  }
}
