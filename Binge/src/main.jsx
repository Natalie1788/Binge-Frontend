import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import router from "./routes/Routing";


const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    
      <Theme>
        <RouterProvider router={router}/>
      </Theme>
    
  </React.StrictMode>
);
