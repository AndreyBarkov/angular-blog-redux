import { CREATE_POST, DELETE_POST, UPDATE_POST, INITIALIZE_STORE } from '../actions/actions';
import { getInitialState, State } from '../storage/app.store';
import { Post } from '../../../models/post';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface PostState {
    posts: Post[];
}
const initialState: PostState = {
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

export const postReducer = (state: PostState = initialState, action: any) => {
    switch (action.type) {
        case CREATE_POST:
            return createPost(state, action);
        case DELETE_POST:
            return deletePost(state, action);
        case UPDATE_POST:
            return state;
        case INITIALIZE_STORE:
            console.log('State: ' + state);
            return state;
        default:
            return state;
    }
};

const deletePost = (state: PostState, action: any) => {
    const index = state.posts.findIndex(post => post.id === action.id);
    state.posts.splice(index, 1);
    console.log(state);
    return state;
};
const createPost = (state: PostState, action: any) => {
    action.newPost.id = state.posts[0].id + 1;
    action.newPost.datePosted = getCurrentDate();
    state.posts.unshift(action.newPost);
    return state;
};
const updatePost = (state: PostState, action: any) => {
    const index = state.posts.findIndex(post => post.id === action.post.id);
    state.posts.splice(index, 1, action.post);
};
const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour12: true
    });
};
export const selectPostsState = createFeatureSelector<PostState>('postsState');

export const selectPostsListState = createSelector(
    selectPostsState,
    (state: PostState) => state.posts
  );

export const getStatePosts = createSelector(
    selectPostsListState,
    this.getPosts
);

export const getPosts = (state: PostState) => state.posts;
