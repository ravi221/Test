import {NgModule} from '@angular/core';
import {CoreModule} from "../core/core.module";

import {CustomerLandingComponent} from './components/customer-landing/customer-landing.component';
import {CasesResolverService} from "./services/cases-resolver.service";
import {CustomerResolverService} from "./services/customer-resolver.service";
import {CustomerCardComponent} from './components/customer-card/customer-card.component';
import {MainLandingComponent} from './components/main-landing/main-landing.component';
import {PlanModule} from "../plan/plan.module";

@NgModule({
  imports: [
    CoreModule,
    PlanModule
  ],
  exports: [],
  declarations: [
    MainLandingComponent,
    CustomerLandingComponent,
    CustomerCardComponent
  ],
  providers: [
    CasesResolverService,
    CustomerResolverService
  ]
})
export class CustomerModule {
}
