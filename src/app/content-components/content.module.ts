import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../modules/app.material.module';
import {ContentComponent} from './content/content.component';
import {AuthInterceptorService} from '../services/interceptors/auth-interceptor.service';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';
import { MessagesComponent } from './messages/messages.component';
import {ContentRoutingModule} from './content-routing.module';
import { ChatItemComponent } from './chat-item/chat-item.component';


const httpRoutes = [
  {path: '', component: ContentComponent},
];

@NgModule({
  declarations: [ContentComponent, ProfileComponent, PostsComponent, MessagesComponent, ChatItemComponent],
  imports: [
    ContentRoutingModule,
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
