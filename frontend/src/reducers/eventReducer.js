import { CREATE_EVENT } from "../actions/types";

const initialState = {
  events: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: { ...action.payload }
      };
    default:
      return { state };
  }
};
