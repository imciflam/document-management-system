import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from "./types";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

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
      dispatch(createMessage({ deleteLead: "Lead Deleted" }));
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
  axios
    .post("/api/leads/", lead, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addLead: "Added successfully" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    })
    //create error and send it
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
