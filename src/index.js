import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CounterProvider } from "./context/Counter";
import { BooksProvider } from "./context/Books";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterProvider>
      <BooksProvider>
        <App />
      </BooksProvider>
    </CounterProvider>
  </React.StrictMode>
);
