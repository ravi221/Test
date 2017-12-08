import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import Entity from '../../../entity/entity';
import {Subscription} from 'rxjs/Subscription';
import QuestionConfig from '../../config/question-config';
import {IObservedItem} from "../../../core/interfaces/iObservedItem";
import {IFormState} from "../../../core/interfaces/iFormState";

@Component({
  selector: 'dynamic-question',
  template: `
    <fieldset class="control-group" [disabled]="config.control.state?.isDisabled"
              [hidden]="config.control.state?.isHidden" [ngClass]="{'has-errors' : !config.control.state.isValid}">
      <span class="control-number">{{number}}.</span>
      <label class="control-label">{{config.label}}&nbsp;<span
        [hidden]="!config.control.state?.isRequired">*</span></label>
      <p class="control-hint">{{config.control.hint}}</p>
      <dynamic-form-control
        [value]="value"
        [id]="config.id"
        [type]="config.control.type"
        [label]="config.label"
        [choices]="config.control.choices"
        [isDisabled]="config.control.state?.isDisabled"
        [isHidden]="config.control.state?.isHidden"
        [isValid]="config.control.state?.isValid"
        [isRequired]="config.control.state?.isRequired"
        (valueChanged)="onValueChanged($event)">
      </dynamic-form-control>
      <p class="control-errors" *ngFor="let message of config.control.state.messages">{{message}}</p>
    </fieldset>
  `,
  styleUrls: ['./dynamic-question.component.scss']
})
export class DynamicQuestionComponent implements OnInit, OnDestroy {
  @Input() config: QuestionConfig;
  @Input() model: Entity;
  @Input() number: number;

  value: any;

  private subscription: Subscription;

  constructor() {

  }

  ngOnInit() {
    if (this.config.model) {
      this.value = this.model.getIn(this.config.model);
    }

    this.subscription = this.model.subscribe(`model:${this.config.id}`, (item: IObservedItem) => this.value = item.currentValue);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  onValueChanged(e) {
    const control = this.model.getControlById(e.id);
    if (control.state.isDisabled || control.state.isHidden) return;
    this.model.setById(e.id, e.value);
    const newState = <IFormState>{
      changedById: e.id,
      dirty: true
    }
    this.model.emitFormChange(newState);
  }

}
