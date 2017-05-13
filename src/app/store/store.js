
import configureStore from './configureStore';

const initialState = typeof window !== 'undefined' ? window.__INITIAL_STATE__: undefined;
const store = configureStore(initialState, history);

export default store;