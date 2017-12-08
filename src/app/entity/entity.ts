import {isNil, isArray} from 'lodash';
import DSL from '../vendor/dsl-wrapper';
import Validator from '../vendor/validator';
import DynamicFormConfig from '../dynamic-forms/config/dynamic-form-config';
import DataStore from './data-store';
import {IObservedItem} from '../core/interfaces/iObservedItem';
import {Subscription} from 'rxjs/Subscription';
import parseValue from './parseValue';
import {IValidationResult} from '../vendor/interfaces/iValidationResult';
import {IFormState} from '../core/interfaces/iFormState';

export default class Entity {
  private data: DataStore;
  private form: DynamicFormConfig;
  private dsl: DSL;
  private validator: Validator;

  constructor(data: any, viewConfig?: DynamicFormConfig, tokens?: Map<string, any>) {
    this.data = new DataStore(data);
    this.form = viewConfig;

    this.dsl = new DSL();
    this.validator = new Validator();

    this.registerToken('log', console.info);
    this.registerToken('setById', this.setById);
    this.registerToken('setIn', this.setIn);
    this.registerToken('getIn', this.getIn);
    this.registerToken('getControl', this.getControlById);
    this.registerToken('getSection', this.getSectionById);

    if (tokens) {
      tokens.forEach((token, key) => {
        this.registerToken(key, token);
      });
    }

    this.form.questionsById.forEach((question) => {
      if (question.model) {
        let value = this.getIn(question.model);
        // sanitize value in accordance to schema
        value = parseValue(question.schema.format || question.schema.type, value);
        this.runValidations(question.id, value);
      }
      this.runRules(question.id);
    });
  }

  private runRules = (id: string): void => {
    const rules = this.form.getRules(id);
    if (rules) {
      this.dsl.execute(id, rules, this);
    }
  }

  private runValidations = (id: string, currentValue: any): void => {
    const question = this.form.getQuestion(id);
    const control = question.control;
    const schema = question.schema;
    if (schema) {
      const result = this.validator.validate(currentValue, schema, {propertyName: `The current value '${currentValue}'`});

      if (control.state.isValid !== result.isValid) {
        const previousResult = <IValidationResult>{
          isValid: control.state.isValid,
          messages: control.state.messages
        };
        this.validator.emitSource(id, previousResult, result);
      }
      control.setValidity(result.isValid, result.messages);
      this.data.setValidity(id, result.isValid);
    }
  }

  subscribe = (subscribeTo: string, handler: any): Subscription => {
    const items = subscribeTo.split(':');
    const type = items[0];
    const subscriberId = items[1];
    switch (type) {
      case 'model':
        if (subscriberId) {
          return this.data.dataSource
            .filter((item) => item.id === subscriberId)
            .subscribe((item: IObservedItem) => handler(item));
        }
        return this.data.dataSource.subscribe((item: IObservedItem) => handler(item));
      case 'validation':
        if (subscriberId) {
          return this.validator.validationSource
            .filter((item) => item.id === subscriberId)
            .subscribe((item: IObservedItem) => handler(item));
        }
        return this.validator.validationSource.subscribe((item: IObservedItem) => handler(item));
      case 'rules':
        if (subscriberId) {
          return this.dsl.ruleSource
            .filter((item) => item.id === subscriberId)
            .subscribe((item: IObservedItem) => handler(item));
        }
        return this.dsl.ruleSource.subscribe((item: IObservedItem) => handler(item));
      case 'form':
        if (subscriberId) {
          return this.form.source
            .filter((item) => item.changedById === subscriberId)
            .subscribe((item: IFormState) => handler(item));
        }
        return this.form.source.subscribe((item: IFormState) => handler(item));
      default:
        console.error('Invalid subscription type.');
    }
  }

  getIn = (path: string): any => {
    if (isNil(path)) {
      return;
    }
    return this.data.getIn(path);
  }

  setIn = (path: string, value: any): any => {
    if (isNil(path)) {
      return;
    }
    path = isArray(path) ? path.join('.') : path;
    const id = this.form.getId('model', path);
    const currentValue = this.getIn(path);
    const schema = this.form.getSchema(id);

    if (schema) {
      // sanitize value in accordance to schema
      value = parseValue(schema.format || schema.type, value);
    }

    if (currentValue === value) {
      return;
    }

    this.data.setIn(id, path, value);

    if (id) {
      this.runValidations(id, value);
      this.runRules(id);
    } else {
      console.warn(`Entity model modified at path '${path}' for an unknown form component.`);
    }
    return this.toJS();
  }

  getById = (id: string): any => {
    if (isNil(id)) {
      return;
    }
    const path = this.form.getPath(id);
    if (!isNil(path)) {
      return this.getIn(path);
    }
  }

  setById = (id: string, value: any) => {
    if (isNil(id)) {
      return;
    }
    const path = this.form.getPath(id);
    if (!isNil(path)) {
      return this.setIn(path, value);
    }
  }

  getControlById = (id: string) => {
    return this.form.getControl(id);
  }

  getSectionById = (id: string) => {
    return this.form.getSection(id);
  }

  toJS = () => {
    return this.data.toJS();
  }

  toJSON = () => {
    return this.data.toJSON();
  }

  isValid = (id?: string) => {
    if (!id) {
      return this.data.isValid();
    }
    const control = this.form.getControl(id);
    return control.state.isValid;
  }

  registerToken(name: string, callback: any) {
    this.dsl.register(name, callback);
  }

  emitFormChange = (newState: IFormState): void => {
    this.form.emitFormChange(newState);
  }
}
