import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
// import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './app/store/configureStore';


// const preloadedState = window.__PRELOADED_STATE__;
// const store = configureStore(preloadedState); // use this for SSR
const history = createHistory();
const store = configureStore(initialState, history);

// We don't need to sync store explicitly, as we use routerMiddleware
// const history = syncHistoryWithStore(createHistory());

const initialState = typeof window !== 'undefined' ? window.__INITIAL_STATE__: undefined;

import routes from './app/routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './index.styl';

const router =
    <Router history={history}>
        {routes}
    </Router>;

const mount = document.getElementById('root');
const provider = 
    <Provider store={store}>
        {router}
    </Provider>;

ReactDOM.render(provider, mount);
