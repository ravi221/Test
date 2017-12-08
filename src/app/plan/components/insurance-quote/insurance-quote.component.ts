import {Component, OnInit, OnDestroy} from '@angular/core';
import * as mockData from '../../../../assets/quote.mock.json';
import * as viewMeta from '../../../../assets/quote.view.json';
import Entity from '../../../entity/entity';
import getAge from '../../tokens/getAge';
import copyProps from '../../tokens/copyProps';
import SectionConfig from '../../../dynamic-forms/config/section-config';
import DynamicFormConfig from '../../../dynamic-forms/config/dynamic-form-config';

@Component({
  templateUrl: './insurance-quote.component.html',
  styleUrls: ['./insurance-quote.component.scss']
})
export class InsuranceQuoteComponent implements OnInit, OnDestroy {

  entity: Entity;
  sectionConfig: Array<SectionConfig>;
  activeSection: SectionConfig;

  constructor() {
  }

  switchSection(section) {
    this.activeSection = section;
  }

  ngOnInit() {
    const viewConfig = new DynamicFormConfig(viewMeta);

    const tokens = new Map<string, any>();
    tokens.set('getAge', getAge);
    tokens.set('copyProps', copyProps);

    this.entity = new Entity(mockData, viewConfig, tokens);

    // transform metadata into array like structures
    this.sectionConfig = viewConfig.getSectionsArray();
    this.activeSection = this.sectionConfig[0];
  }

  ngOnDestroy() {
  }

  save(): void {
    // TODO: Hook in update to data model
    console.info(this.entity.toJSON());
  }

  validate(): void {
    // TODO: Hook in validation to PPC
  }

}
