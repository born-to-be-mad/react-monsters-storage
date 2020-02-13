import { shallow } from "enzyme";
import React from "react";
import CardList from "./card-list.component";

test("expect to render CardList component - snapshot", () => {
  const mockItems = [
    { id: 101, name: "IVN", username: "Ivan Ivanoff", email: "i.ivanov@tut.by" }
  ];
  const wrapper = shallow(<CardList items={mockItems} />);
  expect(wrapper).toMatchSnapshot();
});
