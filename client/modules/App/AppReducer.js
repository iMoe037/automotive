// Import Actions
import { GET_CAR_COUNT, CHANGE_FILTER } from './AppActions';

// Initial State
export const initialState = {
  carCount: 0,
  filter: {
    make: 'All',
    ln_type: 'All',
    minRating: '1',
    maxRating: '5',
  },
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAR_COUNT:
      return { ...state, carCount: action.carCount };
    case CHANGE_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

/* Selectors */

// Get Car Count
export const getCount = state => state.app.carCount;

// Get filter
export const getFilter = state => state.app.filter;

// Export Reducer
export default AppReducer;
