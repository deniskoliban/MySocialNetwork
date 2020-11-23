import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {Observable} from 'rxjs';
import {UserData} from '../../components/auth/store/authReducer';
import {Profile} from '../profile/store/profile.reducer';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  localId: string = null;

  constructor(private http: HttpClient, private store: Store<AppState> ) {
    this.store.select('auth').subscribe((state) => {
      this.localId = state.user.localId;
    });
  }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(
      `https://mysocialnetwork-ee2a9.firebaseio.com/users/${this.localId}/profile.json`
    );
  }

}
