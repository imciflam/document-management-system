import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_TREATIES, DELETE_TREATY, ADD_TREATY } from "./types";

// GET TREATIES
export const getTreaties = () => (dispatch, getState) => {
  axios
    .get("/api/treaties/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_TREATIES,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//delete TREATy
export const deleteTreaty = id => (dispatch, getState) => {
  axios
    .delete(`/api/treaties/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteTreaty: "Успешно перемещено" }));
      dispatch({
        type: DELETE_TREATY,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//add treaty
//payload - data coming back
export const addTreaty = treaty => (dispatch, getState) => {
  console.log("treaties");
  console.log(treaty);
  axios
    .post("/api/treaties/", treaty, tokenConfig(getState), {
      headers: { "Content-Type": "undefined" }
    })
    .then(res => {
      dispatch(createMessage({ addTreaty: "Успешно добавлено" }));
      dispatch({
        type: ADD_TREATY,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      console.log(treaty);
    });
};
