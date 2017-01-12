import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_CAR = 'ADD_CAR';
export const ADD_CARS = 'ADD_CARS';
export const DELETE_CAR = 'DELETE_CAR';

// Export Actions
export function addCar(car) {
  return {
    type: ADD_CAR,
    car,
  };
}

export function addCarRequest(car) {
  return dispatch => {
    return callApi('cars', 'car', {
      car: {
        model: car.model,
        make: car.make,
        images: car.images,
        city_epa: car.city_epa,
        dimensions: car.dimensions,
        displacement: car.displacement,
        engine: car.engine,
        highway_epa: car.highway_epa,
        hp: car.hp,
        ln_type: car.ln_type,
        msrp: car.msrp,
        overview: car.overview,
        price: car.price,
        rating: car.rating,
        summary: car.summary,
        top_speed: car.top_speed,
        transmission: car.transmission,
        vehicle_type: car.vehicle_type,
        vehicle_type_more: car.vehicle_type_more,
        zero_sixty: car.zero_sixty,
      },
    }).then(res => dispatch(addCar(res.car)));
  };
}

export function addCars(cars) {
  return {
    type: ADD_CARS,
    cars,
  };
}

export function fetchCars() {
  return dispatch => {
    return callApi('cars').then(res => {
      dispatch(addCars(res.cars));
    });
  };
}

export function fetchCar(id) {
  return dispatch => {
    return callApi(`cars/${id}`).then(res => dispatch(addCar(res.car)));
  };
}

export function deleteCar(id) {
  return dispatch => {
    return callApi(`cars/${id}`, 'delete').then(() => dispatch(deleteCar(id)));
  };
}
