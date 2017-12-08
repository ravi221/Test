import {Component} from '@angular/core';
import {BaseFormControl} from '../base-form-control';

@Component({
  selector: 'dyn-fallback-control',
  template: `<label>{{value}}</label>`
})
export class FallbackControlComponent extends BaseFormControl {
  constructor() {
    super();
  }
}
