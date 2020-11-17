import { createAction, props } from '@ngrx/store';
import {AuthResponse} from '../../../services/services/auth.service';

export const login = createAction(
  'LOGIN_START',
  props<{email: string, password: string}>()
);

export const loginFailure = createAction(
  'LOGIN_FAILURE',
  props<{error: any}>()
);

export const signup = createAction(
  'SIGNUP',
  props<{
    email: string,
    firstName: string,
    lastName: string,
    password: string
  }>()
);

export const createUser = createAction(
  'CREATE_USER',
  props<AuthResponse>()
);

export const logout = createAction(
  'LOGOUT',
);



