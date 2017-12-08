import {Component} from '@angular/core';
import {BaseFormControl} from '../base-form-control';

@Component({
  selector: 'dyn-radio-control',
  template: `
    <div class="radio-group">
      <div class="radio-control" *ngFor="let choice of choices | notHidden">
        <input class="radio"
               type="radio"
               [id]="id + choice?.value"
               [value]="choice?.value"
               (change)="onValueChanged(choice?.value)"
               [checked]="value == choice?.value"
               [disabled]="isDisabled || choice.isDisabled"/>
        <label [for]="id + choice?.value">{{choice?.label}}</label>
      </div>
    </div>`
})
export class RadioControlComponent extends BaseFormControl {
  constructor() {
    super();
  }
}
