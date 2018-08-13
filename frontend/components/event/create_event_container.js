import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EventForm from './event_form';
import { createEvent } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
    const user = state.entities.users[state.session.id]
    const event = { 
        name: '', 
        description: '',
        price: 'FREE',
        date: '', time: '',
        capacity: 0, 
        organizer: user.username,
        organizerDescription: user.organizer_description || '',
    };
    const formType = 'Create Event';

    return { event, formType };
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: event => dispatch(createEvent(event)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);