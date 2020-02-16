import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

import {
  CHANGE_SEARCH_FILTER,
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAILED
} from "./constants";

import * as actions from "./actions";

const mockStore = configureMockStore([thunkMiddleware]);

describe("setSearchFilter", () => {
  const inputText = "test";
  const expectedAction = {
    type: CHANGE_SEARCH_FILTER,
    payload: inputText
  };

  it("should create an action to search", () => {
    expect(actions.setSearchFilter(inputText)).toEqual(expectedAction);
  });
});

describe("requestMonsters", () => {
  const expectedAction = {
    type: REQUEST_MONSTERS_PENDING
  };

  it("handles requesting robots API", () => {
    const store = mockStore();
    store.dispatch(actions.requestMonsters());
    const storeActions = store.getActions();
    expect(storeActions[0]).toEqual(expectedAction);
  });
});
