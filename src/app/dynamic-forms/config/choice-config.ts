import FormControlState from './form-control-state';

export default class ChoiceConfig {
  label: string;
  value: any;
  state?: FormControlState;

  constructor(json: any) {
    this.label = json.label;
    this.value = json.value;
    this.state = json.state ? new FormControlState(json.state) : undefined;
  }
}
