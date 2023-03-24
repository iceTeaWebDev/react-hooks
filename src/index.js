import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Provider from "./store/Provider";
ReactDOM.createRoot(document.querySelector('#root')).render(<Provider><App/></Provider>)