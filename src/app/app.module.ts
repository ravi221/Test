import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {CustomerModule} from './customer/customer.module';
import {CoreModule} from './core/core.module';
import {MainRoutingModule} from './app.routing';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    MainRoutingModule,
    CoreModule,
    CustomerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
