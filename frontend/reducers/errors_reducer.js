import sessionErrors from './session_errors_reducer';
import eventErrors from './event_errors_reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    login: sessionErrors,
    eventErrors: eventErrors,
});

