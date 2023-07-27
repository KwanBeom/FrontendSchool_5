/* @jsx createElement */
import { createElement, render } from "./react.js";
function Title() {
  return createElement("div", null, createElement("h1", {
    className: "title"
  }, "hell123so woooorld"), createElement("strong", null, "hello"), createElement("h2", null, "asds"));
}
render(createElement(Title, null), document.querySelector("#root"));