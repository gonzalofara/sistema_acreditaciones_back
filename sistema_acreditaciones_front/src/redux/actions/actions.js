import axios from "axios";

export const GET_ALL_EVENTS = "GET_ALL_EVENTS";
export const GET_EVENT_DETAIL = "GET_EVENT_DETAIL";
export const RESET_EVENT_DETAIL = "RESET_EVENT_DETAIL";
export const POST_EVENT = "POST_EVENT";
export const GET_INVITADO = "GET_INVITADO";
export const SET_EVENT_STATUS = "SET_EVENT_STATUS";

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
export function setEventStatus(id, status) {
  return async function (dispatch) {
    try {
      const events = await axios.patch(
        "http://localhost:3001/eventos/" + id,
        status
      );
      return dispatch({
        type: SET_EVENT_STATUS,
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

export function postEvents(evento) {
  console.log(evento);
  return async function () {
    try {
      var json = await axios.post("http://localhost:3001/eventos", evento);
      console.log(json.data);
      return;
    } catch (error) {
      console.log(error);
    }
  };
}
export function createList(id, lista) {
  try {
    return async function (dispatch) {
      return await axios.post(`http://localhost:3001/invitados/${id}`, lista);
    };
  } catch (error) {
    console.log(error.message);
  }
}
export function getInvitado(id) {
  try {
    return async function (dispatch) {
      const invitado = await axios.get(`http://localhost:3001/invitados/${id}`);
      return dispatch({
        type: GET_INVITADO,
        payload: invitado.data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
}
