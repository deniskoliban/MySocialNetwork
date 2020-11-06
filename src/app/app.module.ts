import { NgModule } from '@angular/core';
import {ContainerComponentsModule} from './modules/container.components.module';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ContainerComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
