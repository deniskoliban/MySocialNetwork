import {Action, createReducer, on} from '@ngrx/store';
import * as ProfileActions from './profile.actions';


export interface State {
  profile: any;
}

const initialState: State = {
  profile: null
};

const messagesReducer = createReducer(
  initialState,
  on(ProfileActions.login,
    (state, userData) => {
      return {...state, userData: {...userData}};
    })
);

export function reducer(state: State | undefined, action: Action): State {
  return messagesReducer(state, action);
}
