import { NgModule } from '@angular/core';
import {ContentComponent} from './content/content.component';
import {RouterModule} from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {ProfileComponent} from './profile/profile.component';
import {MessagesComponent} from './messages/messages.component';

const ContentRoutingComponents = [
  {path: '', component: ContentComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'messages', component: MessagesComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ContentRoutingComponents),
  ],
  exports: [
    RouterModule
  ]
})
export class ContentRoutingModule { }
