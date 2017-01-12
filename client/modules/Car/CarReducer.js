import { ADD_CAR, ADD_CARS, DELETE_CAR } from './CarActions';

// Inital State
const initalState = { data: [] };

const CarReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_CAR:
      return {
        data: [action.car, ...state.data],
      };

    case ADD_CARS:
      return {
        data: action.cars,
      };

    case DELETE_CAR:
      return {
        data: state.data.filter(car => car.id !== action.id),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all cars
export const getCars = state => state.cars.data;

// Get car by id
export const getCar = (state, id) => state.cars.data.filter(car => car._id === id)[0];

// Export Reducer
export default CarReducer;
