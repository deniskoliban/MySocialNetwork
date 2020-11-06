import { NgModule } from '@angular/core';
import { AppMaterialModule } from './modules/app.material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';



@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    ContentContainerComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
