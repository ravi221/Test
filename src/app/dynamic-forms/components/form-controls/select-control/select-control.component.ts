import {Component} from '@angular/core';
import {BaseFormControl} from '../base-form-control';

@Component({
  selector: 'dyn-select-control',
  template: `
    <select class="input-control" (change)="onValueChanged($event.target.value)" [disabled]="isDisabled">
      <option *ngFor="let choice of choices | notHidden"
              [value]="choice.value"
              [disabled]="choice.state?.isDisabled"
              [selected]="value == choice.value">
        {{choice.label}}
      </option>
    </select>`
})
export class SelectControlComponent extends BaseFormControl {
  constructor() {
    super();
  }
}
