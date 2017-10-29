import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';
import postService from '../../services/postService';

// Initial state
const initialState = Map({
    posts: [
        {id: 1, title: 'Yo momma'},
        {id: 2, title: 'Yo sista'}
    ],
    loading: false
});

// Actions
const FETCH_POST_REQUEST = 'PostState/FETCH_POSTS_REQUEST';
const FETCH_POST_RESPONSE = 'PostState/FETCH_POSTS_RESPONSE';

// Action creators
export async function fetch() {
    return {
        type: FETCH_POST_REQUEST,
        payload: await postService.fetchPosts()
    };
}

// Reducer
export default function PostStateReducer(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_POST_REQUEST:

            return loop(
                state.set('loading', true),
                Effects.promise(fetch)
            );

        case FETCH_POST_RESPONSE:
            return state
                    .set('loading', false)
                    .update('posts', posts => posts.push(action.payload));

        default:
            return state;
    }
}
