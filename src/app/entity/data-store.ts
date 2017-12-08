import {cloneDeep, get, set} from 'lodash';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {IObservedItem} from '../core/interfaces/iObservedItem';

export default class DataStore {
  private _data: any;
  private _errorMap: Map<string, boolean>;
  private dataSubject: Subject<IObservedItem> = new Subject<IObservedItem>();
  dataSource: Observable<IObservedItem> = this.dataSubject.asObservable();

  constructor(model: any) {
    this._data = model;
    this._errorMap = new Map<string, boolean>();
  }

  setIn(id: string, path: string, value: any): void {
    const previousValue = this.getIn(path);
    set(this._data, path, value);
    if (id) {
      this.dataSubject.next(<IObservedItem>{id: id, previousValue: previousValue, currentValue: value});
    }
  }

  getIn(path: string): any {
    return cloneDeep(get(this._data, path));
  }

  toJS = (): any => {
    return cloneDeep(this._data);
  }

  toJSON = (): string => {
    return JSON.stringify(this._data);
  }

  setValidity = (id: string, isValid: boolean): void => {
    this._errorMap.set(id, isValid);
  }

  isValid = (): boolean => {
    return Array.from(this._errorMap.values()).every((value) => value === true);
  }
}
