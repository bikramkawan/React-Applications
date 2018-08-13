import {
    GET_PHOTO_STARTED,
    GET_PHOTO_SUCCESS,
    GET_PHOTO_FAILED,
    HELL_ACTION,
    GET_POST_STARTED,
    GET_POST_SUCCESS,
    GET_POST_FAILED,
} from './types';
import { CALL_API } from './api';

export const getPosts = params => {
    return (dispatch, getState) => {
        dispatch({
            [CALL_API]: {
                endpoint: 'https://jsonplaceholder.typicode.com/posts1',
                param: 'bikram',
                types: [
                    GET_POST_STARTED,
                    response => {
                        return {
                            type: GET_POST_SUCCESS,
                            payload: response.response,
                        };
                    },
                    response => {
                        return {
                            type: GET_POST_FAILED,
                            payload: response.error,
                        };
                    },
                ],
            },
        });
    };
};

export const getPhotos = params => {
    return (dispatch, getState) => {
        dispatch({
            [CALL_API]: {
                endpoint: 'https://jsonplaceholder.typicode.com/posts',
                param: 'bikram',
                types: [
                    GET_PHOTO_STARTED,
                    response => {
                        return {
                            type: GET_PHOTO_SUCCESS,
                            payload: response.response,
                        };
                    },
                    GET_PHOTO_FAILED,
                ],
            },
        });
    };
};

export const helloAction = params => ({
    type: HELL_ACTION,
    payload: { test: 'TEST' },
});
