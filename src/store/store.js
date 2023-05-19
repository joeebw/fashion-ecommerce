// import {compose, applyMiddleware,createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './root-reduce';
import logger from 'redux-logger'

const middleware = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

// const composedEnhancer = compose(applyMiddleware(...middleware));

// Setting redux-persist
const persistConfig = {
  key: 'root',
  storage,
  blacklist:['user']
}

// setting persisted reducer 
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware
});

export const persistor = persistStore(store);