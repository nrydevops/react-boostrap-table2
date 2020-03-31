export default function flightReducer(state = {}, action) {
  switch (action.type) {
    case "SHOW_FLIGHTS":
      return Object.assign({}, state, action.flights);
    default:
      return state;
  }
}
