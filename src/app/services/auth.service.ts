import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authResponse: any;

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string): void {
    const signUpData = {
      email,
      password,
      returnSecureToken: true
    };

    this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAKBZJPPGbP6QM_OOVnxXDxtRxM3mW0U8o', signUpData)
      .subscribe((authResponse) => {
        this.authResponse = authResponse;
        console.log(this.authResponse);
      }, error => {
        console.log(error);
        }
        );
  }
}
