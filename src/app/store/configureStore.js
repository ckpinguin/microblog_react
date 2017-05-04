import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const configureStore = (initialState) => {
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(thunk)
    );
    return store;
};
export default configureStore;