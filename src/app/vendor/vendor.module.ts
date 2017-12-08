import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialImportsModule} from './material-imports.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MaterialImportsModule
  ],
  declarations: []
})
export class VendorModule { }
