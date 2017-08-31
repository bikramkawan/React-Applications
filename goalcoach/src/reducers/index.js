/**
 * Created by bikramkawan on 9/1/17.
 */
import {combineReducers} from 'redux';
import user from './user';
import goals from './goals';
import completeGoals from './completeGoals'

export  default combineReducers({
    user,
    goals,
    completeGoals
})
