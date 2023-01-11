import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import AuthProvider from "./Services/Context/Auth";
import reportWebVitals from "./reportWebVitals";
import SharenergyRoutes from "./Routes";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <AuthProvider>
            <React.StrictMode>
                <SharenergyRoutes />
            </React.StrictMode>
        </AuthProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
