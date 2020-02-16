import {
  CHANGE_SEARCH_FILTER,
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAILED
} from "./constants";

import * as reducers from "./reducers";

describe("searchMonsters", () => {
  const initialSearchState = {
    searchFilter: ""
  };

  it("should return the initial state", () => {
    expect(reducers.searchMonsters(undefined, {})).toEqual(initialSearchState);
  });

  it("should handle CHANGE_SEARCH_FILTER state", () => {
    expect(
      reducers.searchMonsters(initialSearchState, {
        type: CHANGE_SEARCH_FILTER,
        payload: "test"
      })
    ).toEqual({ searchFilter: "test" });
  });
});

describe("requestMonsters", () => {
  const initialRequestState = {
    monsters: [],
    isPending: false
  };

  it("should return the initial state", () => {
    expect(reducers.requestMonsters(undefined, {})).toEqual(
      initialRequestState
    );
  });

  it("should handle REQUEST_MONSTERS_PENDING state", () => {
    expect(
      reducers.requestMonsters(initialRequestState, {
        type: REQUEST_MONSTERS_PENDING
      })
    ).toEqual({ monsters: [], isPending: true });
  });

  it("should handle REQUEST_MONSTERS_SUCCESS state", () => {
    expect(
      reducers.requestMonsters(initialRequestState, {
        type: REQUEST_MONSTERS_SUCCESS,
        payload: [{ id: 1234 }]
      })
    ).toEqual({ monsters: [{ id: 1234 }], isPending: false });
  });

  it("should handle REQUEST_MONSTERS_FAILED state", () => {
    expect(
      reducers.requestMonsters(initialRequestState, {
        type: REQUEST_MONSTERS_FAILED,
        payload: "Request failed"
      })
    ).toEqual({ monsters: [], error: "Request failed", isPending: false });
  });
});
