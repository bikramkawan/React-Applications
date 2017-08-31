/**
 * Created by bikramkawan on 8/31/17.
 */
import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER} from '../constants'


export const addReminder = (reminderText, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        reminderText,
        dueDate
    };
    return action;
}


export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    };
    return action;


}


export const clearReminder = () => {

    return {
        type: CLEAR_REMINDER
    }


}