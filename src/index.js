import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
// import { createBrowserHistory as createHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
//import { ConnectedRouter as Router } from 'react-router-redux';

import configureStore from './app/store/configureStore';
import Routes from './app/routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './index.styl';

// const preloadedState = window.__PRELOADED_STATE__;
// const store = configureStore(preloadedState); // use this for SSR

// We don't need to sync store explicitly, as we use routerMiddleware
// const history = syncHistoryWithStore(createHistory());
// const history = createHistory();
const initialState = typeof window !== 'undefined' ? window.__INITIAL_STATE__: undefined;
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.router
});
// with v.>4 of react-router, the history will be created automatically
const router =
    <Router>
        <Routes/>
    </Router>;

const mount = document.getElementById('root');
const provider = 
    <Provider store={store} history={history}>
        {router}
    </Provider>;

ReactDOM.render(provider, mount);
