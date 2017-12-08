import {Component, OnInit} from '@angular/core';
import {NavSorter} from '../main-nav-sorter/main-nav-sorter.component';

@Component({
  selector: 'app-customers-nav-menu',
  template: `
    <app-main-nav-template>
      <div class="nav-header">
        <app-main-nav-title>Customers</app-main-nav-title>
        <app-main-nav-sorter 
          [sorters]="sorters" 
          [activeSorter]="activeSorter"
          (change)="onSorterChange($event)">
        </app-main-nav-sorter>
      </div>

      <div class="nav-content">
        <app-customer-nav-row
          *ngFor="let customer of customers | sortWithComparator : activeSorter.comparator"
          [customer]="customer">
        </app-customer-nav-row>
      </div>
    </app-main-nav-template>
  `,
  styleUrls: ['./customers-nav-menu.component.scss']
})
export class CustomersNavMenuComponent implements OnInit {
  customers: Array<CustomerSummary>;
  sorters: Array<NavSorter<CustomerSummary>>;
  activeSorter: NavSorter<CustomerSummary>;

  constructor() {
  }

  ngOnInit() {
    this.customers = [
      {
        name: 'Charlie Brown',
        customerNumber: 5555555,
        completionPercentage: 0.25,
        effectiveDate: '2017-01-01'
      },
      {
        name: 'Acme Widgets International',
        customerNumber: 5555555,
        completionPercentage: 0.25,
        effectiveDate: '2017-01-01'
      },
      {
        name: 'Clampett Oil, LLP',
        customerNumber: 5555555,
        completionPercentage: 0.25,
        effectiveDate: '2017-01-01'
      },
      {
        name: 'Cyberdyne Systems Corp.',
        customerNumber: 5555555,
        completionPercentage: 0.25,
        effectiveDate: '2017-01-01'
      },
      {
        name: 'Globex, Inc.',
        customerNumber: 5555555,
        completionPercentage: 0.25,
        effectiveDate: '2017-01-01'
      }
    ];
    this.sorters = [
      {
        description: 'A-Z',
        comparator: (first, second) => (first.name.toLowerCase() > second.name.toLowerCase()) ? 1 : -1
      }
    ];
    this.activeSorter = this.sorters[0];
  }

  onSorterChange(newSorter: NavSorter<CustomerSummary>) {
    this.activeSorter = newSorter;
  }

}

export interface CustomerSummary {
  name: string;
  customerNumber: number;
  completionPercentage: number;
  effectiveDate: string;
}
