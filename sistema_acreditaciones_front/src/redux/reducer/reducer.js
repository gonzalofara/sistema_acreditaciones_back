import {
  GET_ALL_EVENTS,
  GET_EVENT_DETAIL,
  RESET_EVENT_DETAIL,
  GET_INVITADO,
  SET_EVENT_STATUS,
} from "../actions/actions";

const initialState = {
  eventos: [],
  evento: {},
  invitado: {},
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
    case SET_EVENT_STATUS:
      return {
        ...state,
        evento: action.payload,
      };

    case GET_INVITADO:
      return {
        ...state,
        invitado: action.payload,
      };
    case RESET_EVENT_DETAIL:
      return {
        ...state,
        evento: {},
        invitado: {},
      };
    default:
      return state;
  }
};

export default rootReducer;
