import { connect } from 'react-redux';
import { fetchAllEvents } from '../../actions/event_actions';
import CategoryIndex from './category_index';

const msp = (state, ownProps) => {
    return {
        events: state.entities.events,
        
    }
};

const mdp = (dispatch, ownProps) => {
    return {
        fetchAllEvents: (category) => dispatch(fetchAllEvents(category)),   
    }
};

export default connect(msp, mdp)(CategoryIndex); 