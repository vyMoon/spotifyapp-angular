import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { tokenReducers } from '../reducers/tokens.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  tokens: tokenReducers,
}
