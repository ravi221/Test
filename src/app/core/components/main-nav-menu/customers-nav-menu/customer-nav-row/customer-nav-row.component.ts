import {Component, Input, OnInit} from '@angular/core';
import {CustomerSummary} from '../customers-nav-menu.component';

@Component({
  selector: 'app-customer-nav-row',
  template: `
    <div class="customer-nav-row">
      <div class="customer-icon">
        <i class="material-icons">business</i>
      </div>
      <div class="customer-info">
        <div class="customer-name">{{customer.name}}</div>
        <div class="customer-subtitle">{{customer.completionPercentage * 100}}% Complete</div>
      </div>
    </div>`,
  styleUrls: ['./customer-nav-row.component.scss']
})
export class CustomerNavRowComponent implements OnInit {
  @Input() customer: CustomerSummary;

  constructor() {
  }

  ngOnInit() {
  }

}
