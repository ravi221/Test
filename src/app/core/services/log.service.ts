import {Injectable} from '@angular/core';
import { environment } from 'environments/environment';

@Injectable()
export class LogService {
  enabled = !environment.production;

  constructor() {
  }

  get debug() {
    return this.enabled ? console.debug.bind(console) : this.noop;
  }

  get info() {
    return this.enabled ? console.info.bind(console) : this.noop;
  }

  get log() {
    return this.enabled ? console.log.bind(console) : this.noop;
  }

  get warn() {
    return this.enabled ? console.warn.bind(console) : this.noop;
  }

  get error() {
    return this.enabled ? console.error.bind(console) : this.noop;
  }

  private noop() {
  }

}
