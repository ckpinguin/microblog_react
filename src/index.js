import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

import ReduxToastr from 'react-redux-toastr';

import configureStore from './app/store/configureStore';
import Routes from './app/routes';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
// import 'react-redux-toastr/src/styles/index.scss';
import 'react-redux-toastr/src/styles/react-redux-toastr.min.css';
import './index.styl';

// use this for SSR:
// const preloadedState = window.__PRELOADED_STATE__;
// const store = configureStore(preloadedState);

// We shouldn't need to sync store explicitly, when we use routerMiddleware
const history = createHistory();
const initialState = typeof window !== 'undefined' ? window.__INITIAL_STATE__: undefined;
const store = configureStore(initialState, history);

store.subscribe(() => {
    console.log('state changed in store: ', store.getState());
});

// with v.>4 of react-router, the history should be created automatically
const mount = document.getElementById('root');
const provider = 
    <Provider store={store}>
        <div>
            <Router>
                <Routes/>
            </Router>
            <ReduxToastr
                timeOut={5000}
                newestOnTop={true}
                position="top-right"
                transitionIn="bounceIn"
                transitionOut="hinge" // just testing animations.css integration
                progressBar={true}
            />
        </div>
    </Provider>;

ReactDOM.render(provider, mount);
