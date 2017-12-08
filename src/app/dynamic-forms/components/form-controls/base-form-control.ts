import {EventEmitter, Input, Output} from '@angular/core';
import {FormControlType} from '../../config/form-control-type';
import ChoiceConfig from '../../config/choice-config';

export abstract class BaseFormControl {
  @Input() value: any;
  @Input() id: string;
  @Input() type: FormControlType;
  @Input() label: string;
  @Input() choices: Array<ChoiceConfig>;

  @Input() isDisabled: boolean;
  @Input() isHidden: boolean;
  @Input() isValid: boolean;
  @Input() isRequired: boolean;

  @Output() valueChanged = new EventEmitter();

  onValueChanged(value) {
    this.value = value;
    this.valueChanged.emit(this);
  }
}
