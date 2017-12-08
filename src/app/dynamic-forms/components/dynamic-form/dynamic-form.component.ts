import {Component, Input, OnChanges, OnInit} from '@angular/core';
import Entity from "../../../entity/entity";
import QuestionConfig from '../../config/question-config';
import SectionConfig from '../../config/section-config';

@Component({
  selector: 'dynamic-form',
  template: `
    <div>
      <h3>{{config.label}}</h3>
      <ul class="control-list">
        <li *ngFor="let questionConfig of questions; let number = index;">
          <dynamic-question
            [config]="questionConfig"
            [number]="number + 1"
            [model]="model">
          </dynamic-question>
        </li>
      </ul>
    </div>`,
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() config: SectionConfig;
  @Input() model: Entity;

  questions: Array<QuestionConfig>;

  constructor() {

  }

  ngOnChanges($event) {
    if ($event.config && !$event.config.isFirstChange()) {
      this.questions = this.config.getQuestionsArray();
    }
  }

  ngOnInit() {
    this.questions = this.config.getQuestionsArray();
  }
}
