import {
  GET_TREATIES,
  DELETE_TREATY,
  ADD_TREATY,
  CLEAR_TREATIES
} from "../actions/types.js";

const initialState = {
  treaties: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TREATIES:
      return {
        ...state,
        treaties: action.payload
      };
    //to-be-deleted post's id issa payload
    case DELETE_TREATY:
      return {
        ...state,
        treaties: state.treaties.filter(treaty => treaty.id !== action.payload)
      };
    //all leads + new
    case ADD_TREATY:
      return {
        ...state,
        treaties: [...state.treaties, action.payload]
      };
    case CLEAR_TREATIES:
      return {
        ...state,
        treaties: []
      };
    default:
      return state;
  }
}
