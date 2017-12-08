import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ICustomer} from "../../interfaces/iCustomer";

@Component({
  selector: 'app-customer-card',
  template: `
    <div class="card">
      <a class="icons context-menu"></a>
      <p>{{customer.customerNumber}}</p>
      <h3>{{customer.name}}</h3>
      <p class="text-muted">Effective Date: {{customer.effectiveDate}}</p>
      <hr/>
      <p class="completion" [hidden]="!customer.completionPercentage">{{customer.completionPercentage}}% Complete</p>
      <p class="activity">{{customer.lastActivity}}</p>
      <a (click)="selectCustomer(customer.customerNumber)"><strong>{{customer.completionPercentage === 0 ? 'Start' : 'Resume'}}</strong></a>
    </div>

  `,
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent implements OnInit {

  @Input() customer: ICustomer;
  @Output() onCustomerSelect: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectCustomer(e) {
    this.onCustomerSelect.emit(e);
  }

}
