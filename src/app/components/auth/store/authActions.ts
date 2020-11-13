import { createAction, props } from '@ngrx/store';
import {AuthResponse} from '../../../services/services/auth.service';

export const createUser = createAction(
  'CREATE_USER',
  props<AuthResponse>()
);

export const deleteUser = createAction(
  'DELETE_USER',
);



