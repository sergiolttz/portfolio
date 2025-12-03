import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import "./assets/styles/main.scss";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HashRouter>
            <LanguageProvider>
                <App />
            </LanguageProvider>
        </HashRouter>
    </React.StrictMode>
);