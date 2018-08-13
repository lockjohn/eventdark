import {connect} from 'react-redux';
import {fetchAllEvents} from '../../actions/event_actions';
import EventIndex from './event_index';

const msp = (state, ownProps) => {
    // console.log(state);
    // console.log("msp");
    return {
        // events: Object.values(events),
    }
}

const mdp = ({dispatch, ownProps}) => {
    return {
        fetchAllEvents: () => dispatch(fetchAllEvents()),
    }
}

// export default connect(msp,mdp)(EventIndex);