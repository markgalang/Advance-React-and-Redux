import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

it("Shows a commentBox component", () => {
  const component = shallow(<App />);

  expect(component.find(CommentBox).length).toEqual(1);
});

it("Shows a commentList component", () => {
  const component = shallow(<App />);

  expect(component.find(CommentList).length).toEqual(1);
});
