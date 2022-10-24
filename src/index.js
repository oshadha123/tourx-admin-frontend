import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AuthContext from "./context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <AuthProvider> */}
      <App />
    {/* </AuthProvider> */}
  </StrictMode>
);