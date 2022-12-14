import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middleware = compose(applyMiddleware(thunk));
const store = createStore(rootReducer, middleware);

export const setupStore = (initialState?: any) => createStore(rootReducer, initialState, middleware);

export default store;
