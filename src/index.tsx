import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";

import "./normalize.css";
import "./index.css";
import theme from "./theme";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <HashRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </HashRouter>
    </React.StrictMode>
);
