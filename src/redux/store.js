import {createStore, applyMiddleware, compose} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';

import logger from "redux-logger";

import rootReducer from './root-reducer';

const composeEnhancers = composeWithDevTools({
    trace: true
});

const middlewares = [logger];
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
    );

export default store;
