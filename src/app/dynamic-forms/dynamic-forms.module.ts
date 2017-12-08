import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialImportsModule} from '../vendor/material-imports.module';
import {DynamicFormComponent} from './components/dynamic-form/dynamic-form.component';
import {DynamicQuestionComponent} from './components/dynamic-question/dynamic-question.component';
import {DynamicFormControlComponent} from './components/dynamic-form-control/dynamic-form-control.component';
import {InputControlComponent} from './components/form-controls/input-control/input-control.component';
import {RadioControlComponent} from './components/form-controls/radio-control/radio-control.component';
import {SelectControlComponent} from './components/form-controls/select-control/select-control.component';
import {FallbackControlComponent} from './components/form-controls/fallback-control/fallback-control.component';
import {NotHiddenPipe} from './pipes/not-hidden.pipe';
import {DynamicSectionsComponent} from './components/dynamic-sections/dynamic-sections.component';
import {CheckboxControlComponent} from './components/form-controls/checkbox-control/checkbox-control.component';
import {DatepickerControlComponent} from './components/form-controls/datepicker-control/datepicker-control.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialImportsModule
  ],
  declarations: [
    DynamicFormComponent,
    DynamicQuestionComponent,
    DynamicFormControlComponent,
    DynamicSectionsComponent,
    InputControlComponent,
    RadioControlComponent,
    SelectControlComponent,
    FallbackControlComponent,
    CheckboxControlComponent,
    DatepickerControlComponent,
    NotHiddenPipe
  ],
  exports: [
    DynamicFormComponent,
    DynamicSectionsComponent
  ],
  providers: [
    NotHiddenPipe
  ],
  entryComponents: [
    InputControlComponent,
    RadioControlComponent,
    SelectControlComponent,
    FallbackControlComponent,
    CheckboxControlComponent,
    DatepickerControlComponent
  ]
})
export class DynamicFormsModule {
}
