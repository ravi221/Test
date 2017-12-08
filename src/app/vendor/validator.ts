import {Validator as SchemaValidator, Schema, Options} from 'jsonschema';
import {IValidationResult} from './interfaces/iValidationResult';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {IObservedItem} from '../core/interfaces/iObservedItem';

export default class Validator {

  private _schemaValidator: SchemaValidator;
  private validationSubject: Subject<IObservedItem> = new Subject<IObservedItem>();
  validationSource: Observable<IObservedItem> = this.validationSubject.asObservable();

  constructor() {
    this._schemaValidator = new SchemaValidator();
  };

  validate(value: any, schema: Schema, options: Options): IValidationResult {
    if (this.isNilOrEmpty(value)) {
      return <IValidationResult> {
        isValid: true,
        messages: []
      }
    }
    const schemaResult = this._schemaValidator.validate(value, schema, options);

    return <IValidationResult> {
      isValid: schemaResult.valid,
      messages: !schemaResult.valid ? schemaResult.errors.map((e) => e.toString()) : []
    }
  }

  emitSource(id: string, previousValue: IValidationResult, value: IValidationResult): void {
    this.validationSubject.next(<IObservedItem>{id: id, previousValue: previousValue, currentValue: value});
  }

  private isNilOrEmpty(value: any) {
    return (typeof value === 'undefined' || value === null || value === '');
  }
}
