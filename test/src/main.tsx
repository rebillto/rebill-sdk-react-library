import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RebillProvider } from "rebill-react";
import "./index.css";

const apiKey = "API_KEY_9018b73f-0bab-47d2-b99d-2a4bfbda2205";
const rebillId = "rebill";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RebillProvider apiKey={apiKey} rebillId={rebillId}>
      <App />
    </RebillProvider>
  </React.StrictMode>
);
