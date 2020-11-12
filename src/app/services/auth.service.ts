import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppState} from '../store/app.reducer';
import {ResponseData, signup} from '../components/auth/store/authActions';
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
  authResponse: any;

  constructor(private http: HttpClient, private store: Store<AppState>, private userService: UserService) {
    this.store.select('auth').subscribe((data) => {
      console.log(data);
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
        this.store.dispatch(signup(authResponse));
        this.userService.createUser();
      }, error => {
        console.log(error);
        }
        );
  }
}
