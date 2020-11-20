import {createAction, props} from '@ngrx/store';

export const login = createAction(
  'LOGIN_START',
  props<{email: string, password: string}>()
);
