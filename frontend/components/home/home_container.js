import {connect} from 'react-redux';
import {fetchAllEvents} from '../../actions/event_actions';
import Home from './home_component';

const msp = (state, ownProps) => {

    return {
        entities: state.entities,
        //Home will pass props to search and category components in the future 
    }
};

const mdp = (dispatch, ownProps) => {
    return {
     fetchAllEvents: (category) => dispatch(fetchAllEvents(category)),   //nothing for now, maybe some actions for search and categories, tickets
    }
};

export default connect(msp,mdp)(Home); 