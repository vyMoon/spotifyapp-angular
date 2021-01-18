import { RouterReducerState } from '@ngrx/router-store';
import { ITokensState, initialTokensState } from './tokens.state';

export interface IAppState {
  router?: RouterReducerState;
  tokens: ITokensState;
}

export const initialAppState: IAppState = {
  tokens: initialTokensState,
}

export const getInitialState = () => initialAppState;
