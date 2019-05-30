import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";

// GET LEADS
export const getLeads = () => (dispatch, getState) => {
  axios
    .get("/api/leads/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//delete lead
export const deleteLead = id => (dispatch, getState) => {
  axios
    .delete(`/api/leads/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteLead: "Успешно перемещено" }));
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//add lead
//payload - data coming back
export const addLead = lead => (dispatch, getState) => {
  console.log("lead");
  console.log(lead);
  axios
    .post("/api/leads/", lead, tokenConfig(getState), {
      headers: { "Content-Type": "undefined" }
    })
    .then(res => {
      dispatch(createMessage({ addLead: "Успешно добавлено" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      console.log(lead);
    });
};
