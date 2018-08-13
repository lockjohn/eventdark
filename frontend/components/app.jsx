import React from 'react';
import { Switch,
    Route,
    Redirect,
    Link,
    HashRouter
} from 'react-router-dom';

import NavBarContainer from './navbar/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import EventShowContainer from './event/event_show_container';
import HomeContainer from './home_container';

import {AuthRoute} from '../util/route_util';

const App = () => (
    <div className="background-app-div">
        <NavBarContainer />
        <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer}/>
        <Route path="/events/:eventId" component={EventShowContainer} />
        <Route component={HomeContainer} />
        <Route path='*' component={LoginFormContainer} />
        </Switch>
    </div>
);

export default App;