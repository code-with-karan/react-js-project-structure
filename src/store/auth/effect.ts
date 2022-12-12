import apiService from "../../services/api.service";
import * as actionTypes from "./actions";

export const getUsers = () => {
  return (dispatch: any) => {
    dispatch({
      type: actionTypes.GET_USERS,
    });
    apiService
      .getUsers()
      .then((data) => {
        dispatch({
          type: actionTypes.GET_USERS_SUCCESS,
          data,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.GET_USERS_FAILED,
          error,
        });
      });
  };
};