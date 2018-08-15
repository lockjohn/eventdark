import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = (payload) => {
    return {
        type: RECEIVE_CURRENT_USER,
        payload
    }
}

const logoutCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER,
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
    }
}

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user).then( payload => dispatch(
        receiveCurrentUser(payload)), 
        err => (dispatch(receiveErrors(err.responseJSON)))
        )
);

export const login = user => dispatch=> {
    return ( SessionAPIUtil.login(user).then(payload =>{return(dispatch(
        receiveCurrentUser(payload)))}, err => {
         return (  dispatch(receiveErrors(err.responseJSON)))
        }
    ));
};

export const logout  = () => dispatch => (
    SessionAPIUtil.logout().then(()=>dispatch(logoutCurrentUser()),
    err => dispatch(receiveErrors(err.responseJSON)))
);