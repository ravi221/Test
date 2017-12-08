import {Injectable} from '@angular/core';
import {Response, Headers, RequestOptions} from '@angular/http';
import {HttpInterceptorService} from '../../core/services/http-interceptor.service';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {IPlan} from '../interfaces/iPlan';
import {isNil} from 'lodash';

@Injectable()
export class DataStorageService {

  constructor(private _http: HttpInterceptorService) {

  }

  loadCustomer(customerNumber: number): Observable<number> {
    return Observable.create(observer => {
      observer.next(customerNumber);
      observer.complete();
    });
  }

  load(planId: string): Observable<IPlan> {
    const url = `${environment.apiUrl}/plans/${planId}`;
    return this._http.get(url)
      .map((response: Response) => {
        if (!response.ok) {
          return this.handleError(response.statusText);
        }
        const body = response.json();

        if (isNil(body)) {
          return this.handleError('Response body is empty');
        }
        return body;
      });
  }

  save(planId: string, payload: any): Observable<any> {
    const url = `${environment.apiUrl}/plans/${planId}`;
    const options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('X-IBM-Client-Id', environment.clientId);
    options.headers.append('System', 'GPR-UI');
    options.headers.append('UserId', 'nnguyen1');

    return this._http.put(url, payload, options)
      .map((response: Response) => {
        if (!response.ok) {
          return this.handleError(response.statusText);
        }
        const body = response.json();
        return body;
      });
  }

  validate(planId: string, payload: any): Observable<any> {
    const url = `${environment.apiUrl}/plans/${planId}`;

    return this._http.post(url, payload)
      .map((response: Response) => {
        if (!response.ok) {
          return this.handleError(response.statusText);
        }
        const body = response.json();
        return body;
      });
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'An unidentified error occurred. Time to debug!';
    return Observable.throw(errMsg);
  }
}
