import { RECEIVE_USER_TICKETS } from "../actions/registration_actions";
import { merge } from 'lodash';

const ticketsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_TICKETS:
            return merge({}, state, action.payload.tickets) 
        default:
            return state;
    }
}

export default ticketsReducer;