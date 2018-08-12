import {
    GET_PHOTO_STARTED,
    GET_PHOTO_SUCCESS,
    GET_PHOTO_FAILED,
} from './types';

import axios from 'axios';

export const getPhotos = params => {
    return dispatch => {
        dispatch(getPhotosStarted());

        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                dispatch(getPhotosSuccess(res.data));
            })
            .catch(err => {
                dispatch(getPhotosFailed(err.message));
            });
    };
};

const getPhotosSuccess = todo => ({
    type: GET_PHOTO_SUCCESS,
    payload: {
        ...todo,
    },
});

const getPhotosStarted = () => ({
    type: GET_PHOTO_STARTED,
});

const getPhotosFailed = error => ({
    type: GET_PHOTO_FAILED,
    payload: {
        error,
    },
});
