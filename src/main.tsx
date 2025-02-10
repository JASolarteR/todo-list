import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { TaskContextProvider } from "./context/TaskContext/TaskContextProvider.js";
import React from "react";

const root = document.getElementById("root") as HTMLElement

createRoot(root).render(
  <StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </StrictMode>
);
