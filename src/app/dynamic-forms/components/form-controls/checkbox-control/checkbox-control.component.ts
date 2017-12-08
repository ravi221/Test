import {Component} from '@angular/core';
import {BaseFormControl} from '../base-form-control';

@Component({
  selector: 'dyn-checkbox-control',
  template: `
    <div class="checkbox-control">
      <input [id]="id" type="checkbox" [checked]="value" (change)="onValueChanged($event.target.checked)"
             [disabled]="isDisabled"/>
      <label [for]="id">{{label}}</label>
    </div>
  `
})
export class CheckboxControlComponent extends BaseFormControl {
  constructor() {
    super();
  }
}
