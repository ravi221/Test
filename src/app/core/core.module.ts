import {Injector, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {ProgressBarComponent} from './components/progress-bar/progress-bar.component';
import {SnackBarComponent} from './components/snack-bar/snack-bar.component';
import {NavTabsComponent} from './components/nav-tabs/nav-tabs.component';
import {NotifyService} from './services/notify.service';
import {HttpInterceptorFactory, HttpInterceptorService} from './services/http-interceptor.service';
import {HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import {ServiceLocator} from './services/locator.service';
import {LogService} from './services/log.service';
import {VendorModule} from '../vendor/vendor.module';
import {DynamicFormsModule} from '../dynamic-forms/dynamic-forms.module';
import {ValuesPipe} from './pipes/values.pipe';
import {MainNavMenuComponent} from './components/main-nav-menu/main-nav-menu.component';
import {SlideMenuComponent} from './components/slide-menu/slide-menu.component';
import {CustomersNavMenuComponent} from './components/main-nav-menu/customers-nav-menu/customers-nav-menu.component';
import { MainNavTitleComponent } from './components/main-nav-menu/main-nav-title/main-nav-title.component';
import { MainNavTemplateComponent } from './components/main-nav-menu/main-nav-template/main-nav-template.component';
import {CustomerNavRowComponent} from './components/main-nav-menu/customers-nav-menu/customer-nav-row/customer-nav-row.component';
import { SortWithComparatorPipe } from './pipes/sort-with-comparator.pipe';
import { MainNavSorterComponent } from './components/main-nav-menu/main-nav-sorter/main-nav-sorter.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { EmptyCardComponent } from './components/empty-card/empty-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    VendorModule,
    DynamicFormsModule
  ],
  declarations: [
    NavBarComponent,
    ProgressBarComponent,
    SnackBarComponent,
    NavTabsComponent,
    ValuesPipe,
    MainNavMenuComponent,
    SlideMenuComponent,
    CustomersNavMenuComponent,
    CustomerNavRowComponent,
    MainNavTitleComponent,
    MainNavTemplateComponent,
    SortWithComparatorPipe,
    MainNavSorterComponent,
    BreadcrumbsComponent,
    FilterBarComponent,
    EmptyCardComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    VendorModule,
    DynamicFormsModule,
    NavBarComponent,
    ProgressBarComponent,
    SnackBarComponent,
    NavTabsComponent,
    MainNavMenuComponent,
    SlideMenuComponent,
    BreadcrumbsComponent,
    FilterBarComponent,
    EmptyCardComponent
  ],
  providers: [
    LogService,
    NotifyService,
    ValuesPipe,
    {
      provide: HttpInterceptorService,
      useFactory: HttpInterceptorFactory,
      deps: [XHRBackend, RequestOptions, NotifyService, LogService]
    }
  ]
})
export class CoreModule {
  constructor(private injector: Injector) {
    ServiceLocator.injector = this.injector;
  }
}
