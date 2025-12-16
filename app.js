import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const resolveContainer = (target = "#root") => {
  if (typeof document === "undefined") {
    throw new Error("app.js can only be used in a browser environment.");
  }

  if (typeof target === "string") {
    return document.querySelector(target);
  }

  return target;
};

export const mountApp = (target) => {
  const container = resolveContainer(target);

  if (!container) {
    throw new Error(`Kon het element "${String(target ?? "#root")}" niet vinden.`);
  }

  const root = createRoot(container);
  root.render(React.createElement(App));

  return root;
};

if (typeof window !== "undefined") {
  window.gaiAutomotiveApp = window.gaiAutomotiveApp || {};
  window.gaiAutomotiveApp.mount = mountApp;
}
