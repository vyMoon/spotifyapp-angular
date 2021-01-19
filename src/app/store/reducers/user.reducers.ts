import { initialUserState, IUserState } from '../state/user.state';
import { UserActions, EUserActions } from '../actions/user.actions';

export const userReducer = (state = initialUserState, action: UserActions): IUserState => {
  switch (action.type) {
    case EUserActions.insertUser:
      return {
        ...state,
        user: action.payload,
      }
    default: 
      return state;
  }
}
