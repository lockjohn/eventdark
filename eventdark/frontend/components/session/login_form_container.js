import SessionForm from './session_form';
import {connect} from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import React from 'react';
import {Link} from 'react-router-dom';

const msp = ({errors}) => {
    return {
        formType: 'login',
        errors: errors.login,
        navLink: <Link to="/signup">sign up instead. </Link>
    }
};

const mdp = (dispatch) => {
    return {
        processForm: (user)=> dispatch(login(user)),
        clearErrors: ()=> dispatch(clearErrors()),
    }
};

export default connect(msp,mdp)(SessionForm);