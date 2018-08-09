import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup, clearErrors, login } from '../../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';

const msp = (state) => {
    return {
        formType: 'sign up',
        errors: state.errors.login,
        navLink: <Link to="/login">log in instead.</Link>,
    }
};

const mdp = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
        login: (user) => dispatch(login(user))
    }
};

export default connect(msp, mdp)(SessionForm);