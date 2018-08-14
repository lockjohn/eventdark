import React from "react";
import ReactDOM from "react-dom";
import {createRegistration, showRegistrations} from './actions/registration_actions';
import { fetchAllEvents,fetchEvent,createEvent, updateEvent } from './actions/event_actions';
import configureStore from "./store/store";
import Root from './components/root';

document.addEventListener("DOMContentLoaded", ()=>{
let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }   
    
const root = document.getElementById('root');    
ReactDOM.render(<Root store={store}/>, root)
    
//testing
window.fetchEvent = fetchEvent;
window.fetchAllEvents = fetchAllEvents;
window.createEvent = createEvent;
window.updateEvent = updateEvent;
window.createRegistration = createRegistration;
window.showRegistrations = showRegistrations;
window.getState = store.getState;
window.dispatch = store.dispatch;
})