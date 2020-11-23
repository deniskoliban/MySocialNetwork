import {Action, createReducer, on} from '@ngrx/store';
import * as ProfileActions from './profile.actions';


export interface Profile {
  avatarUrl: string;
  age: string;
  country: string;
  city: string;
  gender: string;
  hobbies: string;
  about: string;
}

export interface State {
    profile: Profile;
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

const profileReducer = createReducer(
  initialState,
  on(ProfileActions.putProfileSuccess,
    (state, profileData) => {
      return {...state, profile: {...profileData.profile}};
    }),
  on(ProfileActions.getProfileSuccess,
    (state, profileData) => {
      return {...state, profile: {...profileData.profile}};
    })
);

export function reducer(state: State | undefined, action: Action): State {
  return profileReducer(state, action);
}
