import React from "react";
import ReactDOM from "react-dom/client";
import Timesale from "./practice/Timesale";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
// ReactDOM.createRoot()를 사용하여 root를 생성
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Timesale />{" "}
    </React.StrictMode> /* Timesale 컴포넌트를 렌더링 */
  );
}, 1000); // setinterval을 통해 1초마다 렌더링
