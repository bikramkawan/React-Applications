import {
    GET_PHOTO_STARTED,
    GET_PHOTO_SUCCESS,
    GET_PHOTO_FAILED,
} from '../actions/types';

const initialState = {
    loading: false,
    todos: [],
    error: null,
};

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PHOTO_STARTED:
            return {
                ...state,
                loading: true,
            };
        case GET_PHOTO_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                todos: [...state.todos, action.payload],
            };
        case GET_PHOTO_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
}
