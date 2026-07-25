import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { UserStateProvider } from "./lib/useUserState.jsx";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <UserStateProvider>
        <App />
      </UserStateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
