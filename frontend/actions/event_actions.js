import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const EVENT_ERRORS = "EVENT_ERROR";

const receiveAllEvents = (events) => {
    return {
        type: RECEIVE_ALL_EVENTS,
        events
    }
}
const receiveEvent = (event) => {
    return {
        type: RECEIVE_EVENT,
        event
    }
}
const eventErrors = (errors) => {
    return {
        type: EVENT_ERRORS,
        errors
     }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
    }
}

export const fetchAllEvents = (category) => dispatch => {
    return ( 
    EventAPIUtil.fetchEvents(category)
    .then(fetchedEvents =>dispatch(receiveAllEvents(fetchedEvents)), 
    (err) => dispatch(eventErrors(err.responseJSON)))
    )
}
export const fetchEvent = (id) => dispatch => {
    return ( 
    EventAPIUtil.fetchEvent(id)
    .then(fetchedEvent =>dispatch(receiveEvent(fetchedEvent)), 
            (err) => {return dispatch(eventErrors(err.responseJSON))})
    )
}
export const createEvent = (form) => dispatch => {
    return ( 
    EventAPIUtil.createEvent(form)
    .then(fetchedEvent =>dispatch(receiveEvent(fetchedEvent)), 
    (err) => dispatch(eventErrors(err.responseJSON)))
    )
}
export const updateEvent = (form, id) => dispatch => {
    return ( 
    EventAPIUtil.updateEvent(form,id)
    .then(fetchedEvent =>dispatch(receiveEvent(fetchedEvent)), 
    (err) => dispatch(eventErrors(err.responseJSON)))
    )
}