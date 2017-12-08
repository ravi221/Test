export default class SchemaConfig {
  type: string;
  pattern?: string;
  format?: string;
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: boolean;
  exclusiveMaximum?: boolean;
  multipleOf?: number;
  allOf?: SchemaConfig[];
  anyOf?: SchemaConfig[];
  oneOf?: SchemaConfig[];
  not?: SchemaConfig;
  additionalItems?: boolean | SchemaConfig;
  items?: SchemaConfig[];
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  'enum'?: any[];

  constructor(json: any) {
    this.type = json.type;
    this.pattern = json.pattern;
    this.format = json.format;
    this.minLength = json.minLength;
    this.maxLength = json.maxLength;
    this.minimum = json.minimum;
    this.maximum = json.maximum;
    this.exclusiveMaximum = json.exclusiveMaximum;
    this.exclusiveMinimum = json.exclusiveMinimum;
    this.multipleOf = json.multipleOf;
    this.allOf = json.allOf ? new Array<SchemaConfig>(json.allOf) : undefined;
    this.anyOf = json.anyOf ? new Array<SchemaConfig>(json.anyOf) : undefined;
    this.oneOf = json.oneOf ? new Array<SchemaConfig>(json.oneOf) : undefined;
    this.not = json.not ? new SchemaConfig(json.not) : undefined;
    if (json.additionalItems) {
      this.additionalItems = typeof json.additionalItems === 'boolean' ? json.additionalItems : new SchemaConfig(json.additionalItems);
    }
    this.items = json.items ? new Array<SchemaConfig>(json.items) : undefined;
    this.maxItems = json.maxItems;
    this.minItems = json.minItems;
    this.uniqueItems = json.uniqueItems;
    this.enum = json.enum ? new Array<any>(json.enum) : undefined;

  }
}
