import callApi from '../../util/apiCaller';

// Export Constants
export const GET_CAR_COUNT = 'GET_CAR_COUNT';


export function getCarCount(carCount) {
  return {
    type: GET_CAR_COUNT,
    carCount,
  };
}

export function fetchCarCount() {
  return dispatch => {
    return callApi('cars/count').then(res => {
      dispatch(getCarCount(res));
    });
  };
}
