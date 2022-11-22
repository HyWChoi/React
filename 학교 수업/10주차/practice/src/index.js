import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NoContextApp from "./NoContextApp/NoContextApp";
import ContextApp from "./ContextApp/ContextApp";
import ContextHook from "./ContextApp/ContextHook";
import PageColor from "./PageColor/PageColor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PageColor />
  </React.StrictMode>
);
