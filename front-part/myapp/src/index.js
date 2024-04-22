import React from "react";
import ReactDOM from "react-dom/client";
import App from "./composants/App";
import "./style.css";

function Afficher() {
  return (
    <div>
      <App />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Afficher />);
