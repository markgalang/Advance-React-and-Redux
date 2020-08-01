import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

test('renders "LEARNING UNIT TESTING"', () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain("LEARNING UNIT TEST!");
});
