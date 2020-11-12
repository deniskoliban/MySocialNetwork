import * as fromAuth from '../components/auth/store/authReducer';
import {ActionReducerMap} from '@ngrx/store';


export interface AppState {
  auth: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer
};
