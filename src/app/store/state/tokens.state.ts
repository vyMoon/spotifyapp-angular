import { ITokens } from '../../common/interfaces/tokens.interface';

export interface ITokensState {
  tokens: ITokens;
}

export const initialTokensState: ITokensState = {
  tokens: null,
}
