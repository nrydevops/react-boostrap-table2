import FlightApi from '../api/flightApi';

export function showFlights(flights) {
  return {
    type: 'SHOW_FLIGHTS',
    flights
  };
}

export function loadFlights() {
  return function(dispatch) {
    return FlightApi.getFlights().then(flights => {
      dispatch(showFlights(flights));
    }).catch(error => {
      throw(error);
    });
  };
}


