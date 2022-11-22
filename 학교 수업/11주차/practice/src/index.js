import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StyledButtons from "./styled-components/StyledButton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledButtons />
  </React.StrictMode>
);
