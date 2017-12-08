import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-tabs',
  template: `
    <nav class="tab-nav-bar">
      <ul>
        <li *ngFor="let link of navLinks" [hidden]="!link.path" [routerLink]="link.path" routerLinkActive="active">
          <a class="tab-nav-link">
            {{link.label}}
          </a>
        </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent implements OnInit {

  @Input() navLinks: Array<any>;

  constructor() { }

  ngOnInit(): void {

  }
}
