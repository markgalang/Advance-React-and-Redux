import React from "react";
import CommentList from "components/CommentList";
import Root from "Root";
import { mount } from "enzyme";

let WrappedCommentList;
beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2"],
  };
  WrappedCommentList = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  WrappedCommentList.unmount();
});

it("creates one LI per comment", () => {
  const listsLenght = WrappedCommentList.find("li").length;
  expect(listsLenght).toEqual(2);
});

it("shows the text from each comment", () => {
  expect(WrappedCommentList.render().text()).toContain("Comment 1");
  expect(WrappedCommentList.render().text()).toContain("Comment 2");
});
