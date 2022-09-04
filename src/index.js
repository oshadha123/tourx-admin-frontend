import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import LineChart from "./components/LineChart";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    {/* <LineChart /> */}
  </StrictMode>
);