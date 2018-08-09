import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';

const msp = (state) => {
    return {
        formType: 'login',
        errors: state.errors.login,
        navLink: <Link to="/login">log in instead.</Link>,
    }
};

const mdp = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
    }
};

export default connect(msp, mdp)(SessionForm);