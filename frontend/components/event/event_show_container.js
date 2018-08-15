// import React from 'react';
import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';
import { createRegistration } from '../../actions/registration_actions';

const msp = ({entities,errors}, { match }) => {
    const eventId = parseInt(match.params.eventId);
    const event = entities.events[eventId];
    return {
        eventId,
        event,
        errors: Object.values(errors.registration)
    }
}

const mdp = dispatch => {
    return {
    fetchEvent: id => dispatch(fetchEvent(id)), 
    createRegistration: id => dispatch(createRegistration(id)), 
    }
}

export default connect(msp,mdp)(EventShow);
