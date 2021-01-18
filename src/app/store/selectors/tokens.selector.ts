import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ITokensState } from '../state/tokens.state';

const selectTokens = (state: IAppState) => state.tokens;

export const selectTokensLists = createSelector(
  selectTokens,
  (state: ITokensState) => state.tokens,
);
