import { GET_ALL_EVENTS, GET_EVENT_DETAIL } from "../actions/actions";

const initialState = {
  eventos: [],
  evento: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EVENTS:
      return {
        ...state,
        eventos: action.payload,
      };
    case GET_EVENT_DETAIL:
      return {
        ...state,
        evento: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
