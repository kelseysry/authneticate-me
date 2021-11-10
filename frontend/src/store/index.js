// frontend/src/store/index.js
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import businessReducer from './business';
import reviewReducer from './review';
import mapsReducer from './map';

// add reducer so can name (business) slice of state so useSelector can grab it
const rootReducer = combineReducers({
  session: sessionReducer,
  business: businessReducer,
  review: reviewReducer,
  map: mapsReducer
});

let enhancer; // In production, the enhancer should only apply the thunk middleware.

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default; // redux-logger prints out the store
  const composeEnhancers = // culimination of all enhancer
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
