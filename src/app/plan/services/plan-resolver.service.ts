import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {DataStorageService} from './data-storage.service';
import {Observable} from 'rxjs/Observable';
import {IPlan} from '../interfaces/iPlan';

@Injectable()
export class PlanResolverService implements Resolve<IPlan> {

  constructor(private _dataStorageService: DataStorageService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPlan> {
    return this._dataStorageService.load(route.params.planId)
      .map((response: IPlan) => response);
  }

}
