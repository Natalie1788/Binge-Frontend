import React from "react";
import { createRoot } from "react-dom/client";
import Cookbook from "./pages/Cookbook.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <Cookbook />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);
