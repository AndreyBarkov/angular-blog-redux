import { Post } from '../../../models/post';
import { User } from '../../../models/user';


export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const INITIALIZE_STORE = 'INITIALIZE_STORE';
export const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const FAIL_LOGIN = 'FAIL_LOGIN';

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
export const login = (user: User) =>  {
    return {
        type: ATTEMPT_LOGIN,
        user,
    };
};
export const successLogin = () =>  {
    return {
        type: SUCCESS_LOGIN,
    };
};
export const failLogin = () => {
    return {
        type: FAIL_LOGIN,
    };
};
