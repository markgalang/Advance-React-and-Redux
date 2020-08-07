import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
  // turn off axios
  moxios.install();

  // trick axios that it got a response
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [
      { name: "COMMENT 1" },
      { name: "COMMENT 2" },
      { name: "COMMENT 3" },
      { name: "COMMENT 4" },
      { name: "COMMENT 5" },
      { name: "COMMENT 6" },
      { name: "COMMENT 7" },
      { name: "COMMENT 8" },
      { name: "COMMENT 9" },
      { name: "COMMENT 10" },
    ],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch list of comments and display them", (done) => {
  // ATTEMPT TO RENDER *ENTIRE* APP
  const WrappedComponent = mount(
    <Root>
      <App />
    </Root>
  );
  // FIND THE FETCH COMMENT BUTTON AND CLICK IT
  WrappedComponent.find(".fetch-comment-button").simulate("click");

  // INTRODUCE A PAUSE BEFORE CHECKING LIs rendered

  //   setTimeout(() => {
  //     // Re Render Component
  //     WrappedComponent.update();
  //     // EXPECT TO FIND LIST OF COMMENTS!
  //     expect(WrappedComponent.find("li").length).toEqual(10);
  //     done();
  //     WrappedComponent.unmount();
  //   }, [500]);

  moxios.wait(() => {
    // Re Render Component
    WrappedComponent.update();
    // EXPECT TO FIND LIST OF COMMENTS!
    expect(WrappedComponent.find("li").length).toEqual(10);
    done();
    WrappedComponent.unmount();
  });
});
