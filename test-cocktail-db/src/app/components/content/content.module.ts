import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import {ContentComponent} from 'src/app/components/content/content.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  exports: [
    MatCheckboxModule
  ]
})
export class ContentModule { }
