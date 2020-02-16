import { apiCall } from "../api/api";
import {
  CHANGE_SEARCH_FILTER,
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAILED
} from "./constants";

export const setSearchFilter = text => {
  return {
    type: CHANGE_SEARCH_FILTER,
    payload: text
  };
};

export const requestMonsters = () => dispatch => {
  dispatch({ type: REQUEST_MONSTERS_PENDING });
  apiCall("https://jsonplaceholder.typicode.com/users")
    .then(data => dispatch({ type: REQUEST_MONSTERS_SUCCESS, payload: data }))
    .catch(error =>
      dispatch({ type: REQUEST_MONSTERS_FAILED, payload: error })
    );
};
