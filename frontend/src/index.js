// Import dependencies
import React from "react";
import ReactDOM from "react-dom/client";

// Importar provider para hacer uso del Context de la aplicación
import { Provider } from "react-redux";

// Import store redux
import store from "./redux/store";

// Import components
import App from "./App";

// Import styles
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
