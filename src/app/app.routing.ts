import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainLandingComponent} from './customer/components/main-landing/main-landing.component';
import {CasesResolverService} from "./customer/services/cases-resolver.service";
import {CustomerResolverService} from "./customer/services/customer-resolver.service";
import {CustomerLandingComponent} from "./customer/components/customer-landing/customer-landing.component";

const routes: Routes = [
  {
    path: 'home',
    component: MainLandingComponent,
    resolve: {
      data: CasesResolverService
    }
  },
  {
    path: 'customers/:customerNumber',
    component: CustomerLandingComponent,
    resolve: {
      data: CustomerResolverService
    }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {
}
