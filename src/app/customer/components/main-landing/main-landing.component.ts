import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICustomer} from '../../interfaces/iCustomer';
import {LogService} from '../../../core/services/log.service';

@Component({
  template: `
    <app-progress-bar></app-progress-bar>
    <div class="plr-63">
      <h1>Welcome back, Nicholas.</h1>
      <app-filter-bar [showSortMenu]="true" [showFilterLinks]="false" [showFilterMenu]="false" (onFilterChange)="applyFilter($event)"></app-filter-bar>
      <div class="row">
        <div class="col-sm-4 plr-16" *ngFor="let customer of customers">
          <app-customer-card [customer]="customer" (onCustomerSelect)="onCustomerSelect($event)"></app-customer-card>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./main-landing.component.scss']
})
export class MainLandingComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _router: Router, private _log: LogService) { }

  customers: ICustomer[];

  ngOnInit() {
    this._route.data.subscribe((response) => {
      let customers = response.data.customers;
      this._log.info(`Successfully loaded customer listing`);
      this.customers = customers;
    });
  }

  onCustomerSelect(e): void {
    const customerNumber = e;
    this._router.navigate(['customers', customerNumber]);
  }

  applyFilter(e) {
    return;
  }

}
