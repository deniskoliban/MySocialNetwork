import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../modules/app.material.module';
import {ContentComponent} from './content/content.component';
import {AuthInterceptorService} from '../services/interceptors/auth-interceptor.service';


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
    HttpClientModule
  ],
  exports: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class ContentModule { }
