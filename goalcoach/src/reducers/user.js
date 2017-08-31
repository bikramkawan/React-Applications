/**
 * Created by bikramkawan on 8/31/17.
 */
import {LOGIN} from '../constants';

let user = {
    email: null
}

export default (state = null, action) => {

    switch (action.type) {
        case LOGIN:
            const {email} = action;
            user = {
                email
            }
            return user;

        default:
            return state
    }


}