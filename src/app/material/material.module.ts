import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatTabsModule, MatTableModule, MatFormFieldModule,
  MatInputModule, MatCheckboxModule, MatPaginatorModule,
  MatChipsModule, MatButtonModule, MatIconModule,
  MatToolbarModule, MatSidenavModule, MatListModule, MatSelectModule,
  MatMenuModule, } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule, MatTableModule, MatCheckboxModule, MatPaginatorModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, MatChipsModule,
    MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule,
    MatSelectModule, MatMenuModule
  ],
  exports: [
    MatTabsModule, MatTableModule, MatCheckboxModule, MatPaginatorModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, MatChipsModule,
    MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule,
    MatSelectModule, MatMenuModule
  ]
})
export class MaterialModule { }
