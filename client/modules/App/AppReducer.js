// Import Actions
import { GET_CAR_COUNT } from './AppActions';

// Initial State
const initialState = { carCount: [0] };

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAR_COUNT:
      return {
        carCount: [action.carCount],
      };

    default:
      return state;
  }
};

/* Selectors */

// Get Car Count
export const getCount = state => state.app.carCount[0];

// Export Reducer
export default AppReducer;
