import SchemaConfig from './schema-config';
import RuleConfig from './rule-config';
import FormControlConfig from './form-control-config';

export default class QuestionConfig {
  private _schema: SchemaConfig;
  id: string;
  order: number;
  label: string;
  model?: string;
  control: FormControlConfig;
  rules: Array<RuleConfig>;

  constructor(json: any, key: string) {
    this.id = key;
    this.order = json.order;
    this.label = json.label;
    this.model = json.model;
    this.control = new FormControlConfig(json.control);
    this.rules = json.rules ? new Array<RuleConfig>(json.rules) : undefined;
    this.schema = json.schema ? new SchemaConfig(json.schema) : undefined;
  }

  get schema(): SchemaConfig {
    Object.keys(this._schema).forEach(key => !this._schema[key] && delete this._schema[key]);
    return this._schema;
  }

  set schema(schema: SchemaConfig) {
    this._schema = schema;
  }
}
