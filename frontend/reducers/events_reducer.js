import { 
    RECEIVE_ALL_EVENTS, 
    RECEIVE_EVENT,
} from '../actions/event_actions';
import { merge } from 'lodash';

export const eventsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_EVENTS:
            return action.events;
        case RECEIVE_EVENT:
            return merge({},state, {[action.event.id]:action.event})
        default:
            return state;
    }
}


