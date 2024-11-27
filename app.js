import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, [
  React.createElement("h3", {}, "this is a react app 🚀"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
