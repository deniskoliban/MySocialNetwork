import {Action, createReducer, on, props} from '@ngrx/store';
import * as AuthActions from './authActions';
import {User} from '../user.model';

export interface State {
  user: User;
}

const initialState: State = {
  user: null
};

const scoreboardReducer = createReducer(
  initialState,
  on(AuthActions.signup, (state: State, userData) => {
    return ({
      ...state,
      user: new User(userData.email, userData.localId, userData.idToken, new Date(new Date().getTime() + +userData.expiresIn * 1000 ))
    });
  }),
  on(AuthActions.logout,
      state => {
        return {...state, user: null};
      }),
);

export function reducer(state: State | undefined, action: Action): State {
  return scoreboardReducer(state, action);
}
