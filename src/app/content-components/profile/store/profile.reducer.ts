import {Action, createReducer, on} from '@ngrx/store';
import * as ProfileActions from './profile.actions';


export interface Profile {
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
      return {...state, profile: {
          age: profileData.profile.age,
          country: profileData.profile.country,
          city: profileData.profile.city,
          gender: profileData.profile.gender,
          hobbies: profileData.profile.hobbies,
          about: profileData.profile.about
        }};
    }),
  on(ProfileActions.getProfileSuccess,
    (state, profileData) => {
      return {...state, profile: {
          age: profileData.profile.age,
          country: profileData.profile.country,
          city: profileData.profile.city,
          gender: profileData.profile.gender,
          hobbies: profileData.profile.hobbies,
          about: profileData.profile.about
        }};
    })
);

export function reducer(state: State | undefined, action: Action): State {
  return profileReducer(state, action);
}
