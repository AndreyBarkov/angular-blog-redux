import { Post } from '../../../models/post';
import { AppState} from '../storage/app.store';


export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const INITIALIZE_STORE = 'INITIALIZE_STORE';

export const createPost = (newPost: Post) => {
    return {
        type: CREATE_POST,
        newPost,
    };
};

export const deletePost = (id: number) => {
    return {
        type: DELETE_POST,
        id,
    };
};

export const updatePost = (updatedPost: Post) => {
    return {
        type: UPDATE_POST,
        updatedPost,
    };
};
export const initializeStore = (store: AppState) => {
    return{
        type: INITIALIZE_STORE,
        store
    };
};
