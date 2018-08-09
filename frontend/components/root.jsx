import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const Root = ({ store }) => (
    
    <Provider store={store}>
        <HashRouter> 
            <App />
        </HashRouter>
    </Provider >
);

export default Root;

//thus App will be rendered for all routes in my app; will define my routes within App;