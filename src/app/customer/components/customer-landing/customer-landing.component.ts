import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICustomer} from '../../interfaces/iCustomer';
import {IPlan} from '../../../plan/interfaces/iPlan';
import {IFilterLink} from "../../../core/interfaces/iFilterLink";

@Component({
  template: `
    <app-breadcrumbs></app-breadcrumbs>
    <div class="banner">
      <h4><strong>{{customer?.name}}</strong>&nbsp;<i class="material-icons">expand_less</i></h4>
      <p class="subtitle">Customer #: {{customer?.customerNumber}}</p>
      <p class="subtitle">Effective Date: {{customer?.effectiveDate}}</p>
      <p class="subtitle">Status: {{customer?.status}}</p>
    </div>
    <div class="buttons">
      <button class="btn btn-secondary">ADD A PLAN</button>
      <button class="btn btn-tertiary">CUSTOMER INFO</button>
      <button class="btn btn-tertiary">MASS UPDATE TOOL</button>
    </div>
    <div class="row">
      <div class="col-sm-9">
        <app-filter-bar [showSortMenu]="false" [showFilterLinks]="true" [showFilterMenu]="true"
                        [filterLinks]="filterLinks" (onFilterChange)="applyFilter($event)"></app-filter-bar>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-9">
        <app-empty-card></app-empty-card>
      </div>
      <div class="col-sm-3">
        <app-empty-card></app-empty-card>
        <app-empty-card></app-empty-card>
      </div>
    </div>
  `,
  styleUrls: ['./customer-landing.component.scss']
})
export class CustomerLandingComponent implements OnInit {

  customer: ICustomer;
  plans: IPlan[];
  filterLinks: IFilterLink[] = [];

  constructor(private _router: Router, private _route: ActivatedRoute) {
    const staticFilters: IFilterLink[] = [
      <IFilterLink>{id: '0', label: 'ALL', enabled: true, active: true},
      <IFilterLink>{id: '201000', label: 'DENTAL', enabled: true, active: false},
      <IFilterLink>{id: '204000', label: 'VISION', enabled: true, active: false},
      <IFilterLink>{id: '2,3,4,5,6,7,9,12,14,16,17,18,19,22,208000', label: 'LIFE', enabled: true, active: false},
      <IFilterLink>{
        id: '202000,203000,203003,203004,203005,203006,203007,203009,203010,303000',
        label: 'DISABILITY',
        enabled: true,
        active: false
      },
      <IFilterLink>{
        id: '13,21,20,207000,30,206000,205000,24,406000,31,209000,35,',
        label: 'VOLUNTARY',
        enabled: true,
        active: false
      }
    ];
    this.filterLinks = staticFilters;
  }

  ngOnInit() {
    this._route.data.subscribe((response) => {
      this.customer = response.data;
      // TODO: Go get list of plans for customer
    });
  }


  applyFilter(e) {
    return;
  }
}
