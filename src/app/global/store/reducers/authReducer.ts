import { ATTEMPT_LOGIN, SUCCESS_LOGIN, FAIL_LOGIN } from '../actions/actions';
import { getInitialState } from '../storage/app.store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AuthState {
    isLoggedIn: boolean;
}
const initialState: AuthState = {
    isLoggedIn: false,
};

export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ATTEMPT_LOGIN:
            return state;
        case SUCCESS_LOGIN:
            return state;
        case FAIL_LOGIN:
            return state;
        default:
            return state;
    }
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.isLoggedIn
);
export const getLoggedIn = createSelector(
  selectAuthStatusState,
  this.getLoggedIn
);
