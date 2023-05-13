import {compose, applyMiddleware,createStore} from 'redux'
import { rootReducer } from './root-reduce';
import logger from 'redux-logger'

const middleware = [logger];

const composedEnhancer = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, composedEnhancer);