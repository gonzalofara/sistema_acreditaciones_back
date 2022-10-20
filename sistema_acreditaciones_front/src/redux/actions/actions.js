import axios from "axios";

export const GET_ALL_EVENTS = "GET_ALL_EVENTS";
export const GET_EVENT_DETAIL = "GET_EVENT_DETAIL";
export const RESET_EVENT_DETAIL = "RESET_EVENT_DETAIL";

export function getAllEvents() {
  return async function (dispatch) {
    try {
      const events = await axios.get("http://localhost:3001/eventos");
      return dispatch({
        type: GET_ALL_EVENTS,
        payload: events.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function getEventDetail(id) {
  return async function (dispatch) {
    try {
      const events = await axios.get("http://localhost:3001/eventos/" + id);
      return dispatch({
        type: GET_EVENT_DETAIL,
        payload: events.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function resetEventDetail() {
  return function (dispatch) {
    return dispatch({
      type: RESET_EVENT_DETAIL,
    });
  };
}
