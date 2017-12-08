import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {HttpInterceptorService} from '../../core/services/http-interceptor.service';
import DynamicFormConfig from '../../dynamic-forms/config/dynamic-form-config';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ViewConfigDataService {

  constructor(private _http: HttpInterceptorService) {
  }

  getView(coverageId: number): Observable<DynamicFormConfig> {
    return this._http.get(`/assets/${coverageId}_view.json`)
      .map((response: Response) => new DynamicFormConfig(response.json()));
  }
}
