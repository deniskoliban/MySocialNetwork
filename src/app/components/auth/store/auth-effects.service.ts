import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import * as fromAuthActions from './authActions';
import {AuthService} from '../../../services/services/auth.service';
import {of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthEffects {

  signupEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.signup),
    switchMap(action => {
      return this.authService.signUp(action)
        .pipe(
          switchMap(authResponse => [
            fromAuthActions.createUser(authResponse),
          ]),
          catchError(error => of(fromAuthActions.loginFailure({error}))
          ));
    })
    )
  );

  loginEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.login),
    switchMap(action => {
      return this.authService.logIn({email: action.email, password: action.password})
        .pipe(
          map((authResponse) => fromAuthActions.createUser(authResponse)),
          catchError((error) => of(fromAuthActions.loginFailure({error}))
          ));
    })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {
  }
}
