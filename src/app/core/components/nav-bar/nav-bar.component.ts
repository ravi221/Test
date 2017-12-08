import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="navbar-header">
        <div class="navbar-brand navbar-brand-centered" routerLink="/"><span class="metlife-brand"></span></div>
      </div>
      <ul class="nav navbar-nav">
        <li><a (click)="onMenuButtonClicked()"><i class="nav-icons main-menu"></i>MAIN MENU</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a><i class="nav-icons flags"></i>FLAGS</a></li>
        <li><a><i class="nav-icons history"></i>HISTORY</a></li>
        <li><a (click)="openSearch()"><i class="nav-icons search"></i>SEARCH</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output() menuButtonClick: EventEmitter<string> = new EventEmitter();
  @Output() searchButtonClick: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  openSearch() {
    // TODO: Should we emit current view param for parent component to use?
    this.searchButtonClick.emit('searchClicked');
  }

  onMenuButtonClicked() {
    this.menuButtonClick.emit('clicked!');
  }

}
