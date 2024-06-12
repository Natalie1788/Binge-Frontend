import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/Routing";


const root = createRoot(document.getElementById("root"));

root.render(
<React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);
