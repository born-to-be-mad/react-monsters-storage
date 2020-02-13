import { shallow } from "enzyme";
import React from "react";
import MainPage from "./main-page.component";

test("expect to render MainPage component - snapshot", () => {
  const wrapper = shallow(<MainPage />);
  expect(wrapper).toMatchSnapshot();
});
