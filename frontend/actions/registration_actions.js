import {newRegistration}  from '../util/user_registration_api_util';

export const RECEIVE_USER_TICKETS = "RECEIVE_USER_TICKETS"
export const REGISTRATION_ERROR = "REGISTRATION_ERROR"

const receiveUserTickets = (user) => {
    return {
        type: RECEIVE_USER_TICKETS,
        user
    }
}

const registrationError = (error) => {
    return {
        type: REGISTRATION_ERROR,
        error
    }
}

// action to be called from the registration modal accessed on event page:

export const createRegistration = event => dispatch => {
    return (
      newRegistration(event)
      .then(userinfo => dispatch(receiveUserTickets(userinfo)), 
        err => dispatch(registrationError(err.responseJSON)))
    )
}