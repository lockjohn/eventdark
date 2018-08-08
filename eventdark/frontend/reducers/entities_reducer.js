import {combineReducers} from 'redux';
import usersReducer from './users_reducer';


const entitiesReducer = combineReducers({
    Users: usersReducer
});

export default entitiesReducer;