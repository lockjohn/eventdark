import React from "react";
import ReactDOM from "react-dom";
import {signup, login, logout} from './actions/session_actions';
// import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", ()=>{
//testing
window.signup = signup;
window.login = login;
window.logout = logout;
// const store = configureStore();
const root = document.getElementById('root');    
ReactDOM.render(<h1>ca marche</h1>, root)
})