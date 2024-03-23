import axios from "axios";
import { useReducer } from "react";
const handlegetUsersAsyncAction = (dispatch) => {
  axios.get("http://localhost:3201/users").then(({ data }) => {
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  });
};
export const getUsersAsyncAction = () => {
  return (dispatch) => {
    handlegetUsersAsyncAction(dispatch);
  };
};

export const deleteUserAsyncAction = (usr) => {
  return (dispatch) => {
    axios.delete("http://localhost:3201/users/" + usr.id).then(() => {
      handlegetUsersAsyncAction(dispatch);
    });
  };
};

export const createUserAsyncAction = () => {
  return (dispatch) => {
    axios.post("http://localhost:3201/users").then(() => {
      handlegetUsersAsyncAction(dispatch);
    });
  };
};

export const updateUserAsyncAction = (usr) => {
  return (dispatch) => {
    axios.put("http://localhost:3201/users/" + usr.id, usr).then(() => {
      handlegetUsersAsyncAction(dispatch);
    });
  };
};
