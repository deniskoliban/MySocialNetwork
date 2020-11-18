import {Action, createReducer, on, props} from '@ngrx/store';
import * as AuthActions from './authActions';
import {User} from '../user.model';

export interface UserData {
  firstName: string;
  lastName: string;
}

export interface State {
  user: User;
  userData: UserData;
}

const initialState: State = {
  user: null,
  userData: null
};

const scoreboardReducer = createReducer(
  initialState,
  on(AuthActions.createUser, (state: State, user) => {
    return ({
      ...state,
      user: new User(
        user.email,
        user.localId,
        user.idToken,
        new Date(new Date().getTime() + +user.expiresIn * 1000 ))
    });
  }),
  on(AuthActions.putUserDataSuccess,
    (state, userData) => {
      return {...state, userData: {...userData}};
    }),
  on(AuthActions.logout,
      state => {
        return {...state, user: null, userData: null};
      }),
  on(AuthActions.loginFailure,
    (state, error) => {
      return state;
    }),
);

export function reducer(state: State | undefined, action: Action): State {
  return scoreboardReducer(state, action);
}
