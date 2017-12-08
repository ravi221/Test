import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-nav-menu',
  template: `
    <div class="main-nav-close">
      <i class="material-icons" (click)="closeNavMenu()">close</i>
    </div>
    <app-customers-nav-menu *ngIf="context === 'root'"></app-customers-nav-menu>`,
  styleUrls: ['./main-nav-menu.component.scss']
})
export class MainNavMenuComponent implements OnInit {
  context: string;

  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(e => {
      this.context = 'root';
      // this.subtitle = `Contextual details for state ${this.router.url}`;
    });
  }

  closeNavMenu() {
    this.close.emit();
  }

}
