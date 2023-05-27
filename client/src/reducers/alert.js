//function that takes a piece of state and action
import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      //state is immutable, so just add the new alert
      return [...state, payload];
    case REMOVE_ALERT:
      //remove specific alert by id
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
