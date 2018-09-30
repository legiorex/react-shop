import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import  rootReduser from './reducers';
export default () => {
    const store = createStore(rootReduser, applyMiddleware(logger));
    return store;
};

