import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

const RoutingComponents = [
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(RoutingComponents),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
