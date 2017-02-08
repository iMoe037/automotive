import callApi from '../../util/apiCaller';

// Export Constants
export const GET_CAR_COUNT = 'GET_CAR_COUNT';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export function getCarCount(carCount) {
  return {
    type: GET_CAR_COUNT,
    carCount,
  };
}

export function fetchCarCount(query) {
  return dispatch => {
    return callApi('carcount', 'get', null, query).then(res => {
      dispatch(getCarCount(res));
    });
  };
}

export function getFilter(filter) {
  return {
    type: CHANGE_FILTER,
    filter,
  };
}

export function fetchFilter(filterData) {
  return dispatch => {
    return dispatch(getFilter(filterData));
  };
}
