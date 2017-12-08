import { Component, OnInit } from '@angular/core';
import {ICrumb} from "../../interfaces/iCrumb";

@Component({
  selector: 'app-breadcrumbs',
  template: `
    <div>
      <a *ngFor="let crumb of crumbs">{{crumb.label}}<span>/</span></a>
    </div>
  `,
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  crumbs: ICrumb[] = [];

  constructor() { }

  ngOnInit() {
    // TODO: Create and subscribe to singleton service which will maintain crumbs
    this.crumbs.push({
      label: 'Home',
      path: ''
    })
  }

}
