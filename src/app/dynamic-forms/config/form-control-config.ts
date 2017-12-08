import ChoiceConfig from './choice-config';
import {FormControlType} from './form-control-type';
import FormControlState from './form-control-state';

export default class FormControlConfig {
  state: FormControlState;
  type: FormControlType;
  choices?: Array<ChoiceConfig>;
  hint?: string;

  setValidity(isValid: boolean, messages: Array<string>) {
    this.state.isValid = isValid;
    this.state.messages = messages;
  }

  constructor(json: any) {
    this.state = new FormControlState(json.state);
    this.type = <FormControlType> json.type;
    this.choices = json.choices ? json.choices.map(choiceJson => new ChoiceConfig(choiceJson)) : undefined;
    this.hint = json.hint;
  }
}
