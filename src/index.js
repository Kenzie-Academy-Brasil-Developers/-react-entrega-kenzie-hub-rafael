import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ContextDashProvider } from "./context/TechUser";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Reset } from "./styles/Reset";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <BrowserRouter>
      <ContextDashProvider>
        <App />
      </ContextDashProvider>
    </BrowserRouter>
  </React.StrictMode>
);
