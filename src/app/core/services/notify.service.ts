import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {IAlertState} from '../interfaces/iAlertState';
import {ILoaderState} from '../interfaces/iLoaderState';

const DEFAULT_LOADER = {
  active: false,
  type: 'indeterminate'
};

const DEFAULT_ALERT = {
  severity: 'info',
  inFlight: false,
  message: '',
  icon: '',
  showSave: false,
  saveText: ''
};

@Injectable()
export class NotifyService {

  private alertState: IAlertState = DEFAULT_ALERT;

  private loaderState: ILoaderState = DEFAULT_LOADER;

  private loaderSubject = new Subject<ILoaderState>();

  private alertSubject = new Subject<IAlertState>();

  loaderSource = this.loaderSubject.asObservable();

  alertSource = this.alertSubject.asObservable();

  constructor() {
  }

  startLoader(loadType?: string, message?: string) {
    this.loaderState.active = true;
    this.loaderState.type = loadType || 'indeterminate';
    this.loaderSubject.next(this.loaderState);
    if (message) {
      this.alertState.inFlight = true;
      this.alertState.message = message;
      this.alertSubject.next(this.alertState);
    }
  }

  stopLoader() {
    this.loaderState.active = false;
    this.loaderState.type = 'indeterminate';
    this.loaderSubject.next(this.loaderState);
  }

  showError(error: any) {
    if (error) {
      this.alertState.severity = 'error';
      this.alertState.inFlight = false;
      this.alertState.message = error;
      this.alertSubject.next(this.alertState);
    }
  }

  showSuccess(message: any) {
    if (message) {
      this.alertState.severity = 'success';
      this.alertState.inFlight = false;
      this.alertState.message = message;
      this.alertSubject.next(this.alertState);
    }
  }
}
