import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

const configureStore = (initialState = {}, history) => {
    const router = routerMiddleware(history);
    const middlewares = [ thunk, router ];
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(...middlewares)
    );
    return store;
};
export default configureStore;