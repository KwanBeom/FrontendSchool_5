/* @jsx createElement */
import { createElement, render } from "./react.js";
function Title() {
  return (
    <div>
      <h1 className="title">hell123so woooorld</h1>
      <strong>hello</strong>
      <h2>asds</h2>
    </div>
  );
}

render(<Title />, document.querySelector("#root"));
