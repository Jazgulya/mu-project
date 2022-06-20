import axios from "axios";
import React, { useReducer } from "react";
export const eventContext = React.createContext();

const API = "http://localhost:8000/events";
const INIT_STATE = {
  events: [],
  oneEvent: null,
  pages: 0,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_EVENTS":
      return {
        ...state,
        events: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };

    case "GET_ONE_EVENT":
      return { ...state, oneEvent: action.payload };

    default:
      return state;
  }
}

const EventsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function addEvent(newEvent) {
    await axios.post(API, newEvent);
    getEvents();
  }
  async function getEvents() {
    let res = await axios(`${API}${window.location.search}`);
    dispatch({
      type: "GET_EVENTS",
      payload: res,
    });
  }
  async function deleteEvent(id) {
    await axios.delete(`${API}/${id}`);
    getEvents();
  }
  async function getOneEvent(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_EVENT",
      payload: res.data,
    });
  }
  async function updateEvent(id, editedEvent) {
    await axios.patch(`${API}/${id}`, editedEvent);
    getEvents();
  }

  return (
    <eventContext.Provider
      value={{
        events: state.events,
        oneEvent: state.oneEvent,
        pages: state.pages,
        addEvent,
        getEvents,
        deleteEvent,
        getOneEvent,
        updateEvent,
      }}
    >
      {children}
    </eventContext.Provider>
  );
};
export default EventsContextProvider;
