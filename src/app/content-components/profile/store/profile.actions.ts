import {createAction, props} from '@ngrx/store';
import {Profile, State} from './profile.reducer';

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

export const uploadAvatar = createAction(
  'UPLOAD_AVATAR',
  props<{url: string}>()
);

export const uploadAvatarSuccess = createAction(
  'UPLOAD_AVATAR_SUCCESS',
  props<{url: string}>()
);
