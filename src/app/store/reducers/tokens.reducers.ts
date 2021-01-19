import { initialTokensState, ITokensState } from '../state/tokens.state';
import { TokensActions, ETokensActions } from '../actions/tokens.actions';

export const tokenReducers = (state = initialTokensState, action: TokensActions): ITokensState => {
  switch (action.type) {
    case ETokensActions.Insettokens:
      return {
        ...state,
        tokens: action.payload,
      }
    default: 
      return state;
  }
}
