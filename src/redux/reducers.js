import {
  CHANGE_SEARCH_FILTER,
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAILED
} from "./constants";

const initialSearchState = {
  searchFilter: ""
};

export const searchMonsters = (state = initialSearchState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FILTER:
      return Object.assign({}, state, { searchFilter: action.payload });
    default:
      return state;
  }
};

const initialRequestState = {
  monsters: [],
  isPending: false
};

export const requestMonsters = (state = initialRequestState, action = {}) => {
  switch (action.type) {
    case REQUEST_MONSTERS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_MONSTERS_SUCCESS:
      return Object.assign({}, state, {
        monsters: action.payload,
        isPending: false
      });
    case REQUEST_MONSTERS_FAILED:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
