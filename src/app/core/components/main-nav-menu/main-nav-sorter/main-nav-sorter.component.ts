import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-nav-sorter',
  template: `
    <div class="sorter-label">{{activeSorter.description}}</div>
  `,
  styleUrls: ['./main-nav-sorter.component.scss']
})
export class MainNavSorterComponent implements OnInit {
  @Input() sorters: Array<NavSorter<any>>;
  @Input() activeSorter: NavSorter<any>;

  @Output() change: EventEmitter<NavSorter<any>> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}

export interface NavSorter<T> {
  description: string;
  comparator: (first: T, second: T) => number;
}
