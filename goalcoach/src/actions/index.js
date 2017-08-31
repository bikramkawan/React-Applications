/**
 * Created by bikramkawan on 8/31/17.
 */
import {LOGIN, SET_GOALS,SET_COMPLETE} from '../constants';

export function logUser(email) {
    const action = {
        type: LOGIN,
        email
    }
    return action;

}


export function setGoals(goals) {
    const action = {
        type: SET_GOALS,
        goals
    }
    return action;

}

export function setComplete(completeGoals) {
    const action = {
        type: SET_COMPLETE,
        completeGoals
    }
    return action;

}