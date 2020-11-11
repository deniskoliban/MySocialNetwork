import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './modules/app.material.module';
import { AppContainerComponent } from './components/app-container/app.container.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthContentComponent } from './components/auth-content/auth.content.component';
import {AppRoutingModule} from './modules/app.routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { ContentComponent } from './components/content/content.component';




@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
    HeaderComponent,
    AuthContentComponent,
    AuthComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
