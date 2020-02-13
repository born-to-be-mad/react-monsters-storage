import { shallow } from "enzyme";
import React from "react";
import Card from "./card.component";

test("expect to render Card component", () => {
  expect(shallow(<Card />).length).toEqual(1);
});

test("expect to render Card component - snapshot", () => {
  const wrapper = shallow(<Card />);
  expect(wrapper).toMatchSnapshot();
});
