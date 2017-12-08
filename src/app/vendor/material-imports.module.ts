import { NgModule } from '@angular/core';
import {
  MdAutocompleteModule,
  MdInputModule,
  MdDatepickerModule,
  MdNativeDateModule
} from '@angular/material';


const IMPORTED_MODULES = [
  MdAutocompleteModule,
  MdInputModule,
  MdDatepickerModule,
  MdNativeDateModule
];

@NgModule({
  imports: IMPORTED_MODULES,
  exports: IMPORTED_MODULES
})
export class MaterialImportsModule { }
