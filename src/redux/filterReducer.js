const initialFilterState = "SHOW_ALL";

export default function filterReducer(state = initialFilterState, action) {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}
