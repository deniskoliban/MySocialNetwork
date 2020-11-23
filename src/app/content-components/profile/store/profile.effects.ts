import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromProfileActions from './profile.actions';
import {map, switchMap} from 'rxjs/operators';
import {ProfileService} from '../../services/profile.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileEffects {

  getProfileEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromProfileActions.getProfile),
    switchMap(() => {
      return this.profileService.getProfile().pipe(
        map((profile) => fromProfileActions.getProfileSuccess({profile}))
      );
    })
  ));

  constructor(private actions$: Actions, private profileService: ProfileService) {
  }

}
