import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IFilterLink} from "../../interfaces/iFilterLink";

@Component({
  selector: 'app-filter-bar',
  template: `
    <div class="bar">
      <ul>
        <li *ngFor="let link of filterLinks">
          <a (click)="applyFilter(link.id)" [class]="link.active ? 'active': ''">{{link.label}}</a>
        </li>
      </ul>
      <div class="menus">
        <a *ngIf="showFilterMenu">FILTERS&nbsp;<i class="material-icons">arrow_drop_down</i></a>
        <a *ngIf="showSortMenu">SORT&nbsp;<i class="material-icons">arrow_drop_down</i></a>
      </div>
    </div>
  `,
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {

  @Input() filterLinks: IFilterLink[] = [];
  @Input() showFilterLinks: boolean = true;
  @Input() showFilterMenu: boolean = true;
  @Input() showSortMenu: boolean = false;
  @Output() onFilterChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  applyFilter(id: string): void {
    this.filterLinks.forEach((filter) => {
      if (filter.id === id) {
        filter.active = true;
      } else {
        filter.active = false;
      }
    });
    this.onFilterChange.emit(id);
  }

}
