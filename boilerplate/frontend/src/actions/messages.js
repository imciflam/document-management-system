import { CREATE_MESSAGE, GET_ERRORS } from "./types";

//create msg
//no async so return directly
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};

//return errs
export const returnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status }
  };
};
