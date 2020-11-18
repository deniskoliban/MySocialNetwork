import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppState} from '../../store/app.reducer';
import {logout} from '../../components/auth/store/authActions';
import {Store} from '@ngrx/store';
import {UserService} from './user.service';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserData} from '../../components/auth/store/authReducer';


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

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private userService: UserService,
    private router: Router,
  ) {
    this.store.select('auth').subscribe((state) => {
      console.log(state);
      if (state.user) {
        this.navigateToContent();
      }
    });
  }

  getUserData(localId: string): Observable<UserData> {
    return this.http.get<UserData>(
      `https://mysocialnetwork-ee2a9.firebaseio.com/user/${localId}.json`
    );
  }

  postUserData(firstName: string, lastName: string, localId: string): Observable<UserData> {
    return this.http.put<UserData>(
      `https://mysocialnetwork-ee2a9.firebaseio.com/user/${localId}.json`,
      {firstName, lastName}
    );
  }

  signUp(registerFormData): Observable<AuthResponse> {
    const signUpData = {
      email: registerFormData.email,
      password: registerFormData.password,
      returnSecureToken: true
    };
    return  this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAKBZJPPGbP6QM_OOVnxXDxtRxM3mW0U8o',
      signUpData);
  }

  logIn(loginFormData: {email: string, password: string}): Observable<AuthResponse> {
    const loginData = {
      email: loginFormData.email,
      password: loginFormData.password,
      returnSecureToken: true
    };
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKBZJPPGbP6QM_OOVnxXDxtRxM3mW0U8o',
      loginData);
  }

  navigateToContent(): void {
    this.router.navigate(['/content']);
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
