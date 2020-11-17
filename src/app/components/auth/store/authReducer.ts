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
  on(AuthActions.createUser, (state: State, userData) => {
    return ({
      ...state,
      user: new User(
        userData.email,
        userData.localId,
        userData.idToken,
        new Date(new Date().getTime() + +userData.expiresIn * 1000 ))
    });
  }),
  on(AuthActions.signup,
    state => {
      return state;
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
