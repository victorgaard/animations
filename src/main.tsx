import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { LazyMotion } from "framer-motion";
import "./index.css";

const loadFramerMotionFeatures = () => import("./features.ts").then((res) => res.default);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LazyMotion features={loadFramerMotionFeatures} strict>
      <App />
    </LazyMotion>
  </React.StrictMode>
);
