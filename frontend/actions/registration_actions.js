import {newRegistration, usersRegistrations}  from '../util/user_registration_api_util';

export const RECEIVE_USER_TICKETS = "RECEIVE_USER_TICKETS"
export const REGISTRATION_ERROR = "REGISTRATION_ERROR"


//this will go to users reducer and update user's slice of state 
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

//needs id from current_user aka session.id
export const showRegistrations = id => dispatch => {
    return (
        usersRegistrations(id)
        .then(userinfo => dispatch(receiveUserTickets(userinfo)),
          err => dispatch(registrationError(err.responseJSON)))
    )
}