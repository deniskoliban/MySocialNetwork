import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import * as fromAuthActions from './authActions';
import {AuthResponse, AuthService} from '../../../services/services/auth.service';
import {of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthEffects {
  clearUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.logout),
    tap((action) => {
      localStorage.removeItem('user');
    })
    ), {dispatch: false}
  );

  saveUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.createUser),
    tap((action) => {
      localStorage.setItem('user', JSON.stringify(action));
    })
  ), {dispatch: false}
  );

  putUserDataEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.putUserData),
    switchMap(action => {
      return this.authService.postUserData(action.firstName, action.lastName, action.localId)
        .pipe(
          map((response) => fromAuthActions.putUserDataSuccess(response)),
          catchError(error => of(fromAuthActions.httpErrorResponse({error}))
          ));
    })
    )
  );

  signupEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.signup),
    switchMap(action => {
      return this.authService.signUp(action)
        .pipe(
          switchMap(authResponse => [
            fromAuthActions.createUser(authResponse),
            fromAuthActions.putUserData({firstName: action.firstName, lastName: action.lastName, localId: authResponse.localId})
          ]),
          catchError(error => of(fromAuthActions.httpErrorResponse({error}))
          ));
    })
    )
  );

  getUserDataEffect = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.getUserData),
    switchMap(action => {
      return this.authService.getUserData(action.localId)
        .pipe(
          map((response) => fromAuthActions.getUserDataSuccess(response)),
          catchError((error) => of(fromAuthActions.httpErrorResponse({error}))
        ));
    })
  ));

  autoLoginEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.autoLogin),
    switchMap(() => {
      let savedUser: AuthResponse = JSON.parse(localStorage.getItem('user')) ;
      if (!savedUser) {
        return [fromAuthActions.logout()];
      }
      savedUser = {
        ...savedUser,
        expiresIn: new Date(savedUser.expiresIn)
      };
      return [
        fromAuthActions.createUser(savedUser),
        fromAuthActions.getUserData({localId: savedUser.localId})
      ];
    })
  ));

  loginEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.login),
    switchMap(action => {
      return this.authService.logIn(action)
        .pipe(
          map((authResponse) => {
            return {
              ...authResponse,
              expiresIn: new Date(new Date().getTime() + +authResponse.expiresIn * 1000 )
            };
          }),
          switchMap(authResponse => [
            fromAuthActions.createUser(authResponse),
            fromAuthActions.getUserData({localId: authResponse.localId})
          ]),
          catchError((error) => of(fromAuthActions.httpErrorResponse({error}))
          ));
    })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {
  }
}
