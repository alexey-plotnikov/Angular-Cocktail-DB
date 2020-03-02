import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  exports: [
    MatCheckboxModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class ContentModule { }
