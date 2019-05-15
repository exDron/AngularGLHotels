import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatGridListModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class SharedModule { }
