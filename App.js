import React from "react";
import ReactDOM from 'react-dom/client';

const div = React.createElement("div", {style: {border: "1px solid black"}}, [
    React.createElement("h1", {}, "first h2"),
    React.createElement("h1", {}, "second h2")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);