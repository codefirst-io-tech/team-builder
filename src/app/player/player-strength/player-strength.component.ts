import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, Input, NgModule } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSliderModule } from 'ng-zorro-antd/slider';

export const PLAYER_STRENGTH_SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PlayerStrengthComponent),
  multi: true
};

@Component({
  selector: 'app-player-strength',
  template: `
    <nz-row>
      <nz-form-label nzFor="name">Strength</nz-form-label>
      <nz-col nzSpan="12">
        <nz-slider [disabled]="disabled" [nzMin]="min" [nzMax]="max" (ngModelChange)="propagateChange($event)" [(ngModel)]="value"></nz-slider>
      </nz-col>
      <div nz-col nzSpan="4">
        <nz-input-number
          [nzMin]="1"
          [nzMax]="10"
          [ngStyle]="{ marginLeft: '16px' }"
          [(ngModel)]="value"
          (ngModelChange)="propagateChange($event)"
          [disabled]="disabled"
        ></nz-input-number>
      </div>
    </nz-row>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PLAYER_STRENGTH_SELECT_VALUE_ACCESSOR]
})
export class PlayerStrengthComponent implements ControlValueAccessor {

  @Input() min: number = 1;
  @Input() max: number = 10;
  value = this.min;
  disabled = false;

  propagateChange = (_: number) => {
  };

  propagateTouched = () => {
  };

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: never): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: never): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}

@NgModule({
  declarations: [PlayerStrengthComponent],
  imports: [CommonModule, FormsModule, NzGridModule, NzSliderModule, NzInputNumberModule, NzFormModule],
  exports: [PlayerStrengthComponent]
})
export class PlayerStrengthComponentModule {
}
