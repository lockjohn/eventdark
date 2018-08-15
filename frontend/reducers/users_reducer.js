import {RECEIVE_CURRENT_USER} from "../actions/session_actions";
import {RECEIVE_USER_TICKETS} from "../actions/registration_actions";
import {merge} from 'lodash';

const usersReducer = (state={}, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.payload.user.id]: action.payload.user})
        case RECEIVE_USER_TICKETS:
            return merge({}, state, { [action.payload.user.id]: action.payload.user } ) //think this will just nest tix info under user
        default:
            return state;
    }
} 

export default usersReducer;