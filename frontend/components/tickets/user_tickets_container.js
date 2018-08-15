import { connect } from 'react-redux';
import UserTickets from './user_tickets_show';
import {showRegistrations} from '../../actions/registration_actions';

const msp = ({entities, session}) => {
    
    return {
        user: entities.users[session.id],
        tickets: Object.values(entities.tickets),
    }
}

const mdp = (dispatch) => {
    return {
        showRegistrations: id => dispatch(showRegistrations(id))
    }

}


export default connect(msp, mdp)(UserTickets);