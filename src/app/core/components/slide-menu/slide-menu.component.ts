import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-slide-menu',
  template: `
    <div class="slide-menu-backdrop" [@fadeInOut]="state.visibility" (click)="closeSlideMenu()"></div>
    <div class="slide-menu" [@slideInOut]="state.visibility">
      <ng-content></ng-content>
    </div>`,
  styleUrls: ['./slide-menu.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('visible', style({transform: 'translate3d(0, 0, 0)'})),
      state('hidden', style({transform: 'translate3d(-105%, 0, 0)'})),
      transition('visible <=> hidden', animate('300ms ease-in-out'))
    ]),
    trigger('fadeInOut', [
      state('visible', style({opacity: '0.64', display: 'block'})),
      state('hidden', style({opacity: '0', display: 'none'})),
      transition('visible <=> hidden', animate('300ms ease-in-out'))
    ])
  ]
})
export class SlideMenuComponent implements OnInit {
  state: SlideMenuState;

  ngOnInit() {
    this.state = {
      visibility: 'hidden',
      isOpening: false
    };
  }

  closeSlideMenu() {
    if (this.state.visibility === 'visible' && !this.state.isOpening) {
      this.state.visibility = 'hidden';
    }
  }

  openSlideMenu() {
    if (this.state.visibility === 'hidden') {
      this.state.isOpening = true;
      this.state.visibility = 'visible';
      setTimeout(() => this.state.isOpening = false, 500);
    }
  }
}

export interface SlideMenuState {
  visibility: 'hidden' | 'visible';
  isOpening: boolean;
}
