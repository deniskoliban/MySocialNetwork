import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import * as fromAuthActions from './authActions';
import {AuthResponse, AuthService} from '../../../services/services/auth.service';
import {of} from 'rxjs';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthEffects {
  logoutEffect = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.logout),
    tap(() => this.router.navigate(['/auth']))
  ), {dispatch: false});

  navigateToContentEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.navigateToContent),
    tap(() => this.authService.navigateToContent())
  ), {dispatch: false});

  httpErrorEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.httpErrorResponse),
    map(() => fromAuthActions.httpErrorAlert())
  ));

  autoLogout$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.autoLogout),
    tap((action) => {
      const expiresIn = new Date(action.expirationDate).getTime() - new Date().getTime();
      this.authService.autoLogout(expiresIn);
    })
  ), {dispatch: false}) ;

  clearUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.logout),
    tap((action) => {
      localStorage.removeItem('user');
      if (this.authService.logoutTimer) {
        clearTimeout(this.authService.logoutTimer);
      }
    })
    ), {dispatch: false}
  );

  saveUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.createUser),
    tap((action) => {
      localStorage.setItem('user', JSON.stringify(action));
    }),
    map((action) => fromAuthActions.autoLogout({expirationDate: action.expiresIn}))
  )
  );

  putUserDataEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.putUserData),
    switchMap(action => {
      return this.authService.postUserData(action.firstName, action.lastName, action.localId)
        .pipe(
          switchMap((response) => [
            fromAuthActions.putUserDataSuccess(response),
            fromAuthActions.navigateToContent(),
            fromAuthActions.loadingStop(),
          ]),
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
            fromAuthActions.loadingStart(),
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
          switchMap((response) => [
            fromAuthActions.getUserDataSuccess(response),
            fromAuthActions.navigateToContent(),
            fromAuthActions.loadingStop()
          ]),
          catchError((error) => of(fromAuthActions.httpErrorResponse({error}))
          ));
    })));

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
        fromAuthActions.loadingStart(),
        fromAuthActions.createUser(savedUser),
        fromAuthActions.getUserData({localId: savedUser.localId}),
      ];
    }),
    catchError((error) => of(fromAuthActions.httpErrorResponse({error}))
    )));

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
            fromAuthActions.loadingStart(),
            fromAuthActions.createUser(authResponse),
            fromAuthActions.getUserData({localId: authResponse.localId})
          ]),
          catchError((error) => of(fromAuthActions.httpErrorResponse({error}))
          ));
    })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {
  }
}
