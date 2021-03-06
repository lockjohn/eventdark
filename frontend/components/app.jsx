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
import HomeContainer from './home/home_container';
import CreateEventContainer from './event/create_event_container';
import EditEventContainer from './event/edit_event_container';
import UserTicketsContainer from './tickets/user_tickets_container';
import CategoryContainer from './category/category_container';
import Footer from './footer/footer';
import SearchContainer from './search/search_container';

import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
    <div className="background-app-div">
        <NavBarContainer />
        <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer}/>
        <ProtectedRoute exact path="/events/new" component={CreateEventContainer}/>
        <ProtectedRoute exact path="/events/:eventId/edit" component={EditEventContainer} />
        <ProtectedRoute exact path="/events/tickets" component={UserTicketsContainer} />
        <Route exact path="/e/:category" component={CategoryContainer} />
        <Route exact path="/search/:category" component={SearchContainer} />
        <Route path="/events/:eventId" component={EventShowContainer} />
        <Route component={HomeContainer} />
        <Route path='*' component={LoginFormContainer} />
        </Switch>
        <Footer />
    </div>
);

export default App;