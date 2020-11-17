import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as fromAuthActions from './authActions';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../services/services/auth.service';
import {of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NumbersEffects {
  loginStartEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.loginStart),
    switchMap(action => {
      return this.authService.logIn({email: action.email, password: action.password})
        .pipe(
          map((authResponse) => fromAuthActions.createUser(authResponse)),
          catchError((error) => of(fromAuthActions.loginFailure({error}))
          ));
    })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) { }
}
