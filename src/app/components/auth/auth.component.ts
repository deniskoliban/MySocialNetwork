import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackBarComponent} from '../../shared/snack-bar/snack-bar.component';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  register = false;
  isLoading = false;

  constructor(public snackBar: MatSnackBar, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('auth').subscribe(
      (state) => {
        this.isLoading = state.isLoading;
      }
    );
  }
  openSnackBar(message: string): void {
    this.snackBar.openFromComponent(SnackBarComponent, {
      verticalPosition: 'top',
      duration: 3000,
      data: message
    });
  }

}
