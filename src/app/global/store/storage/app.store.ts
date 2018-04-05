import { Post } from '../../../models/post';

export interface AppState {
    posts: Post[];
    isLoggedIn: boolean;
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
        isLoggedIn: false
    };
};
