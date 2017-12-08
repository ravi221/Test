import {Component} from '@angular/core';

@Component({
  selector: 'app-main-nav-title',
  template: `
    <div class="main-nav-title">
      <ng-content></ng-content>
    </div>`,
  styleUrls: ['./main-nav-title.component.scss']
})
export class MainNavTitleComponent {
}
