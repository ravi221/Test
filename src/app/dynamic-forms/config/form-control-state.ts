export default class FormControlState {
  isDisabled: boolean = false;
  isHidden: boolean = false;
  isValid: boolean = true;
  isRequired: boolean = false;
  messages: Array<string>;

  constructor(json: any) {
    this.isDisabled = json.isDisabled;
    this.isHidden = json.isHidden;
    this.isValid = json.isValid;
    this.isRequired = json.isRequired;
    this.messages = json.messages || [];
  }
}
