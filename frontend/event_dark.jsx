import React from "react";
import ReactDOM from "react-dom";
import {signup, login, logout} from './actions/session_actions';
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
window.signup = signup;
window.login = login;
window.logout = logout;
window.getState = store.getState;
window.dispatch = store.dispatch;
})