import React from "react";
import { shallow } from "enzyme";
import PokeDetails from "./PokeDetails";

describe("PokeDetails", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PokeDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
