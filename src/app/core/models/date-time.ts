import * as moment from 'moment';

export default class DateTime {
  private _date: moment.Moment;

  constructor(value?: DateTime | string) {
    if (value instanceof DateTime) {
      return value;
    } else if (moment.isMoment(value)) {
      this._date = value;
    } else if (value) {
      this._date = moment(value, ['MM/DD/YYYY', 'M/D/YYYY', 'YYYY-MM-DD']);
    } else {
      this._date = moment();
    }
  }

  public asString(format?: string): string {
    return this._date.format(format);
  }

  public asMoment(): moment.Moment {
    return this._date;
  }

  // Used by JSON.stringify
  toJSON() {
    return this.asString();
  }
}
