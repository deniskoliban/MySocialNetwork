import { createAction, props } from '@ngrx/store';
import {AuthResponse} from '../../../services/services/auth.service';
import {UserData} from './authReducer';
import {HttpErrorResponse} from '@angular/common/http';

export const login = createAction(
  'LOGIN_START',
  props<{email: string, password: string}>()
);

export const httpErrorResponse = createAction(
  'HTTP_ERROR_RESPONSE',
  props<{error: HttpErrorResponse}>()
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

export const getUserData = createAction(
  'GET_USER_DATA',
  props<{ localId: string }>()
);

export const getUserDataSuccess = createAction(
  'GET_USER_DATA_SUCCESS',
  props<UserData>()
);

export const autoLogin = createAction(
  'AUTO_LOGIN',
);

export const loadingStart = createAction(
  'LOADING_START',
);

export const loadingStop = createAction(
  'LOADING_STOP',
);

export const autoLogout = createAction(
  'AUTO_LOGOUT',
  props<{expirationDate: string | Date}>()
);

export const logout = createAction(
  'LOGOUT',
);



