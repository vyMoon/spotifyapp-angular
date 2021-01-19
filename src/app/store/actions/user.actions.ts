import { Action } from '@ngrx/store';
import { IUser } from '../../common/interfaces/user.interface';

export enum EUserActions {
  insertUser = '[User] inser userinformation',
}

export class InsertUser implements Action {
  public readonly type = EUserActions.insertUser;
  constructor( public payload: IUser ) {}
}

export type UserActions = InsertUser;
