import {Component} from '@angular/core';
import {BaseFormControl} from '../base-form-control';

@Component({
  selector: 'dyn-input-control',
  template: `<input [id]="id" class="input-control" [type]="type" [value]="value"
                    (change)="onValueChanged($event.target.value)" [disabled]="isDisabled">`
})
export class InputControlComponent extends BaseFormControl {
  constructor() {
    super();
  }
}
