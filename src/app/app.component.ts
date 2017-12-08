import {Component, ViewChild} from '@angular/core';
import {SlideMenuComponent} from './core/components/slide-menu/slide-menu.component';

@Component({
  selector: 'app-root',
  template: `
    <app-nav-bar
      (menuButtonClick)="openSlideMenu($event)"
      (searchButtonClick)="openSearch($event)">
    </app-nav-bar>
    <div class="clear-navbar"></div>
    <app-slide-menu>
      <app-main-nav-menu (close)="closeSlideMenu()"></app-main-nav-menu>
    </app-slide-menu>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  @ViewChild(SlideMenuComponent) private slideMenu: SlideMenuComponent;

  openSearch(e): any {
    return;
  }

  openSlideMenu(e): void {
    this.slideMenu.openSlideMenu();
  }

  closeSlideMenu(): void {
    this.slideMenu.closeSlideMenu();
  }
}
