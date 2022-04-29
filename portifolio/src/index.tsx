import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import { Home } from "./pages/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Home />);
