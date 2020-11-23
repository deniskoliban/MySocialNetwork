import * as fromAuth from '../components/auth/store/authReducer';
import * as fromMessages from '../content-components/messages/store/messages.reducer';
import * as fromProfile from '../content-components/profile/store/profile.reducer';
import {ActionReducerMap} from '@ngrx/store';


export interface AppState {
  auth: fromAuth.State;
  messages: fromMessages.State;
  profile: fromProfile.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer,
  messages: fromMessages.reducer,
  profile: fromProfile.reducer
};
