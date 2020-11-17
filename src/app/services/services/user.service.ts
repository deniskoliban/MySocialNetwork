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


}
