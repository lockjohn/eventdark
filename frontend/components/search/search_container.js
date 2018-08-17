import {connect} from 'react-redux';
import SearchResults from './search__results_component';
import {fetchAllEvents} from '../../actions/event_actions';

const msp = ({entities, errors}) => {
    return {
        events: entities.events,
        errors: errors.eventErrors
    }
}
const mdp = (dispatch, ownProps) => {
    return {
        fetchAllEvents: (category) => dispatch(fetchAllEvents(category)),
    }
};

export default connect(msp,mdp)(SearchResults);