/**
 * React Element is a Object that is converted into => HTML (That browser understands)
 */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am a h1 tag!")
//   )
// );

/**
 * When there are siblings in one div
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag!"),
    React.createElement("h2", {}, "I am a h2 tag!"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world using React!"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
