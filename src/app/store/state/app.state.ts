import { RouterReducerState } from '@ngrx/router-store';
import { ITokensState, initialTokensState } from './tokens.state';
import { IUserState, initialUserState } from './user.state';

export interface IAppState {
  router?: RouterReducerState;
  tokens: ITokensState;
  user: IUserState;
}

export const initialAppState: IAppState = {
  tokens: initialTokensState,
  user: initialUserState,
}

export const getInitialState = () => initialAppState;
