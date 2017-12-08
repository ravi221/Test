import {Injectable} from '@angular/core';
import {
  Http,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers
} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {NotifyService} from './notify.service';
import {LogService} from './log.service';
import DateTime from '../models/date-time';

@Injectable()
export class HttpInterceptorService extends Http {

  private pendingRequests = 0;

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private notifyService: NotifyService, private _log: LogService) {
    super(backend, defaultOptions);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    this.beforeRequest('indeterminate', `Fetching data from ${url}`);
    return super.get(url, this.buildRequestOptions(options))
      .catch((err, source) => {
        return this.onCatch(err, source);
      })
      .do((res: Response) => {
        this.onSuccess(res, `Fetched at ${new DateTime().asString('lll')}`);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    this.beforeRequest('determinate', 'Saving');
    return super.post(url, body, this.buildRequestOptions(options))
      .catch((err, source) => {
        return this.onCatch(err, source);
      })
      .do((res: Response) => {
        this.onSuccess(res, `Last Saved on ${new DateTime().asString('lll')}`);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    this.beforeRequest('determinate', 'Saving');
    return super.put(url, body, this.buildRequestOptions(options))
      .catch((err, source) => {
        return this.onCatch(err, source);
      })
      .do((res: Response) => {
        this.onSuccess(res, `Last Saved on ${new DateTime().asString('lll')}`);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<any> {
    this.beforeRequest('determinate', 'Deleting');
    return super.delete(url, this.buildRequestOptions(options))
      .catch((err, source) => {
        return this.onCatch(err, source);
      })
      .do((res: Response) => {
        this.onSuccess(res, 'Deleted');
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  private buildRequestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }

    if (options.headers == null) {
      options.headers = new Headers();
    }
    options.headers.append('Content-Type', 'application/json');
    options.headers.append('Accept', 'application/json');

    return options;
  }

  private beforeRequest(loadType: string, message: string): void {
    this.pendingRequests++;
    this.notifyService.startLoader(loadType, message);
  }

  private afterRequest(): void {
    this.pendingRequests--;
    if (this.pendingRequests <= 0) {
      this.notifyService.stopLoader();
    }
  }

  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    return Observable.throw(error);
  }

  private onSuccess(res: Response, message?: string): void {
    this.notifyService.showSuccess(message || res.statusText);
  }

  private onError(error: any): void {
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'An unidentified error occurred while processing your request.';
    this.notifyService.showError(errMsg);
    if (error._body) {
      this._log.error(`API returned an error: ${error._body}`);
    }
  }

  private onFinally(): void {
    this.afterRequest();
  }

}

export function HttpInterceptorFactory(backend: ConnectionBackend, defaultOptions: RequestOptions, notifyService: NotifyService, log: LogService) {
  return new HttpInterceptorService(backend, defaultOptions, notifyService, log);
}
