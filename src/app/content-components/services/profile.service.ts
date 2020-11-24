import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {Observable} from 'rxjs';
import * as ProfileState from '../profile/store/profile.reducer';
import * as AuthState from '../../components/auth/store/authReducer';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  authState: AuthState.State;

  constructor(private http: HttpClient, private store: Store<AppState> ) {
    this.store.select('auth').subscribe((state) => {
      this.authState = state;
      console.log(this.authState);
    });
    this.store.select('profile').subscribe((state) => {
      console.log(state);
    });
  }

  uploadAvatar(url: string): Observable<string> {
    return this.http.put<string>(
      `https://mysocialnetwork-ee2a9.firebaseio.com/users/${this.authState.user.localId}/avatarUrl.json`,
      {url}
    );
  }

  putProfile(profile: ProfileState.Profile): Observable<ProfileState.Profile> {
    return this.http.put<ProfileState.Profile>(
      `https://mysocialnetwork-ee2a9.firebaseio.com/users/${this.authState.user.localId}/profile.json`,
      {...profile}
    );
  }

  getProfile(): Observable<{ profile: ProfileState.Profile, avatarUrl: {url: string} }> {
    return this.http.get<{ profile: ProfileState.Profile, avatarUrl: {url: string} }>(
      `https://mysocialnetwork-ee2a9.firebaseio.com/users/${this.authState.user.localId}.json`
    );
  }

}
