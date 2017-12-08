import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-nav-template',
  template: `
    <div class="main-nav-header">
      <ng-content select=".nav-header"></ng-content>
    </div>

    <div class="horizontal-rule"></div>

    <div class="main-nav-content">
      <ng-content select=".nav-content"></ng-content>
    </div>`,
  styleUrls: ['./main-nav-template.component.scss']
})
export class MainNavTemplateComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
