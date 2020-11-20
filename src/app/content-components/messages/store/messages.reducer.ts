import {Action, createReducer, on} from '@ngrx/store';
import * as MessagesActions from './messages.actions';


export interface State {
    chats: [
      chat: {
        users: string[],
        messages: [
          message: {
            user: string,
            text: string,
            date: string,
          }
        ],
      }
    ];
}

const initialState: State = {
  chats: null
};

const messagesReducer = createReducer(
  initialState,
  on(MessagesActions.login,
    (state, userData) => {
      return {...state, userData: {...userData}};
    })
);

export function reducer(state: State | undefined, action: Action): State {
  return messagesReducer(state, action);
}
