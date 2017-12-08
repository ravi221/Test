import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlanLandingComponent} from './components/plan-landing/plan-landing.component';
import {PlanEntryComponent} from './components/plan-entry/plan-entry.component';
import {InsuranceQuoteComponent} from './components/insurance-quote/insurance-quote.component';

import {DataStorageService} from './services/data-storage.service';
import {ViewConfigDataService} from './services/view-config-data.service';
import {PlanResolverService} from './services/plan-resolver.service';
import {PlanListComponent} from './components/plan-list/plan-list.component';
import {CoreModule} from "../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    PlanListComponent
  ],
  declarations: [
    PlanLandingComponent,
    InsuranceQuoteComponent,
    PlanEntryComponent,
    PlanListComponent
  ],
  providers: [
    DataStorageService,
    ViewConfigDataService,
    PlanResolverService
  ]
})
export class PlanModule {
}
