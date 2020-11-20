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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {StoreModule} from '@ngrx/store';
import * as fromAppReducer from './store/app.reducer';
import {AuthInterceptorService} from './services/interceptors/auth-interceptor.service';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './components/auth/store/auth-effects.service';
import { SnackBarComponent } from './shared/snack-bar/snack-bar.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';


@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
    HeaderComponent,
    AuthContentComponent,
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    SnackBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(fromAppReducer.appReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
