import React from 'react';
import { connect } from 'react-redux';
import EventForm from './event_form';
import { fetchEvent, updateEvent } from '../../actions/event_actions';
import { Redirect } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    const currentUserId = [state.session.id]
    const currentUser = state.entities.users[state.session.id]
    const defaultEvent = {
        name: '',
        description: '',
        price: 'FREE',
        date: '', time: '',
        capacity: 0,
        organizer: currentUser.username,
        organizerDescription: currentUser.organizer_description || '',
    };
    const event = state.events[ownProps.match.params.eventtId] || defaultEvent;
    const formType = 'Update Event';

    return { event, formType , currentUserId, currentUser};
};

const mapDispatchToProps = dispatch => {
    return {
        fetchEvent: id => dispatch(fetchEvent(id)),
        action: event => dispatch(updateEvent(event)),
    };
};

class EditEventForm extends React.Component {
    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.event.id != nextProps.match.params.eventId) {
            this.props.fetchEvent(nextProps.match.params.eventId);
        }
    }

    render() {
        const { action, formType, event } = this.props;
        
        if (user.user ) {
            <Redirect to="/"/>
        }
        else {
        return (
            <EventForm
                action={action}
                formType={formType}
                event={event} />
        );}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEventForm);