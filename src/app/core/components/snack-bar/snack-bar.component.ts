import {Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {NotifyService} from '../../services/notify.service';
import Entity from '../../../entity/entity';
import {IFormState} from '../../interfaces/iFormState';
import {IAlertState} from '../../interfaces/iAlertState';

@Component({
  selector: 'app-snack-bar',
  template: `
    <div class="snackbar" [hidden]="!showBar">
      <p><i class="material-icons">{{alertState.icon}}</i>&nbsp;&nbsp;{{alertState.message}}</p>
      <button (click)="save($event)" *ngIf="alertState.showSave">{{alertState.saveText}}</button>
    </div>
  `,
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnDestroy, OnChanges {

  @Input() model: Entity;
  @Output() onSaveClicked = new EventEmitter<any>();

  notifySub: Subscription;
  formSub: Subscription;
  alertState: IAlertState = {
    severity: 'info',
    inFlight: false,
    message: '',
    icon: '',
    showSave: false,
    saveText: ''
  };
  showBar = false;
  timeoutId: any;

  constructor(private notifyService: NotifyService) {
    this.notifySub = this.notifyService.alertSource.subscribe(
      alertState => {
        this.alertState.severity = alertState.severity;
        this.alertState.inFlight = alertState.inFlight;
        this.alertState.message = alertState.message;
        if (this.alertState.message) {
          this.showBar = true;
          if (!this.timeoutId) {
            this.hideSnackBar();
          }
        }
        if (this.alertState.inFlight) {
          this.alertState.icon = 'cached';
          this.alertState.showSave = false;
          return;
        }
        if (this.alertState.severity === 'success') {
          this.alertState.icon = 'done';
          this.alertState.saveText = 'SAVED';
          this.alertState.showSave = true;
        } else {
          this.alertState.icon = 'warning';
          this.alertState.showSave = false;
        }
      });
  }

  private hideSnackBar() {
    this.timeoutId = setTimeout(() => {
      this.showBar = false;
      this.timeoutId = null;
    }, 5000);
  }

  private autoSave(updatedState: IFormState) {
    this.showBar = updatedState.dirty;
    this.alertState.showSave = updatedState.dirty;
    this.alertState.saveText = 'SAVE';
  }

  ngOnChanges() {
    if (this.model) {
      if (this.formSub) {
        this.formSub.unsubscribe();
      }
      this.formSub = this.model.subscribe('form', updatedState => this.autoSave(updatedState));
    }
  }

  save(e) {
    if (this.model.isValid()) {
      this.onSaveClicked.emit(e);
    }
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.notifySub.unsubscribe();
    this.formSub.unsubscribe();
    clearTimeout(this.timeoutId);
  }
}
