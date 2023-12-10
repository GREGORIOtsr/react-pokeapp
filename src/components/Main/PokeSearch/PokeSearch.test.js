import React from "react";
import { shallow } from "enzyme";
import PokeSearch from "./PokeSearch";

describe("PokeSearch", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PokeSearch />);
    expect(wrapper).toMatchSnapshot();
  });
});
