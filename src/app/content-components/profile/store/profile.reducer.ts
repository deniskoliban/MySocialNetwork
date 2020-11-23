import {Action, createReducer, on} from '@ngrx/store';
import * as ProfileActions from './profile.actions';


export interface State {
  profile: {
    avatarUrl: string,
    age: string;
    country: string;
    city: string;
    gender: 'Male'| 'Female';
    hobbies: string;
    about: string;
  };
}

const initialState: State = {
  profile: {
    avatarUrl: null,
    age: null,
    country: null,
    city: null,
    gender: null,
    hobbies: null,
    about: null,
  }
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
