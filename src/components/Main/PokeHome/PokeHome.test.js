import React from "react";
import { shallow } from "enzyme";
import PokeHome from "./PokeHome";

describe("PokeHome", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PokeHome />);
    expect(wrapper).toMatchSnapshot();
  });
});
