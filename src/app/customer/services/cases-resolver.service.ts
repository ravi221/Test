import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {HttpInterceptorService} from '../../core/services/http-interceptor.service';
import {Observable} from 'rxjs/Observable';
import {ICustomer} from '../interfaces/iCustomer';

@Injectable()
export class CasesResolverService implements Resolve<ICustomer[]> {

  constructor(private _http: HttpInterceptorService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICustomer[]> {
    return this._http.get(`/assets/customers.mock.json`)
      .map((response) => response.json());
  }

}
