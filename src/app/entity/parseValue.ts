import {isNil, isEmpty} from 'lodash';
import DateTime from "../core/models/date-time";

export default function parseValue(type: string, value: any) {

  if (isNil(value) || isEmpty(value)) {
    return value;
  }

  switch (type) {
    case 'date-time':
      return new DateTime(value).asString();
    case 'number':
      return parseInt(value);
    case 'string':
      return value.toString();
    case 'boolean':
      return ('true' === value.toString());
    default : {
      return value;
    }
  }
}
