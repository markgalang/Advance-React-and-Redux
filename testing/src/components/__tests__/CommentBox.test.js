import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrappedComponent;
beforeEach(() => {
  wrappedComponent = mount(<CommentBox />);
});

afterEach(() => {
  wrappedComponent.unmount();
});

it("has a text area and a button", () => {
  expect(wrappedComponent.find("textarea").length).toEqual(1);
  expect(wrappedComponent.find("button").length).toEqual(1);
});

it("has a textarea that can handle inputs successfully", () => {
  wrappedComponent.find("textarea").simulate("change", {
    target: { value: "New Comment" },
  });

  wrappedComponent.update();
  expect(wrappedComponent.find("textarea").prop("value")).toEqual(
    "New Comment"
  );
});

it("text area is empty when form is submitted", () => {
  wrappedComponent.find("textarea").simulate("change", {
    target: { value: "Comment Placeholder" },
  });
  wrappedComponent.update();
  expect(wrappedComponent.find("textarea").prop("value")).toEqual(
    "Comment Placeholder"
  );

  wrappedComponent.find("form").simulate("submit");
  wrappedComponent.update();
  expect(wrappedComponent.find("textarea").prop("value")).toEqual("");
});
