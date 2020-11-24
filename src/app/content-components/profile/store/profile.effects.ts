import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromProfileActions from './profile.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {ProfileService} from '../../services/profile.service';
import {of} from 'rxjs';
import * as fromAuthActions from '../../../components/auth/store/authActions';

@Injectable({
  providedIn: 'root'
})
export class ProfileEffects {
  uploadAvatarEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromProfileActions.uploadAvatar),
    switchMap((action) => {
      return this.profileService.uploadAvatar(action.url).pipe(
        map((url) => fromProfileActions.getProfile()),
        catchError((error) => of(fromAuthActions.httpErrorResponse({error})))
      );
    })
  ));

  putProfileEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromProfileActions.putProfile),
    switchMap((action) => {
      return this.profileService.putProfile(action.profile).pipe(
        map((profile) => fromProfileActions.putProfileSuccess({profile})),
        catchError((error) => of(fromAuthActions.httpErrorResponse({error})))
      );
    })
  ));

  getProfileEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromProfileActions.getProfile),
    switchMap(() => {
      return this.profileService.getProfile().pipe(
        map((profile) => fromProfileActions.getProfileSuccess({profile})),
        catchError((error) => of(fromAuthActions.httpErrorResponse({error})))
      );
    })
  ));

  constructor(private actions$: Actions, private profileService: ProfileService) {
  }

}
