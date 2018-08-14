import {RECEIVE_CURRENT_USER} from "../actions/session_actions";
import {RECEIVE_USER_TICKETS} from "../actions/registration_actions";
import {merge} from 'lodash';

const usersReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser})
        case RECEIVE_USER_TICKETS:
            return merge({}, state, { [action.user.id]: action.user } ) //think this will just nest tix info under user
        default:
            return state;
    }
} 

export default usersReducer;