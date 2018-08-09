import React from 'react';

import NavBarContainer from './navbar/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import {AuthRoute} from '../util/route_util';

const App = () => (
    <div>
        <NavBarContainer />
        <h1>dark</h1>
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/Signup" component={SignupFormContainer}/>
    </div>
);

export default App;