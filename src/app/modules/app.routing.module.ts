import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthComponent} from '../components/auth/auth.component';
import {ContentComponent} from '../content-components/content/content.component';

const RoutingComponents = [
  {path: 'auth', component: AuthComponent},
  { path: 'content', loadChildren: () => import('../content-components/content.module')
      .then( (module) => module.ContentModule)},
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
