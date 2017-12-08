import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnChanges,
  OnInit,
  Output,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {InputControlComponent} from '../form-controls/input-control/input-control.component';
import {RadioControlComponent} from '../form-controls/radio-control/radio-control.component';
import {FallbackControlComponent} from '../form-controls/fallback-control/fallback-control.component';
import {BaseFormControl} from '../form-controls/base-form-control';
import {SelectControlComponent} from '../form-controls/select-control/select-control.component';
import {CheckboxControlComponent} from '../form-controls/checkbox-control/checkbox-control.component';
import {DatepickerControlComponent} from '../form-controls/datepicker-control/datepicker-control.component';
import {FormControlType} from '../../config/form-control-type';
import ChoiceConfig from '../../config/choice-config';

@Component({
  selector: 'dynamic-form-control',
  template: `
    <div #container></div>`
})
export class DynamicFormControlComponent implements OnInit, OnDestroy, OnChanges {

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  @Input() value: any;
  @Input() id: string;
  @Input() type: FormControlType;
  @Input() label: string;
  @Input() choices: Array<ChoiceConfig>;

  @Input() isDisabled: boolean;
  @Input() isHidden: boolean;
  @Input() isValid: boolean;
  @Input() isRequired: boolean;

  @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();

  private componentRef: ComponentRef<BaseFormControl>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    if (this.type) {
      let componentType: Type<BaseFormControl> = this.getComponentType(this.type);
      let factory: ComponentFactory<BaseFormControl> = this.componentFactoryResolver.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory);

      const instance: BaseFormControl = this.componentRef.instance;
      instance.value = this.value;
      instance.id = this.id;
      instance.label = this.label;
      instance.choices = this.choices;
      instance.isDisabled = this.isDisabled;
      instance.isHidden = this.isHidden;
      instance.isValid = this.isValid;
      instance.isRequired = this.isRequired;

      instance.valueChanged.subscribe(e => this.valueChanged.emit(e));
    }
  }

  ngOnChanges($event) {
    for (let c in $event) {
      if ($event[c].isFirstChange()) return;
      this.componentRef.instance[c] = $event[c].currentValue;
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  private getComponentType(type: FormControlType): Type<BaseFormControl> {
    switch (type) {
      case 'text':
      case 'number':
        return InputControlComponent;
      case 'radio':
        return RadioControlComponent;
      case 'select':
        return SelectControlComponent;
      case 'checkbox':
        return CheckboxControlComponent;
      case 'date':
        return DatepickerControlComponent;
      default:
        return FallbackControlComponent;
    }
  }
}
