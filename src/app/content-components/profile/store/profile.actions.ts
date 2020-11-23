import {createAction, props} from '@ngrx/store';
import {Profile} from './profile.reducer';

export const getProfile = createAction(
  'GET_PROFILE',
);

export const getProfileSuccess = createAction(
  'GET_PROFILE_SUCCESS',
  props<{profile: Profile}>()
);

export const putProfile = createAction(
  'PUT_PROFILE',
  props<{profile: Profile}>()
);

export const putProfileSuccess = createAction(
  'PUT_PROFILE_SUCCESS',
  props<{profile: Profile}>()
);
