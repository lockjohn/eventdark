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
        price: 0,
        date: '', time: '',
        capacity: 0,
        photoFile: '',
    };
    const event = state.entities.events[ownProps.match.params.eventId] || defaultEvent;
    const formType = 'Update Event';
    const errors = state.errors.eventErrors || [];
    // debugger;
    return { event, formType , errors};
};

const mapDispatchToProps = dispatch => {
    return {
        fetchEvent: id => dispatch(fetchEvent(id)),
        action: (event,id) => dispatch(updateEvent(event,id)),
    };
};

class EditEventForm extends React.Component {
    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
    }



    render() {
        const { action, formType, event, errors } = this.props;
      
        return (
            <EventForm
                action={action}
                formType={formType}
                event={event}
                errors={errors} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEventForm);