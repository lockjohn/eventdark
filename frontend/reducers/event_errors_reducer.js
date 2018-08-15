import {
    RECEIVE_ALL_EVENTS,
    RECEIVE_EVENT,
    EVENT_ERRORS,
    CLEAR_ERRORS
} from "../actions/event_actions";

const _nullErrors = [];

export default (state = _nullErrors, action) => {
    
    Object.freeze(state);
    switch (action.type) {
        case EVENT_ERRORS:
        console.log("action errors", action.errors)
           return Object.assign([], state, action.errors);
        case RECEIVE_ALL_EVENTS:
        case RECEIVE_EVENT:
        case CLEAR_ERRORS:
            
            return _nullErrors;
        default:
            
            return state;
    }
};