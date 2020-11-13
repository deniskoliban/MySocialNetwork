import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppState} from '../../store/app.reducer';
import {login, ResponseData, signup} from '../../components/auth/store/authActions';
import {Store} from '@ngrx/store';
import {UserService} from './user.service';

export interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private store: Store<AppState>, private userService: UserService) {
    this.store.select('auth').subscribe((state) => {
      console.log(state.user);
    });
  }

  signUp(registerFormData): void {
    const signUpData = {
      email: registerFormData.email,
      password: registerFormData.password,
      returnSecureToken: true
    };

    this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAKBZJPPGbP6QM_OOVnxXDxtRxM3mW0U8o', signUpData)
      .subscribe((authResponse: AuthResponse) => {
        this.store.dispatch(login(authResponse));
        this.userService.createUser(registerFormData.firstName, registerFormData.lastName);
      }, error => {
        console.log(error);
        }
        );
  }

  logIn(loginFormData): void {
    const loginData = {
      email: loginFormData.email,
      password: loginFormData.password,
      returnSecureToken: true
    };

    this.http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKBZJPPGbP6QM_OOVnxXDxtRxM3mW0U8o',
      loginData
      ).subscribe((loginResponse: AuthResponse) => {
        this.store.dispatch()
    });

  }
}
