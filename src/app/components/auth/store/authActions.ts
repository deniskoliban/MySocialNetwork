import { createAction, props } from '@ngrx/store';
import {AuthResponse} from '../../../services/services/auth.service';
import {UserData} from './authReducer';

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

export const putUserData = createAction(
  'PUT_USER_DATA',
  props<{
    firstName: string,
    lastName: string,
    localId: string
  }>()
);

export const putUserDataSuccess = createAction(
  'PUT_USER_DATA_SUCCESS',
  props<UserData>()
);

export const logout = createAction(
  'LOGOUT',
);



