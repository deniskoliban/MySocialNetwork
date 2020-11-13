import { createAction, props } from '@ngrx/store';
import {AuthResponse} from '../../../services/services/auth.service';

export interface AuthData {
  email: string;
  password: string;
  returnSecureToken: boolean;
}


export interface ResponseData {
  email: string;
  idToken: string;
  localId: string;
  expiresIn: string;
}


export const login = createAction(
  'SIGN_UP',
  props<AuthResponse>()
);

export const logout = createAction(
  'LOGOUT',
);



