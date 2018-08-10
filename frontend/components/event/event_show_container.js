// import React from 'react';
import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';

const msp = (state, { match }) => {

    const eventId = parseInt(match.params.eventId);
    const event = state.entities.events[eventId];
    return {
        eventId,
        event
    }
}

const mdp = dispatch => {
    return {
    fetchEvent: id => dispatch(fetchEvent(id)), 
    }
}

export default connect(msp,mdp)(EventShow);
