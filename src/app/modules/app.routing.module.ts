import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthComponent} from '../components/auth/auth.component';
import {ContentComponent} from '../components/content/content.component';

const RoutingComponents = [
  {path: 'auth', component: AuthComponent},
  {path: 'content', component: ContentComponent},
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
