/**
 * Created by bikramkawan on 8/31/17.
 */
import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER} from '../constants';
import {bake_cookie, read_cookie} from 'sfcookies'

const reminder = (action) => {
    let {reminderText, dueDate} = action;
    return {
        reminderText,
        dueDate,
        id: Math.random()
    }
}

const removeById = (state = [], id)=> {

    const reminders = state.filter((reminder)=>reminder.id !== id);
    return reminders;

}
const reminders = (state = [], action)=> {
    let reminders = null;
    state = read_cookie('reminders');
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            bake_cookie('reminders', reminders)
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            bake_cookie('reminders', reminders)
            return reminders;

        case CLEAR_REMINDER:
            reminders = [];
            bake_cookie('reminders', reminders)
            return reminders;
        default:
            return state;
    }

}

export default reminders;