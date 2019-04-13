import { CHANGE_INPUT } from "./types";

export const changeInput = (inputName, value) => {
  return {
    type: CHANGE_INPUT,
    key: inputName,
    value
  };
};
