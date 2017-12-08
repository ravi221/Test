export default class RuleConfig {
  condition?: string;
  action?: string;
  oneOf?: Array<RuleConfig>;

  constructor(json: any) {
    this.condition = json.condition;
    this.action = json.action;
    this.oneOf = json.oneOf ? new Array<RuleConfig>(json.oneOf) : undefined;
  }
}
