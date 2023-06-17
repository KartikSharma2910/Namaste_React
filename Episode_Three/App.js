import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <div>Hello I am the title</div>;

const HeadingComponent = () => {
  return (
    <>
      <Title />
      <div>Hello I am the heading component</div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
