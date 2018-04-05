import {CREATE_POST, DELETE_POST, UPDATE_POST, INITIALIZE_STORE, initializeStore } from '../actions/actions';
import { AppState, getInitialState } from '../storage/app.store';

export const postReducer = (state: AppState = getInitialState(), action: any) => {
    switch (action.type) {
        case CREATE_POST:
            return state;
        case DELETE_POST:
        console.log('State: ' + state);
            return {posts: [], isLoggedIn: false};
        case UPDATE_POST:
            return state;
        case INITIALIZE_STORE:
            console.log('State: ' + state);
            return state;
        default:
         return state;
    }
};
