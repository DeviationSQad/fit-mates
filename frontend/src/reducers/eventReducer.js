import { FIND_EVENT } from "../actions/types";

const initialState = {
  foundEvents: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_EVENT:
      return {
        ...state,
        foundEvents: [...state.foundEvents, action.payload]
      };
    default:
      return state;
  }
};
