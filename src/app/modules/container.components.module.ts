import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app.material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { ContentComponent } from '../components/content/content.component';
import { HeaderComponent } from '../components/header/header.component';
import { ContentContainerComponent } from '../components/content-container/content-container.component';


const ContentComponents = [
  ContentComponent,
  HeaderComponent,
  ContentContainerComponent
];


@NgModule({
  declarations: [
    ContentComponents
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    ContentComponents
  ]
})
export class ContainerComponentsModule { }
