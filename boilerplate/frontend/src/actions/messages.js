import { CREATE_MESSAGE } from "./types";

//create msg
//no async so return directly
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};
