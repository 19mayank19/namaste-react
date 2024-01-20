// const header = document.createElement("h1");
// header.innerHTML = "Hello from JS";
// const root = document.getElementById("root");
// root.appendChild(header);

const div = React.createElement("div", {style: {border: "1px solid black"}}, [
    React.createElement("h1", {}, "first h1"),
    React.createElement("h1", {}, "second h1")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);