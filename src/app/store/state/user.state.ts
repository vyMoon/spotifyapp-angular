import { IUser } from '../../common/interfaces/user.interface';

export interface IUserState {
  user: IUser;
}

export const initialUserState: IUserState = {
  user: null,
}
