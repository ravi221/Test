import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {NotifyService} from '../../services/notify.service';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div class="progress">
      <div [class]="mode" [hidden]="!active"></div>
    </div>`,
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements AfterViewInit, OnDestroy {

  subscription: Subscription;
  active: boolean;
  mode: string;

  constructor(private notifyService: NotifyService) {
  }

  ngAfterViewInit() {
    this.subscription = this.notifyService.loaderSource.subscribe(
      state => {
        this.active = state.active;
        this.mode = state.type;
      });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
