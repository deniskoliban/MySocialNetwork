import * as fromAuth from '../components/auth/store/authReducer';
import * as fromMessages from '../content-components/messages/store/messages.reducer';
import {ActionReducerMap} from '@ngrx/store';


export interface AppState {
  auth: fromAuth.State;
  messages: fromMessages.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer,
  messages: fromMessages.reducer
};
