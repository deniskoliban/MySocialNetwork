import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {User} from '../../components/auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;


  constructor(private http: HttpClient, private store: Store<AppState>) {
  }

  postUserData(firstName: string, lastName: string): void {
    if (this.user) {
      this.http.put(
        `https://mysocialnetwork-ee2a9.firebaseio.com/users/${this.user.localId}.json`,
        {firstName, lastName}
      ).subscribe((response) => {
      });
    }
  }
}
