import { shallow } from "enzyme";
import React from "react";
import MainPage from "./main-page.component";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestMonsters: jest.fn(),
    monsters: [],
    searchFilter: ""
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders MainPage without problems", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters monsters correctly", () => {
  expect(wrapper.instance().filterMonsters([])).toEqual([]);

  const customMockProps = {
    onRequestMonsters: jest.fn(),
    monsters: [
      {
        id: 123,
        name: "James",
        email: "james@bond.com"
      }
    ],
    searchFilter: "ja",
    showChild: false
  };
  const customWrapper = shallow(<MainPage {...customMockProps} />);
  expect(customWrapper.instance().filterMonsters()).toEqual([
    customMockProps.monsters[0]
  ]);
});
