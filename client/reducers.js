/**
 * Root Reducer
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import Reducers
import app from './modules/App/AppReducer';
import cars from './modules/Car/CarReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  cars,
  routing: routerReducer,
});
