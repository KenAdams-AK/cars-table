import React from "react";
import ReactDOM from "react-dom/client";

import { CarsProvider } from "./context/CarsContext";

import ErrorBoundary from "./components/ErrorBoundary";
import App from "./App";

import "./scss/styles.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <CarsProvider>
        <App />
      </CarsProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
