import { Post } from '../../../models/post';
import { PostState } from '../reducers/postReducer';
import { AuthState } from '../reducers/authReducer';

export interface State {
    post: PostState;
    auth: AuthState;
}

export const getInitialState = () => {
    return {
        posts: [
            {
                id: 1,
                title: 'Second Post',
                text: 'Lorem Ipsum',
                datePosted: 'Today 13:00PM',
            },
            {
                id: 0,
                title: 'First Post',
                text: 'Sampe Text for Sample Post',
                datePosted: 'Today 12:00PM',
            }
        ],
    };
};
