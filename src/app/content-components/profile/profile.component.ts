import { Component, OnInit } from '@angular/core';
import {UserData} from '../../components/auth/store/authReducer';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: UserData;

  constructor(private store: Store<AppState>,) { }

  ngOnInit(): void {
    this.store.select('auth').subscribe(
      (state) => {
        this.userData = state.userData;
      }
    );
  }

}
