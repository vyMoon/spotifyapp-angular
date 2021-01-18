import { Action } from '@ngrx/store';
import { ITokens } from '../../common/interfaces/tokens.interface';

export enum ETokensActions {
  Insettokens = '[Tokens] insert tokens'
}

export class InsertTokens implements Action {
  public readonly type = ETokensActions.Insettokens
  constructor( public payload: ITokens ) {}
}

export type TokensActions = InsertTokens;
