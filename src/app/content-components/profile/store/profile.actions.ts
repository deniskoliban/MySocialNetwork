import {createAction, props} from '@ngrx/store';
import {Profile} from './profile.reducer';

export const getProfile = createAction(
  'GET_PROFILE',
  props<{localId: string}>()
);

export const getProfileSuccess = createAction(
  'GET_PROFILE_SUCCESS',
  props<{profile: Profile}>()
);
