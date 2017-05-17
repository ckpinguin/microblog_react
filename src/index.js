import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
// import { syncHistoryWithStore } from 'react-router-redux';
//import { ConnectedRouter as Router } from 'react-router-redux';

import configureStore from './app/store/configureStore';
import Routes from './app/routes';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './index.styl';

// use this for SSR:
// const preloadedState = window.__PRELOADED_STATE__;
// const store = configureStore(preloadedState);

// We shouldn't need to sync store explicitly, when we use routerMiddleware
const history = createHistory();
// const history = browserHistory;
const initialState = typeof window !== 'undefined' ? window.__INITIAL_STATE__: undefined;
const store = configureStore(initialState, history);

// const syncedHistory = syncHistoryWithStore(history, store);
// const syncedHistory = syncHistoryWithStore(history, store, {
//     selectLocationState: (state) => state.router
// });

// with v.>4 of react-router, the history should be created automatically
const mount = document.getElementById('root');
const provider = 
    <Provider store={store}>
        <Router>
            <Routes/>
        </Router>
    </Provider>;

ReactDOM.render(provider, mount);
