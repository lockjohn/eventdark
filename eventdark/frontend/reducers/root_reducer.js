import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    Entities: entitiesReducer,
    Session: sessionReducer,
    Errors: errorsReducer,
});
