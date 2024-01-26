import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/header/header";

const App = () => {
    return (
        <Header />
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);