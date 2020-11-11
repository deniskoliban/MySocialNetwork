import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../modules/app.material.module';
import {ContentComponent} from './content/content.component';


const httpRoutes = [
  {path: '', component: ContentComponent},
];

@NgModule({
  declarations: [ContentComponent],
  imports: [
    RouterModule.forChild(httpRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [
  ],
})
export class ContentModule { }
