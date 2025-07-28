import React from "react";
import ReactDOM from "react-dom"; // Or react-dom/client if you use React 18
import "./index.css";
import App from "./App";

// If you are using React 18, your code might look like this:
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// Based on your error log, you are likely using the older React 17 syntax, which is fine:
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
