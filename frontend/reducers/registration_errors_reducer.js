import { REGISTRATION_ERROR, RECEIVE_USER_TICKETS } from '../actions/registration_actions';

const _nullErrors = [];

export default (state = _nullErrors, action) => {

    Object.freeze(state);
    switch (action.type) {
        case REGISTRATION_ERROR:
            return action.error;
        case RECEIVE_USER_TICKETS:
            return _nullErrors;
        default:
            return state;
    }
};

