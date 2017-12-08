import {Component, OnInit} from '@angular/core';
import {BaseFormControl} from '../base-form-control';
import {isNil, isEmpty} from 'lodash';
import DateTime from "../../../../core/models/date-time";

@Component({
  selector: 'dyn-datepicker-control',
  template: `
    <md-input-container class="mat-datepicker">
      <input class="input-control" mdInput [mdDatepicker]="picker" [id]="id" [value]="value"
             (change)="onValueChanged($event.target.value)"/>
      <button mdSuffix [mdDatepickerToggle]="picker"></button>
    </md-input-container>
    <md-datepicker #picker (selectedChanged)="onValueChanged($event)"></md-datepicker>
  `
})
export class DatepickerControlComponent extends BaseFormControl implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    if (!isNil(this.value) && !isEmpty(this.value)) {
      this.value = new DateTime(this.value).asMoment();
    }
  }

  onValueChanged(value) {
    if (isNil(value) || isEmpty(value)) {
      this.value = value;
    } else {
      this.value = new DateTime(value).asMoment();
    }
    this.valueChanged.emit(this);
  }
}
