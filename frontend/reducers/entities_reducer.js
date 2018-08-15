import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import {eventsReducer} from './events_reducer';
import ticketsReducer from './tickets_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    tickets: ticketsReducer,
    events: eventsReducer,
});

export default entitiesReducer;