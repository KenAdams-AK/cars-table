import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { CarsProvider } from "./context/CarsContext";

import ErrorBoundary from "./components/ErrorBoundary";
import App from "./App";

import "./scss/styles.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <CarsProvider>
          <App />
        </CarsProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
